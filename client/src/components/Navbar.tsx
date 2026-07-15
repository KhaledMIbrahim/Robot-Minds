import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logoIcon from '../assets/logo-icon.png'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
            <img src={logoIcon} alt="Robot Minds" className="h-7 w-auto shrink-0" />
            Robot Minds
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#fleet" className="transition hover:text-white">Fleet</a>
            <a href="#intelligence" className="transition hover:text-white">Intelligence</a>
            <a href="#trust" className="transition hover:text-white">Trust</a>
            <a href="#reserve" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            {user ? (
                <>
                  <Link
                      to="/dashboard"
                      className="hidden text-sm text-white/60 transition hover:text-white sm:inline"
                  >
                    {user.username}
                  </Link>
                  <button
                      onClick={() => logout()}
                      className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Log out
                  </button>
                </>
            ) : (
                <Link
                    to="/login"
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Log in
                </Link>
            )}
          </div>
        </div>
      </header>
  )
}
