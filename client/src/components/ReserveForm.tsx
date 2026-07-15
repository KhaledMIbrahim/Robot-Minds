import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ReserveForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const contentType = res.headers.get('content-type') ?? ''
      const data = contentType.includes('application/json') ? await res.json() : null
      if (res.ok) {
        setStatus('success')
        setMessage('You\u2019re on the list. We\u2019ll be in touch soon.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data?.message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Could not reach the server. Please try again.')
    }
  }

  return (
    <section id="reserve" className="mx-auto max-w-6xl px-6 py-28">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-10 sm:p-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white">Reserve your Robot Mind</h2>
            <p className="mt-3 max-w-sm text-white/60">
              Join the waitlist for early access and be the first to hear when
              your industry's build is ready.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="reserve-email" className="sr-only">
              Email address
            </label>
            <input
              id="reserve-email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full flex-1 rounded-full border border-white/15 bg-black/30 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-60"
            >
              {status === 'loading' ? 'Submitting…' : 'Join waitlist'}
            </button>
          </form>
        </div>
        {message && (
          <p className={`mt-4 text-sm ${status === 'success' ? 'text-cyan-300' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
