import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logoIcon from '../assets/logo-icon.png'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent mt-7 ">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold tracking-wide text-white">
            <img src={logoIcon} alt="Robot Minds" className="h-12 w-auto shrink-0" />
            Robot Minds
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/" className="transition text-lg hover:text-white">Home</a>
            <a href="#intelligence" className="transition text-lg hover:text-white">News</a>
            <a href="#trust" className="transition text-lg hover:text-white">Book an Appointment</a>
            <a href="#reserve" className="transition text-lg hover:text-white">About</a>
          </nav>
          <div className="flex items-center gap-3">
            {user ? (
                <>
                  <Link
                      to="/dashboard"
                      className="hidden text-lg text-white/70 transition hover:text-white sm:inline"
                  >
                    {user.username}
                  </Link>
                  <button
                      onClick={() => logout()}
                      className="rounded-full border border-white/25 px-4 py-2 text-lg font-medium text-white transition hover:bg-white/10"
                  >
                    Log out
                  </button>
                </>
            ) : (
                <Link
                    to="/login"
                    className="rounded-full p-5 bg-white px-4 py-2 text-lg font-medium text-black transition hover:bg-white/90"
                >
                  Log in
                </Link>
            )}
          </div>
        </div>
      </header>
  )
}