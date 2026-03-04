import { useEffect, useMemo, useState } from 'react'
import './App.css'

const roles = ['Full-Stack Developer', 'Creative Frontend Engineer', 'Product-Focused Builder']

const navLinks = [
  ['Home', '#home'],
  ['Showcase', '#showcase'],
  ['Projects', '#projects'],
  ['Labs', '#labs'],
  ['Services', '#services'],
  ['Skills', '#skills'],
  ['Process', '#process'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
]

const stats = [
  ['Projects', 30, '+'],
  ['Experience', 3, '+ years'],
  ['Satisfaction', 99, '%'],
  ['Response', 24, 'h'],
]

const projects = [
  {
    title: 'AI Document Assistant Platform',
    category: 'Full-Stack',
    summary: 'Fast internal search + secure role access for document-heavy teams.',
    result: 'Reduced search friction and increased team clarity.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Issue Management SaaS',
    category: 'SaaS',
    summary: 'Sprint workflow, role permissions, and reporting dashboard in one flow.',
    result: 'Improved visibility and predictable delivery cycles.',
    stack: ['Next.js', 'TypeScript', 'RBAC', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Conversion-First Company Website',
    category: 'Marketing',
    summary: 'Premium redesign focused on credibility, hierarchy, and conversion.',
    result: 'Stronger first-impression trust and cleaner CTA flow.',
    stack: ['React', 'Vite', 'SEO', 'Motion'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Internal KPI Dashboard',
    category: 'Dashboard',
    summary: 'Real-time status and KPI widgets for leadership decision support.',
    result: 'Faster reporting cycles and better project alignment.',
    stack: ['React', 'Node.js', 'Charts', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
]

const services = [
  ['⚡', 'Full-Stack Product Development', 'Architecture, UI, APIs, deployment, and long-term maintainability.'],
  ['🎨', 'Visual & Motion Design Engineering', 'High-end interaction quality with modern, smooth UI behavior.'],
  ['🛡️', 'Performance + Security Optimization', 'Fast loading, secure defaults, and production-grade engineering decisions.'],
]

const labs = [
  ['Interactive Dashboards', 'Building data-rich interfaces that stay readable and actionable.'],
  ['AI Features in Web Apps', 'Embedding practical AI flows without bloating UX complexity.'],
  ['Micro-Interaction Systems', 'Creating subtle detail layers that make products feel premium.'],
]

const processSteps = [
  ['01', 'Discovery', 'Business context, goals, and user behavior mapping.'],
  ['02', 'Design System', 'Visual language, hierarchy, and reusable UI logic.'],
  ['03', 'Build', 'Scalable frontend/backend implementation and QA pass.'],
  ['04', 'Launch & Iterate', 'Deploy, monitor metrics, and optimize continuously.'],
]

const pricing = [
  ['Starter Website', 'From €450', 'Landing pages and simple business sites with premium polish.'],
  ['Business Website', 'From €900', 'Multi-section responsive websites with stronger conversion architecture.'],
  ['Custom Web App', 'Custom Quote', 'Tailored dashboard/SaaS-style products with backend integration.'],
]

const filters = ['All', 'Full-Stack', 'SaaS', 'Marketing', 'Dashboard']

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1200

    const loop = (t) => {
      const p = Math.min((t - start) / duration, 1)
      setN(Math.floor(value * p))
      if (p < 1) raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return <strong>{n}{suffix}</strong>
}

function TiltCard({ children, className = '' }) {
  const [style, setStyle] = useState({})

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * 8
    const ry = (x - 0.5) * 10
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)` })
  }

  const onLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0) rotateY(0) translateY(0)' })

  return (
    <article className={`card tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} style={style}>
      {children}
    </article>
  )
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [form, setForm] = useState({ loading: false, ok: false, err: '' })

  useReveal()

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const role = roles[roleIndex]
    let i = 0
    const timer = setInterval(() => {
      i++
      setTyped(role.slice(0, i))
      if (i >= role.length) {
        clearInterval(timer)
        setTimeout(() => {
          setTyped('')
          setRoleIndex((r) => (r + 1) % roles.length)
        }, 900)
      }
    }, 60)
    return () => clearInterval(timer)
  }, [roleIndex])

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (top / total) * 100 : 0)
      setShowTop(top > 650)
    }
    const onEsc = (e) => e.key === 'Escape' && setSelected(null)

    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('keydown', onEsc)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onEsc)
    }
  }, [])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const f = filter === 'All' || p.category === filter
      const q = `${p.title} ${p.summary} ${p.stack.join(' ')}`.toLowerCase().includes(search.toLowerCase())
      return f && q
    })
  }, [filter, search])

  const submit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get('email') || '')
    if (!email.includes('@')) {
      setForm({ loading: false, ok: false, err: 'Email is not valid.' })
      return
    }

    try {
      setForm({ loading: true, ok: false, err: '' })
      const res = await fetch('https://formsubmit.co/ajax/artin.krasniqi100@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('send failed')
      e.currentTarget.reset()
      setForm({ loading: false, ok: true, err: '' })
    } catch {
      setForm({ loading: false, ok: false, err: 'Could not send. Please try again.' })
    }
  }

  return (
    <div className="page" id="home">
      <div className="progress-line" style={{ width: `${scrollProgress}%` }} />
      <div className="bg-grid" />
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="shape s1" />
      <div className="shape s2" />
      <div className="shape s3" />

      <header className="header glass">
        <a className="brand" href="#home">Artin Krasniqi</a>
        <div className="head-ctrl">
          <button className="chip" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>{theme === 'dark' ? '☀️' : '🌙'}</button>
          <button className="chip mobile" onClick={() => setMenuOpen((v) => !v)}>☰</button>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([n, h]) => <a key={n} href={h} onClick={() => setMenuOpen(false)}>{n}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <p className="eyebrow">PRISHTINË · KOSOVË</p>
          <h1>Unforgettable digital products with depth, motion, and premium execution.</h1>
          <p className="typing">{typed}<span>|</span></p>
          <p className="lead">I build web experiences that feel fast, interactive, and visually elite on every device.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">Explore Projects</a>
            <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>
          <a className="scroll-tag" href="#showcase">Scroll ↓</a>
        </section>

        <section id="showcase" className="section reveal">
          <h2>Visual Showcase</h2>
          <div className="marquee">
            <div className="track">
              {['Motion', 'Depth', 'Premium UI', 'Speed', 'Clarity', 'Conversion', 'Interaction', 'Performance'].map((i) => <span key={i}>{i}</span>)}
              {['Motion', 'Depth', 'Premium UI', 'Speed', 'Clarity', 'Conversion', 'Interaction', 'Performance'].map((i, idx) => <span key={`${i}-${idx}`}>{i}</span>)}
            </div>
          </div>
        </section>

        <section className="stats reveal">
          {stats.map(([label, value, suffix]) => (
            <TiltCard key={label}>
              <Counter value={value} suffix={suffix} />
              <span>{label}</span>
            </TiltCard>
          ))}
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="row-tools">
            <input className="search" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="filters">
              {filters.map((f) => (
                <button key={f} className={`chip ${f === filter ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {filtered.map((p) => (
              <TiltCard key={p.title} className="project">
                <img src={p.image} alt={p.title} loading="lazy" />
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                <button className="btn ghost" onClick={() => setSelected(p)}>Open Case Study</button>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="labs" className="section reveal">
          <h2>R&D Labs</h2>
          <div className="grid-3">
            {labs.map(([title, text]) => (
              <TiltCard key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="services" className="section reveal">
          <h2>Services</h2>
          <div className="grid-3">
            {services.map(([icon, title, text]) => (
              <TiltCard key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Skills</h2>
          <div className="grid-2">
            {skills.map(([name, level]) => (
              <TiltCard key={name}>
                <div className="head-skill"><h3>{name}</h3><span>{level}%</span></div>
                <div className="bar"><div style={{ width: `${level}%` }} /></div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="process" className="section reveal">
          <h2>Process</h2>
          <div className="grid-2">
            {processSteps.map(([n, title, text]) => (
              <TiltCard key={n}>
                <div className="step">{n}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="pricing" className="section reveal">
          <h2>Pricing Snapshot</h2>
          <div className="grid-3">
            {pricing.map(([name, price, text]) => (
              <TiltCard key={name}>
                <h3>{name}</h3>
                <p className="price">{price}</p>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="contact" className="section reveal">
          <h2>Contact</h2>
          <form className="card contact" onSubmit={submit}>
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Message<textarea name="message" rows={5} required /></label>
            <button className="btn primary" type="submit" disabled={form.loading}>{form.loading ? 'Sending...' : 'Send Message'}</button>
            {form.ok && <p className="ok">Message sent successfully ✅</p>}
            {form.err && <p className="err">{form.err}</p>}
          </form>
        </section>
      </main>

      <footer className="footer glass">
        <p>© {new Date().getFullYear()} Artin Krasniqi · Elite Portfolio</p>
        <button className="chip" onClick={() => navigator.clipboard.writeText('artin.krasniqi100@gmail.com')}>Copy Email</button>
      </footer>

      {showTop && <button className="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}
      <a className="floating-cta" href="#contact">Let’s Build</a>

      {selected && (
        <button className="modal" onClick={() => setSelected(null)}>
          <article className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <p>{selected.summary}</p>
            <p><strong>Result:</strong> {selected.result}</p>
            <div className="chips">{selected.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <div className="hero-actions">
              <button className="btn ghost" onClick={() => setSelected(null)}>Close</button>
            </div>
          </article>
        </button>
      )}
    </div>
  )
}
