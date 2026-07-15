import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, isAdmin } = useAuth()

  return (
    <div className="min-h-screen bg-[#05060a] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm text-white/50 hover:text-white">&larr; Back to site</Link>
        <h1 className="mt-6 text-3xl font-semibold">Welcome back, {user?.username}</h1>
        <p className="mt-2 text-white/60">
          This page is only visible to signed-in users.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Username</dt>
              <dd className="mt-1 text-white">{user?.username}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Email</dt>
              <dd className="mt-1 text-white">{user?.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-white/40">Roles</dt>
              <dd className="mt-1 text-white">{user?.roles.join(', ')}</dd>
            </div>
          </dl>
        </div>

        {isAdmin && (
          <Link
            to="/admin"
            className="mt-6 inline-block rounded-full bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            Go to admin panel →
          </Link>
        )}
      </div>
    </div>
  )
}
