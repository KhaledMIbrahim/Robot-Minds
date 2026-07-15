import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminContent from './AdminContent'

type AdminUser = {
  id: number
  username: string
  email: string
  role: string
  enabled: boolean
}

function UsersTab() {
  const [users, setUsers] = useState<AdminUser[] | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    fetch('/admin/users', { credentials: 'same-origin' })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to load users.')
        return res.json()
      })
      .then((data) => {
        if (!cancelled) setUsers(data)
      })
      .catch(() => {
        if (!cancelled) setError('Could not load users.')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/[0.05] text-white/50">
          <tr>
            <th className="px-4 py-3 font-medium">Username</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => (
            <tr key={u.id} className="border-t border-white/5">
              <td className="px-4 py-3">{u.username}</td>
              <td className="px-4 py-3 text-white/60">{u.email}</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300">{u.role}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="p-4 text-sm text-red-400">{error}</p>}
    </div>
  )
}

export default function Admin() {
  const [tab, setTab] = useState<'content' | 'users'>('content')

  return (
    <div className="min-h-screen bg-[#05060a] px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <Link to="/dashboard" className="text-sm text-white/50 hover:text-white">
          &larr; Back to dashboard
        </Link>
        <h1 className="mt-6 text-3xl font-semibold">Admin panel</h1>
        <p className="mt-2 text-white/60">Only ROLE_ADMIN accounts can reach this page and its API.</p>

        <div className="mt-8 flex gap-2 border-b border-white/10">
          <button
            onClick={() => setTab('content')}
            className={`border-b-2 px-4 py-2 text-sm font-medium transition ${
              tab === 'content' ? 'border-cyan-400 text-white' : 'border-transparent text-white/50 hover:text-white/80'
            }`}
          >
            Home page content
          </button>
          <button
            onClick={() => setTab('users')}
            className={`border-b-2 px-4 py-2 text-sm font-medium transition ${
              tab === 'users' ? 'border-cyan-400 text-white' : 'border-transparent text-white/50 hover:text-white/80'
            }`}
          >
            Users
          </button>
        </div>

        <div className="mt-8">{tab === 'content' ? <AdminContent /> : <UsersTab />}</div>
      </div>
    </div>
  )
}
