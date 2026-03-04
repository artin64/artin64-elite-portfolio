import { useEffect, useMemo, useState } from 'react'
import './App.css'

const roles = ['Full-Stack Developer', 'Creative Frontend Engineer', 'Product-Focused Builder']

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Showcase', '#showcase'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Services', '#services'],
  ['Skills', '#skills'],
  ['Pricing', '#pricing'],
  ['Testimonials', '#testimonials'],
  ['Terminal', '#terminal'],
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
  ['🌐', 'Web Development', 'Modern websites using HTML, CSS, JS, C#, React, Tailwind CSS, and WordPress.'],
  ['🗃️', 'Database Design', 'Efficient database structures for applications and businesses.'],
  ['🔐', 'Cybersecurity Basics', 'Securing websites, accounts, and digital systems from attacks.'],
  ['🎯', 'Career Training', 'Certified coaching for youth, students, and professionals.'],
  ['📈', 'Business & Economics', 'Driving business growth through economic insight and strategic management.'],
  ['🧩', 'Organization & Creative Solutions', 'Structuring documents, organizing workflows, and delivering creative solutions.'],
  ['✍️', 'Content Writing', 'Clear, engaging, and professional written content for various platforms.'],
  ['📱', 'Social Media Management', 'Planning, creating, and managing engaging content across social platforms.'],
]

const experiences = [
  ['2025 - Present', 'Full-Stack Developer', 'Building scalable web applications and business-focused digital products.'],
  ['2024 - 2025', 'Web & Database Specialist', 'Developed responsive websites and optimized relational database architecture.'],
  ['2023 - 2024', 'Creative Technology Freelancer', 'Delivered interactive UI experiences, content systems, and branding sites.'],
]

const testimonials = [
  ['Very professional work, fast delivery, and great communication.', 'Client · Startup'],
  ['Excellent balance between design quality and technical execution.', 'Client · Business Owner'],
  ['Reliable, creative, and focused on real business results.', 'Client · Agency Partner'],
]

const pricing = [
  ['Basic', '€199', 'Portfolio or landing page, responsive, and polished design details.'],
  ['Premium', '€499', 'Multi-section business website with stronger conversion architecture.'],
  ['Ultra', '€999', 'Advanced full-stack solution with backend and scalable architecture.'],
]

const skills = [
  ['💻 HTML / CSS / JavaScript', 95],
  ['⚛️ React & Tailwind CSS', 92],
  ['🟣 C# & .NET', 86],
  ['🐍 Python', 84],
  ['🗄️ SQL & Database Design', 90],
  ['🛡️ Cybersecurity (Basics)', 80],
  ['🔌 Computer Circuits', 74],
  ['🌐 WordPress Development', 82],
  ['📎 Microsoft Office Suite', 93],
  ['📊 Financial Management & Analysis', 88],
  ['🚀 Business Development', 84],
  ['📉 Marketing Analysis', 83],
  ['🧭 Management', 87],
  ['🎓 Career Development Training', 90],
  ['🤝 Customer Service', 92],
  ['📝 Creative Writing', 86],
  ['✒️ Content Strategy / Writing', 89],
  ['🧠 Organization & Creative Solutions', 88],
  ['📣 Social Media Management', 86],
]

const filters = ['All', 'Full-Stack', 'SaaS', 'Marketing', 'Dashboard']

const commandHelp = {
  help: 'Commands: skills, services, projects, offers, contact, clear',
  skills: 'Technical + Business + Creative skills are available in the Skills section.',
  services: 'Web Development, Database Design, Cybersecurity, Career Training, Business, Content, Social Media.',
  projects: 'Use the Projects section to browse filtered work and open case studies.',
  offers: 'Pricing offers: Basic, Premium, Ultra.',
  contact: 'Email: artin.krasniqi100@gmail.com or use the contact form below.',
}

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
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLog, setTerminalLog] = useState(['Welcome to Artin Terminal. Type help'])
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

  const runCommand = (e) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') {
      setTerminalLog(['Terminal cleared. Type help'])
      setTerminalInput('')
      return
    }
    const output = commandHelp[cmd] || `Unknown command: ${cmd}`
    setTerminalLog((prev) => [...prev, `> ${cmd}`, output])
    setTerminalInput('')
  }

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
          <a className="scroll-tag" href="#about">Scroll ↓</a>
        </section>

        <section id="about" className="section reveal">
          <h2>About Me</h2>
          <p className="lead">
            Hello! I'm a passionate Full Stack developer with extensive experience in database design, cybersecurity basics, and building scalable web solutions. I combine technical expertise with strong skills in business management, finance, and data analysis to create applications that deliver real impact for users and organizations. Throughout my projects, I have honed my abilities in managing products, optimizing workflows, and analyzing complex datasets, ensuring that every solution is not only technically robust but also aligned with business objectives. I thrive on solving challenging problems and turning ideas into efficient, user-friendly applications. I believe in continuous learning, embracing innovation, and improving with each project. By blending creativity, technical skills, and strategic thinking, I consistently deliver high-quality results that make a tangible difference.
          </p>
          <div className="social-row">
            <a className="social" href="https://facebook.com" target="_blank" rel="noreferrer">📘 Facebook</a>
            <a className="social" href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a className="social" href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter/X</a>
            <a className="social" href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a className="social" href="https://github.com/artin64" target="_blank" rel="noreferrer">🐙 GitHub</a>
          </div>
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

        <section id="experience" className="section reveal">
          <h2>Experience</h2>
          <div className="grid-3">
            {experiences.map(([date, title, text]) => (
              <TiltCard key={title}>
                <p className="experience-date">{date}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="services" className="section reveal">
          <h2>What I Offer</h2>
          <div className="grid-3">
            {services.map(([icon, title, text]) => (
              <div className="flip-wrap" key={title}>
                <div className="flip-card">
                  <article className="card flip-face front">
                    <div className="icon">{icon}</div>
                    <h3>{title}</h3>
                  </article>
                  <article className="card flip-face back">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </div>
              </div>
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

        <section id="testimonials" className="section reveal">
          <h2>Rate My Work</h2>
          <div className="grid-3">
            {testimonials.map(([quote, who]) => (
              <TiltCard key={who}>
                <p>“{quote}”</p>
                <p><strong>{who}</strong></p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="terminal" className="section reveal">
          <h2>Interactive Terminal</h2>
          <div className="card terminal">
            {terminalLog.map((line, idx) => <p key={`${line}-${idx}`}>{line}</p>)}
            <form onSubmit={runCommand} className="terminal-form">
              <span>$</span>
              <input value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} placeholder="Type command: help" />
            </form>
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
