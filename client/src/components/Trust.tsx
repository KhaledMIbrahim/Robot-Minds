import { useContent } from '../context/ContentContext'

export default function Trust() {
  const { get } = useContent()
  const features = [1, 2, 3, 4].map((n) => ({
    title: get(`trust.feature${n}.title`),
    desc: get(`trust.feature${n}.desc`),
  }))
  const quotes = [1, 2].map((n) => ({
    quote: get(`trust.quote${n}.quote`),
    name: get(`trust.quote${n}.name`),
    company: get(`trust.quote${n}.company`),
  }))

  return (
    <section id="trust" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-xs uppercase tracking-widest text-cyan-300">{get('trust.tag')}</p>
      <h2 className="mt-4 max-w-lg text-3xl font-semibold text-white">{get('trust.heading')}</h2>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="text-sm font-medium text-white">{f.title}</h4>
            <p className="mt-2 text-xs text-white/50">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {quotes.map((q) => (
          <blockquote key={q.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-white/80">&ldquo;{q.quote}&rdquo;</p>
            <footer className="mt-4 text-sm text-white/40">
              {q.name} · {q.company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
