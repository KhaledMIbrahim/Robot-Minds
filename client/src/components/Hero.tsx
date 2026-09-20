import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'

/** File lives in /public, so it is served from the site root. */
const HERO_VIDEO_SRC = '/robotminds-hero-1.mp4'

export default function Hero() {
    const { get } = useContent()
    const videoRef = useRef<HTMLVideoElement>(null)

    // Respect "prefers-reduced-motion": hold on the poster frame instead of looping video.
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const query = window.matchMedia('(prefers-reduced-motion: reduce)')
        const apply = () => {
            if (query.matches) video.pause()
            else void video.play().catch(() => {})
        }

        apply()
        query.addEventListener('change', apply)
        return () => query.removeEventListener('change', apply)
    }, [])

    return (
        <section className="relative flex min-h-svh w-full flex-col overflow-hidden bg-[#05060a]">
            {/* ── 1. Full-bleed background video ── */}
            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={HERO_VIDEO_SRC}
                poster={get('hero.image')}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                tabIndex={-1}
            />

            {/* ── 2. Overlays (readability) ── */}
            {/* Flat scrim: keeps text legible over any frame */}

            {/*<div className="absolute inset-0 bg-black/5" aria-hidden="true" />*/}

            {/* Vertical gradient: darker at top (nav) and bottom (text) */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90"
                aria-hidden="true"
            />
            {/* Blend the hero's bottom edge into the next section */}
            <div
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060a] to-transparent"
                aria-hidden="true"
            />

            {/* ── 3. Content: horizontally centered, anchored to the bottom ── */}
            <div className="relative z-10 mt-auto flex w-full flex-col items-center px-6 pb-12 pt-28 text-center sm:pb-16 sm:pt-32">
                {/* Headline */}
                <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
                    {get('hero.titleLine1')}
                    <br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(135deg, #8B7BFF 0%, #C77DFF 100%)' }}
                    >
            {get('hero.titleLine2')}
          </span>
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)] sm:text-lg">
                    {get('hero.subtitle')}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">

                    {/* Primary */}
                    <a
                        href="#reserve"
                        className="group relative inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                        style={{
                            background: 'linear-gradient(135deg, #471EFF 0%, #9D3CCF 100%)',
                            boxShadow: '0 8px 24px rgba(71,30,255,0.40)',
                        }}
                        onMouseEnter={e => {
                            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 34px rgba(71,30,255,0.55)'
                        }}
                        onMouseLeave={e => {
                            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(71,30,255,0.40)'
                        }}
                    >
                        <span className="absolute inset-0 translate-x-[-110%] skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[110%]" />
                        <span className="relative">{get('hero.cta1')}</span>
                    </a>

                    {/* Secondary — glassmorphism so it reads on any frame */}
                    <a
                        href="#fleet"
                        className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
                    >
                        {get('hero.cta2')}
                    </a>

                    {/* Tertiary — quiet text link */}
                    <Link
                        to="/about"
                        className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-full px-4 text-sm font-semibold text-white/70 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
                    >
                        About
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Stats */}
                <dl className="mt-14 grid w-full max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6 sm:mt-16">
                    <div className="text-center">
                        <dt className="sr-only">{get('hero.stat1Label')}</dt>
                        <dd
                            className="bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
                            style={{ backgroundImage: 'linear-gradient(135deg, #8B7BFF 0%, #C77DFF 100%)' }}
                        >
                            {get('hero.stat1Value')}
                        </dd>
                        <dd className="mt-1 text-[11px] text-white/50 sm:text-xs">{get('hero.stat1Label')}</dd>
                    </div>
                    <div className="text-center">
                        <dt className="sr-only">{get('hero.stat2Label')}</dt>
                        <dd
                            className="bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
                            style={{ backgroundImage: 'linear-gradient(135deg, #8B7BFF 0%, #C77DFF 100%)' }}
                        >
                            {get('hero.stat2Value')}
                        </dd>
                        <dd className="mt-1 text-[11px] text-white/50 sm:text-xs">{get('hero.stat2Label')}</dd>
                    </div>
                    <div className="text-center">
                        <dt className="sr-only">{get('hero.stat3Label')}</dt>
                        <dd
                            className="bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
                            style={{ backgroundImage: 'linear-gradient(135deg, #8B7BFF 0%, #C77DFF 100%)' }}
                        >
                            {get('hero.stat3Value')}
                        </dd>
                        <dd className="mt-1 text-[11px] text-white/50 sm:text-xs">{get('hero.stat3Label')}</dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}