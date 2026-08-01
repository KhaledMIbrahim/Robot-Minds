import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

export default function Hero() {
  const { get } = useContent()

  return (
      <section className="relative overflow-hidden bg-white">

        {/* ── Hero image: very faint texture in background ── */}
        <img
            src={get('hero.image')}
            alt="Robot Minds humanoid robot in a dark lab"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.04] mix-blend-luminosity"
        />

        {/* ── Decorative background layer ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large primary orb — top-left */}
          <div
              className="absolute -top-48 -left-48 h-[640px] w-[640px] rounded-full blur-[120px]"
              style={{ background: 'radial-gradient(circle, rgba(71,30,255,0.18) 0%, rgba(71,30,255,0) 70%)' }}
          />
          {/* Secondary orb — top-right */}
          <div
              className="absolute -top-24 -right-32 h-[480px] w-[480px] rounded-full blur-[100px]"
              style={{ background: 'radial-gradient(circle, rgba(157,60,207,0.14) 0%, rgba(157,60,207,0) 70%)' }}
          />
          {/* Soft base orb — bottom center */}
          <div
              className="absolute -bottom-20 left-1/2 h-[320px] w-[700px] -translate-x-1/2 rounded-full blur-[90px]"
              style={{ background: 'radial-gradient(ellipse, rgba(71,30,255,0.08) 0%, rgba(71,30,255,0) 70%)' }}
          />
          {/* Subtle grid mesh */}
          <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                    'linear-gradient(rgba(71,30,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(71,30,255,1) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
          />
        </div>

        {/* ── Bottom fade: light hero → dark next section ── */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#05060a]" />

        {/* ── Main content ── */}
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">

          {/* Badge */}
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#471EFF]/20 bg-[#471EFF]/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#471EFF]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#471EFF]" />
            {get('hero.badge')}
          </p>

          {/* Headline */}
          <h1 className="max-w-xl text-6xl font-semibold leading-[1.05] text-gray-900">
            {get('hero.titleLine1')}
            <br />
            <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #471EFF 0%, #9D3CCF 100%)' }}
            >
            {get('hero.titleLine2')}
          </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-500">
            {get('hero.subtitle')}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <a
                href="#reserve"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #471EFF 0%, #9D3CCF 100%)',
                  boxShadow: '0 8px 24px rgba(71,30,255,0.30)',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(71,30,255,0.45)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(71,30,255,0.30)'
                }}
            >
              {/* Shimmer on hover */}
              <span className="absolute inset-0 translate-x-[-110%] skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[110%]" />
              {get('hero.cta1')}
            </a>

            {/* Secondary CTA — fleet */}
            <a
                href="#fleet"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#471EFF]/25 bg-white px-7 py-3 text-sm font-semibold text-[#471EFF] shadow-sm transition-all duration-300 hover:border-[#471EFF]/60 hover:bg-[#471EFF]/5 hover:shadow-md"
            >
              {get('hero.cta2')}
            </a>

            {/* Tertiary CTA — About */}
            <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-500 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 hover:shadow-md"
            >
              About
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid max-w-lg grid-cols-3 gap-8 border-t border-gray-100 pt-8">
            <div>
              <div
                  className="text-3xl font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #471EFF 0%, #9D3CCF 100%)' }}
              >
                {get('hero.stat1Value')}
              </div>
              <div className="mt-1 text-xs text-gray-400">{get('hero.stat1Label')}</div>
            </div>
            <div>
              <div
                  className="text-3xl font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #471EFF 0%, #9D3CCF 100%)' }}
              >
                {get('hero.stat2Value')}
              </div>
              <div className="mt-1 text-xs text-gray-400">{get('hero.stat2Label')}</div>
            </div>
            <div>
              <div
                  className="text-3xl font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #471EFF 0%, #9D3CCF 100%)' }}
              >
                {get('hero.stat3Value')}
              </div>
              <div className="mt-1 text-xs text-gray-400">{get('hero.stat3Label')}</div>
            </div>
          </div>
        </div>
      </section>
  )
}
