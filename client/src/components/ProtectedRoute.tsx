import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <FullScreenNotice text="Checking your session…" />
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <>{children}</>
}

export function AdminRoute({ children }: { children: ReactNode }) {
  const { user, isAdmin, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <FullScreenNotice text="Checking your session…" />
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (!isAdmin) {
    return <FullScreenNotice text="You need an admin account to view this page." />
  }

  return <>{children}</>
}

function FullScreenNotice({ text }: { text: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05060a] px-6 text-center text-white/70">
      {text}
    </div>
  )
}
