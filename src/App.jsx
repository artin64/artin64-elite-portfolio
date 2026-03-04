import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Featured', '#featured'],
  ['Projects', '#projects'],
  ['Terminal', '#terminal'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

const roles = ['Full-Stack Developer', 'UI Engineer', 'Product Builder']

const projects = [
  {
    title: 'AI Document Assistant Platform',
    summary: 'Structured document workflow platform for faster search and better team collaboration.',
    category: 'Full-Stack',
    result: 'Reduced search time and improved team navigation flow.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Issue Management SaaS',
    summary: 'Sprint-focused SaaS with role access, clear status flow, and delivery analytics.',
    category: 'SaaS',
    result: 'Improved visibility and delivery consistency for teams.',
    stack: ['Next.js', 'TypeScript', 'RBAC', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Conversion-First Company Site',
    summary: 'Redesigned hierarchy and messaging to boost credibility and lead quality.',
    category: 'Marketing',
    result: 'Stronger brand positioning with cleaner conversion path.',
    stack: ['React', 'Vite', 'SEO', 'Motion'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
]

const filters = ['All', 'Full-Stack', 'SaaS', 'Marketing']

const stats = [
  ['Projects', 30, '+'],
  ['Experience', 3, '+ years'],
  ['Satisfaction', 99, '%'],
  ['Response', 24, 'h'],
]

const skills = [
  ['React / Next.js', 95],
  ['TypeScript / JavaScript', 92],
  ['Node.js / APIs', 89],
  ['UI Engineering', 96],
]

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.14 }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [])
}

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    const duration = 1100
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <strong>{count}{suffix}</strong>
}

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [terminalLine, setTerminalLine] = useState('> npm run build')
  const [formState, setFormState] = useState({ loading: false, ok: false, err: '' })

  useReveal()

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const role = roles[roleIndex]
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTyped(role.slice(0, i))
      if (i >= role.length) {
        clearInterval(timer)
        setTimeout(() => {
          setTyped('')
          setRoleIndex((r) => (r + 1) % roles.length)
        }, 950)
      }
    }, 65)

    return () => clearInterval(timer)
  }, [roleIndex])

  useEffect(() => {
    const onMouse = (e) => setCursor({ x: e.clientX, y: e.clientY })
    const onScroll = () => {
      const top = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (top / total) * 100 : 0)
      setShowTop(top > 550)
    }
    const onEsc = (e) => e.key === 'Escape' && setSelectedProject(null)

    window.addEventListener('mousemove', onMouse)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('keydown', onEsc)
    onScroll()

    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onEsc)
    }
  }, [])

  const visibleProjects = useMemo(() => {
    return projects.filter((p) => {
      const byFilter = filter === 'All' || p.category === filter
      const byQuery = `${p.title} ${p.summary} ${p.stack.join(' ')}`.toLowerCase().includes(query.toLowerCase())
      return byFilter && byQuery
    })
  }, [filter, query])

  const submitContact = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') || '')
    if (!email.includes('@')) {
      setFormState({ loading: false, ok: false, err: 'Please enter a valid email.' })
      return
    }

    try {
      setFormState({ loading: true, ok: false, err: '' })
      const res = await fetch('https://formsubmit.co/ajax/artin.krasniqi100@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form,
      })

      if (!res.ok) throw new Error('Request failed')
      e.currentTarget.reset()
      setFormState({ loading: false, ok: true, err: '' })
    } catch {
      setFormState({ loading: false, ok: false, err: 'Message failed to send. Please try again.' })
    }
  }

  return (
    <div className="page" id="home">
      <div className="cursor" style={{ transform: `translate(${cursor.x - 10}px, ${cursor.y - 10}px)` }} />
      <div className="progress" style={{ width: `${scrollProgress}%` }} />

      <header className="header glass">
        <a className="brand" href="#home">Artin Krasniqi</a>
        <div className="actions-head">
          <button className="chip" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>
          <button className="chip menu" onClick={() => setMenuOpen((v) => !v)}>☰</button>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([n, h]) => <a key={n} href={h} onClick={() => setMenuOpen(false)}>{n}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <p className="eyebrow">PRISHTINË · KOSOVË</p>
          <h1>Elite web experiences with strong design depth and engineering quality.</h1>
          <p className="typing">{typed}<span>|</span></p>
          <p className="lead">I build websites and apps that look premium, feel alive, and perform fast.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">Explore Work</a>
            <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>
          <a className="scroll-indicator" href="#featured">Scroll ↓</a>
        </section>

        <section className="stats reveal">
          {stats.map(([label, value, suffix]) => (
            <article key={label} className="card hover">
              <Counter value={value} suffix={suffix} />
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="featured" className="section reveal">
          <h2>Featured Work</h2>
          <article className="card featured hover">
            <img src={projects[0].image} alt="Featured project" loading="lazy" />
            <div>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].summary}</p>
              <div className="chips">{projects[0].stack.map((s) => <span key={s}>{s}</span>)}</div>
              <button className="btn ghost" onClick={() => setSelectedProject(projects[0])}>Project Details</button>
            </div>
          </article>
        </section>

        <section id="projects" className="section reveal">
          <h2>Projects</h2>
          <div className="tools-row">
            <input className="search" placeholder="Search projects..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="filters">{filters.map((f) => <button key={f} className={`chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>)}</div>
          </div>
          <div className="grid">
            {visibleProjects.map((project) => (
              <article key={project.title} className="card project hover">
                <img src={project.image} alt={project.title} loading="lazy" />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chips">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>
                <button className="btn ghost" onClick={() => setSelectedProject(project)}>Open Case</button>
              </article>
            ))}
          </div>
        </section>

        <section id="terminal" className="section reveal">
          <h2>Interactive Terminal</h2>
          <article className="terminal card">
            <div className="dots"><span /><span /><span /></div>
            <p>{terminalLine}</p>
            <div className="terminal-buttons">
              <button className="chip" onClick={() => setTerminalLine('> npm run deploy')}>Deploy</button>
              <button className="chip" onClick={() => setTerminalLine('> npm run lighthouse')}>Audit</button>
              <button className="chip" onClick={() => setTerminalLine('> git log --oneline')}>Commits</button>
            </div>
          </article>
        </section>

        <section id="skills" className="section reveal">
          <h2>Skills</h2>
          <div className="grid skills">
            {skills.map(([name, level]) => (
              <article className="card" key={name}>
                <div className="row"><h3>{name}</h3><span>{level}%</span></div>
                <div className="bar"><div style={{ width: `${level}%` }} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section reveal">
          <h2>Contact</h2>
          <form className="contact card" onSubmit={submitContact}>
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" required type="email" /></label>
            <label>Message<textarea name="message" rows={5} required /></label>
            <button className="btn primary" type="submit" disabled={formState.loading}>{formState.loading ? 'Sending...' : 'Send Message'}</button>
            {formState.ok && <p className="ok">Message sent successfully ✅</p>}
            {formState.err && <p className="err">{formState.err}</p>}
          </form>
        </section>
      </main>

      <footer className="footer glass">
        <p>© {new Date().getFullYear()} Artin Krasniqi — Premium Full-Stack Portfolio</p>
        <button className="chip" onClick={() => navigator.clipboard.writeText('artin.krasniqi100@gmail.com')}>Copy Email</button>
      </footer>

      {showTop && <button className="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}

      {selectedProject && (
        <button className="modal" onClick={() => setSelectedProject(null)}>
          <article className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.summary}</p>
            <p><strong>Result:</strong> {selectedProject.result}</p>
            <div className="chips">{selectedProject.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <div className="hero-actions">
              <a className="btn primary" href={selectedProject.live}>Live</a>
              <a className="btn ghost" href={selectedProject.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        </button>
      )}
    </div>
  )
}
