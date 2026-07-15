import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

export type AuthUser = {
  username: string
  email: string
  roles: string[]
}

type AuthContextValue = {
  user: AuthUser | null
  loading: boolean
  login: (usernameOrEmail: string, password: string) => Promise<{ ok: true } | { ok: false; message: string }>
  logout: () => Promise<void>
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

async function parseJson(res: Response) {
  const contentType = res.headers.get('content-type') ?? ''
  return contentType.includes('application/json') ? res.json() : null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/me', { credentials: 'same-origin' })
      if (res.ok) {
        setUser(await parseJson(res))
      } else {
        setUser(null)
      }
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const login = useCallback(async (usernameOrEmail: string, password: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ usernameOrEmail, password }),
      })
      const data = await parseJson(res)
      if (res.ok) {
        setUser(data)
        return { ok: true } as const
      }
      if (data?.message) {
        return { ok: false, message: data.message } as const
      }
      return {
        ok: false,
        message: 'Could not reach the server. Please try again in a moment.',
      } as const
    } catch {
      return { ok: false, message: 'Could not reach the server. Please try again.' } as const
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' })
    } finally {
      setUser(null)
    }
  }, [])

  const isAdmin = !!user?.roles.includes('ROLE_ADMIN')

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
