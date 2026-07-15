import { useContent } from '../context/ContentContext'

export default function Brain() {
  const { get } = useContent()
  const points = [1, 2, 3].map((n) => ({
    title: get(`brain.point${n}.title`),
    desc: get(`brain.point${n}.desc`),
  }))

  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300">{get('brain.tag')}</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{get('brain.heading')}</h2>
          <p className="mt-4 text-white/60">{get('brain.description')}</p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4 border-t border-white/10 pt-4">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <div>
                  <h4 className="font-medium text-white">{p.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img src={get('brain.image')} alt="Glowing neural network" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
