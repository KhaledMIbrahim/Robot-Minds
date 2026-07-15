import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { CONTENT_DEFAULTS } from '../content/defaults'

type ContentContextValue = {
  /** Looks up an editable field, falling back to its shipped default. */
  get: (key: string) => string
  loading: boolean
  refresh: () => Promise<void>
}

const ContentContext = createContext<ContentContextValue | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    try {
      const res = await fetch('/api/content')
      if (res.ok) {
        setOverrides(await res.json())
      }
    } catch {
      // Keep whatever we had (or the defaults) if the request fails.
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const get = useCallback(
    (key: string) => {
      const value = overrides[key]
      return value !== undefined && value !== '' ? value : CONTENT_DEFAULTS[key] ?? ''
    },
    [overrides],
  )

  const value = useMemo(() => ({ get, loading, refresh }), [get, loading, refresh])

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return ctx
}
