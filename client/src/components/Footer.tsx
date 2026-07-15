import { useContent } from '../context/ContentContext'
import logoIcon from '../assets/logo-icon.png'

export default function Footer() {
  const { get } = useContent()
  return (
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <img src={logoIcon} alt="Robot Minds" className="h-6 w-auto shrink-0" />
              Robot Minds
            </div>
            <p className="mt-1 max-w-xs text-xs text-white/40">{get('footer.tagline')}</p>
          </div>
          <div className="flex gap-10 text-sm text-white/50">
            <div>
              <div className="mb-2 text-white/70">Company</div>
              <ul className="space-y-1 text-xs">
                <li>About</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-white/70">Resources</div>
              <ul className="space-y-1 text-xs">
                <li>Docs</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl text-xs text-white/30">
          © {new Date().getFullYear()} Robot Minds. All rights reserved.
        </div>
      </footer>
  )
}
