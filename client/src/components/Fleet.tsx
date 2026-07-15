import { useContent } from '../context/ContentContext'

export default function Fleet() {
  const { get } = useContent()
  const robots = [1, 2, 3].map((n) => ({
    name: get(`fleet.robot${n}.name`),
    tag: get(`fleet.robot${n}.tag`),
    desc: get(`fleet.robot${n}.desc`),
    img: get(`fleet.robot${n}.image`),
  }))

  return (
    <section id="fleet" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-xs uppercase tracking-widest text-cyan-300">{get('fleet.tag')}</p>
      <h2 className="mt-4 max-w-lg text-3xl font-semibold text-white">{get('fleet.heading')}</h2>
      <p className="mt-4 max-w-lg text-white/60">{get('fleet.description')}</p>

      <div className="mt-16">
        <p className="text-xs uppercase tracking-widest text-white/40">{get('fleet.sectionTag')}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{get('fleet.sectionHeading')}</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {robots.map((robot) => (
            <div
              key={robot.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-square overflow-hidden bg-white/5">
                <img src={robot.img} alt={robot.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white">{robot.name}</h4>
                  <span className="text-xs text-white/40">{robot.tag}</span>
                </div>
                <p className="mt-2 text-sm text-white/60">{robot.desc}</p>
                <a href="#reserve" className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
