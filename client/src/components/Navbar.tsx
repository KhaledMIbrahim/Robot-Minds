import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logoIcon from '../assets/logo-icon.png'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-3 text-sm font-semibold tracking-wide text-white">
            <img
                src={logoIcon}
                alt="Robot Minds"
                className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            />
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
            <button
                type="button"
                className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 text-white transition hover:bg-white/10 md:hidden"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={`block h-px w-4 bg-current transition-transform ${menuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
              <span className={`block h-px w-4 bg-current transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-px w-4 bg-current transition-transform ${menuOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
            </button>
          </div>
          {menuOpen && (
              <nav
                  id="mobile-navigation"
                  className="basis-full border-t border-white/10 pt-4 md:hidden"
                  aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-1 text-sm text-white/70">
                  <a href="#fleet" onClick={closeMenu} className="rounded-lg px-3 py-3 transition hover:bg-white/10 hover:text-white">Fleet</a>
                  <a href="#intelligence" onClick={closeMenu} className="rounded-lg px-3 py-3 transition hover:bg-white/10 hover:text-white">Intelligence</a>
                  <a href="#trust" onClick={closeMenu} className="rounded-lg px-3 py-3 transition hover:bg-white/10 hover:text-white">Trust</a>
                  <a href="#reserve" onClick={closeMenu} className="rounded-lg px-3 py-3 transition hover:bg-white/10 hover:text-white">Contact</a>
                </div>
              </nav>
          )}
        </div>
      </header>
  )
}