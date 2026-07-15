import { useContent } from '../context/ContentContext'

export default function Hero() {
  const { get } = useContent()
  return (
    <section className="relative overflow-hidden">
      <img
        src={get('hero.image')}
        alt="Robot Minds humanoid robot in a dark lab"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#05060a]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
        <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-cyan-300">
          {get('hero.badge')}
        </p>
        <h1 className="max-w-xl text-6xl font-semibold leading-[1.05] text-white">
          {get('hero.titleLine1')}
          <br />
          {get('hero.titleLine2')}
        </h1>
        <p className="mt-6 max-w-md text-lg text-white/70">{get('hero.subtitle')}</p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#reserve"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            {get('hero.cta1')}
          </a>
          <a
            href="#fleet"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
          >
            {get('hero.cta2')}
          </a>
        </div>
        <div className="mt-20 grid max-w-lg grid-cols-3 gap-8 border-t border-white/10 pt-8">
          <div>
            <div className="text-3xl font-semibold text-white">{get('hero.stat1Value')}</div>
            <div className="mt-1 text-xs text-white/50">{get('hero.stat1Label')}</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-white">{get('hero.stat2Value')}</div>
            <div className="mt-1 text-xs text-white/50">{get('hero.stat2Label')}</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-white">{get('hero.stat3Value')}</div>
            <div className="mt-1 text-xs text-white/50">{get('hero.stat3Label')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
