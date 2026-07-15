import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logoIcon from '../assets/logo-icon.png'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const from = (location.state as { from?: Location })?.from?.pathname ?? '/'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const result = await login(usernameOrEmail, password)
    setSubmitting(false)
    if (result.ok) {
      navigate(from, { replace: true })
    } else {
      setError(result.message)
    }
  }

  return (
      <div className="flex min-h-screen items-center justify-center bg-[#05060a] px-6 py-16 text-white">
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-8 flex items-center gap-2 text-sm font-semibold tracking-wide text-white/80">
            <img src={logoIcon} alt="Robot Minds" className="h-7 w-auto shrink-0" />
            Robot Minds
          </Link>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h1 className="text-2xl font-semibold">Sign in</h1>
            <p className="mt-2 text-sm text-white/50">
              Use your username or email to access your account.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="usernameOrEmail" className="mb-1.5 block text-sm text-white/70">
                  Username or email
                </label>
                <input
                    id="usernameOrEmail"
                    required
                    autoComplete="username"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                    placeholder="admin"
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/60"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm text-white/70">
                  Password
                </label>
                <input
                    id="password"
                    required
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/60"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-60"
              >
                {submitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
          </div>

          {/*<p className="mt-6 text-center text-xs text-white/30">*/}
          {/*  Demo accounts — admin: admin / admin123 · user: demo / demo1234*/}
          {/*</p>*/}
        </div>
      </div>
  )
}
