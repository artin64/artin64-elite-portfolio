import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Featured', '#featured'],
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['Skills', '#skills'],
  ['Roadmap', '#roadmap'],
  ['About', '#about'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

const stats = [
  ['30+', 'Projects delivered'],
  ['3+', 'Years experience'],
  ['99%', 'Client satisfaction'],
  ['24h', 'Avg response time'],
]

const services = [
  ['⚡', 'Full-Stack Development', 'From architecture to deployment with maintainable, scalable code.'],
  ['🎯', 'Conversion-Focused UI', 'Interfaces designed to communicate value and increase lead intent.'],
  ['🛡️', 'Performance & Security', 'Fast loading, secure patterns, and robust technical foundations.'],
]

const skillSet = [
  ['React / Next.js', 95],
  ['TypeScript / JavaScript', 92],
  ['Node.js / API Design', 89],
  ['UI Engineering', 96],
  ['Performance Optimization', 88],
  ['PostgreSQL / Data Modeling', 84],
]

const timeline = [
  ['2026', 'Premium product delivery', 'Scaling quality-focused builds with faster delivery workflows.'],
  ['2025', 'SaaS collaboration phase', 'Built internal tools, role systems, and KPI-oriented dashboards.'],
  ['2024', 'Full-stack expansion', 'Deepened backend architecture, deployment pipelines, and optimization.'],
]

const faqs = [
  {
    q: 'What projects do you usually take?',
    a: 'Business websites, dashboards, and full-stack web applications with clear business goals.',
  },
  {
    q: 'Can you improve an existing website?',
    a: 'Yes. I can redesign structure, optimize speed, improve UX flow, and modernize visuals.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. Most projects are remote with clear milestones, timelines, and weekly progress updates.',
  },
]

const allProjects = [
  {
    title: 'AI Document Assistant Platform',
    summary: 'Structured document workflow platform for faster search and better team collaboration.',
    category: 'Full-Stack',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Issue Management SaaS',
    summary: 'Sprint-focused SaaS with role access, clear status flow, and delivery analytics.',
    category: 'SaaS',
    stack: ['Next.js', 'TypeScript', 'RBAC', 'Analytics'],
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Conversion-First Company Site',
    summary: 'Redesigned hierarchy and messaging to boost credibility and lead quality.',
    category: 'Marketing',
    stack: ['React', 'Vite', 'SEO', 'Motion'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Internal Client Dashboard',
    summary: 'KPI-based dashboard architecture for better visibility and faster team decisions.',
    category: 'Dashboard',
    stack: ['React', 'Node.js', 'Charts', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
]

const filters = ['All', 'Full-Stack', 'SaaS', 'Marketing', 'Dashboard']

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.14 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [theme, setTheme] = useState('dark')
  const [filter, setFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [copied, setCopied] = useState(false)

  useReveal()

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? (top / height) * 100 : 0
      setScrollProgress(progress)
      setShowTop(top > 550)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onEsc = (event) => event.key === 'Escape' && setLightboxImage('')
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return allProjects
    return allProjects.filter((p) => p.category === filter)
  }, [filter])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('artin.krasniqi100@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="page" id="home">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div className="bg-grid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="floating-shape shape-square" />
      <div className="floating-shape shape-diamond" />

      <header className="header glass">
        <a className="brand" href="#home">Artin Krasniqi</a>

        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button className="menu-toggle" aria-label="Open navigation" onClick={() => setMenuOpen((v) => !v)}>☰</button>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>Start Project</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <div className="hero-tag pulse">Available for high-impact freelance projects</div>
          <p className="eyebrow">FULL-STACK WEB DEVELOPER · PRISHTINË, KOSOVË</p>
          <h1>Building exceptional digital products with premium UI, speed, and clarity.</h1>
          <p className="lead">
            I help founders and businesses launch websites and web apps that look elite, feel smooth,
            and perform reliably across all devices.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore Projects</a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="quick-links">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
            <button className="chip-btn" onClick={copyEmail}>{copied ? 'Copied ✓' : 'Copy Email'}</button>
          </div>
        </section>

        <section className="ticker reveal" aria-label="Tech ticker">
          <div className="ticker-track">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'UI/UX', 'SEO', 'Performance', 'Security'].map((t) => (
              <span key={t}>{t}</span>
            ))}
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'UI/UX', 'SEO', 'Performance', 'Security'].map((t, i) => (
              <span key={`${t}-${i}`}>{t}</span>
            ))}
          </div>
        </section>

        <section className="stats reveal" aria-label="stats">
          {stats.map(([value, label], idx) => (
            <article key={label} className="card pop" style={{ animationDelay: `${idx * 120}ms` }}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="featured" className="section reveal">
          <h2>Featured Work</h2>
          <article className="card featured-card hover-lift">
            <img
              src={allProjects[0].image}
              alt="Featured project preview"
              loading="lazy"
              onClick={() => setLightboxImage(allProjects[0].image)}
            />
            <div>
              <h3>{allProjects[0].title}</h3>
              <p>{allProjects[0].summary}</p>
              <div className="chips">
                {allProjects[0].stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-links">
                <a href={allProjects[0].live}>Live Demo</a>
                <a href={allProjects[0].github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        </section>

        <section id="projects" className="section reveal">
          <h2>Project Showcase</h2>
          <p className="section-intro">Filter by category and explore polished case-oriented builds.</p>

          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {visibleProjects.map((project) => (
              <article key={project.title} className="card hover-lift project-card">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  onClick={() => setLightboxImage(project.image)}
                />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chips">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.live}>Live Demo</a>
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section reveal">
          <h2>Services</h2>
          <div className="grid-3">
            {services.map(([icon, title, text]) => (
              <article key={title} className="card hover-lift">
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Skills & Tech Stack</h2>
          <div className="skills-grid">
            {skillSet.map(([name, level]) => (
              <article key={name} className="card hover-lift">
                <div className="skill-head">
                  <h3>{name}</h3>
                  <span>{level}%</span>
                </div>
                <div className="progress"><div className="progress-fill" style={{ width: `${level}%` }} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section reveal">
          <h2>Roadmap</h2>
          <div className="timeline-grid">
            {timeline.map(([year, title, text]) => (
              <article key={year} className="card hover-lift timeline-card">
                <span className="year">{year}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>About</h2>
          <p>
            I’m Artin Krasniqi, a full-stack developer focused on premium digital execution. I combine technical depth
            with product thinking to deliver clean, scalable, conversion-ready experiences.
          </p>
          <p>
            My style: clear structure, refined visual hierarchy, smooth interactions, and performance that feels instant.
          </p>
        </section>

        <section id="faq" className="section reveal">
          <h2>FAQ</h2>
          <div className="faq-grid">
            {faqs.map((item, idx) => (
              <article key={item.q} className="card hover-lift faq-card">
                <button className="faq-q" onClick={() => setOpenFaq((v) => (v === idx ? -1 : idx))}>
                  <span>{item.q}</span>
                  <strong>{openFaq === idx ? '−' : '+'}</strong>
                </button>
                {openFaq === idx && <p>{item.a}</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <h2>Contact Me</h2>
          <p>Share your project goals, budget range, and timeline. I’ll answer with a clear execution plan.</p>

          <form className="contact-form" action="https://formsubmit.co/artin.krasniqi100@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@email.com" /></label>
            <label>Message<textarea name="message" rows={5} required placeholder="Project details, budget, timeline..." /></label>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>

          <div className="quick-links contact-links">
            <a href="mailto:artin.krasniqi100@gmail.com">Email</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+38349732298">Phone</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Artin Krasniqi · Full-Stack Web Developer</p>
      </footer>

      {showTop && (
        <button className="top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Top
        </button>
      )}

      <a className="floating-contact" href="#contact">Let’s Build</a>

      {lightboxImage && (
        <button className="lightbox" onClick={() => setLightboxImage('')} aria-label="Close preview">
          <img src={lightboxImage} alt="Project preview full size" />
        </button>
      )}
    </div>
  )
}
