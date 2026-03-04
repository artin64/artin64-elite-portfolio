import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Pricing', '#pricing'],
  ['Terminal', '#terminal'],
  ['Contact', '#contact'],
]

const skills = [
  ['HTML / CSS / JavaScript', 95],
  ['React & Tailwind CSS', 93],
  ['C# & .NET', 87],
  ['Python', 85],
  ['SQL & Database Design', 92],
  ['Cybersecurity Basics', 80],
  ['WordPress Development', 84],
  ['Financial & Business Analysis', 88],
  ['Content Strategy & Writing', 90],
]

const services = [
  ['Web Development', 'Modern websites and web applications with scalable architecture and premium execution.'],
  ['Database Design', 'Reliable and efficient relational data models tailored to real business workflows.'],
  ['Cybersecurity Basics', 'Practical security hardening for websites, systems, and day-to-day digital operations.'],
  ['Career Training', 'Professional guidance and certified development support for students and professionals.'],
  ['Business & Economics', 'Strategic insight focused on growth, optimization, and measurable outcomes.'],
  ['Social Media & Content', 'Structured content planning and communication that strengthens digital presence.'],
]

const projects = [
  ['Elite Portfolio Platform', 'Web', 'High-end portfolio with smooth motion, structured information architecture, and polished UX.'],
  ['Business Intelligence Dashboard', 'Database', 'Executive-level analytics interface with decision-focused reporting modules.'],
  ['Agency WordPress System', 'WordPress', 'Conversion-oriented company website with scalable content and service funnels.'],
  ['Interactive Product Interface', 'JS', 'Fast frontend experience with reusable component patterns and clean interaction states.'],
]

const experience = [
  ['2025 — Present', 'Full Stack Developer', 'Developing robust applications aligned with technical quality and business objectives.'],
  ['2024 — 2025', 'Web & Database Specialist', 'Delivered responsive platforms and optimized data architecture for operational efficiency.'],
  ['2023 — 2024', 'Creative Technology Freelancer', 'Built modern digital interfaces focused on usability, clarity, and visual precision.'],
]

const pricing = [
  ['Basic', '€249', ['Single-page website', 'Responsive layout', 'Clean premium styling']],
  ['Premium', '€699', ['Multi-section business site', 'Advanced animations', 'Integrations + optimization']],
  ['Ultra', '€1499', ['Full-stack application', 'Architecture + security', 'Priority delivery & support']],
]

const terminalCommands = {
  help: 'commands: skills | services | projects | contact | offers | clear',
  skills: 'Core stack: React, JavaScript, C#, SQL, Python, WordPress.',
  services: 'web-development, database-design, cybersecurity, training, business, content.',
  projects: 'elite-portfolio, intelligence-dashboard, wordpress-system, product-interface.',
  offers: 'basic (€249), premium (€699), ultra (€1499)',
  contact: 'email: artin.krasniqi100@gmail.com',
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function TiltCard({ children, className = '' }) {
  const [style, setStyle] = useState({})

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * 6
    const ry = (x - 0.5) * 8
    setStyle({ transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)` })
  }

  return (
    <article className={`card frame tilt ${className}`} style={style} onMouseMove={onMove} onMouseLeave={() => setStyle({})}>
      {children}
    </article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [filter, setFilter] = useState('All')
  const [termInput, setTermInput] = useState('')
  const [termLog, setTermLog] = useState(['gold-terminal ready. type help'])
  const [form, setForm] = useState({ loading: false, ok: false, err: '' })

  useReveal()

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filters = ['All', 'Web', 'Database', 'WordPress', 'JS']
  const filteredProjects = useMemo(
    () => projects.filter((p) => filter === 'All' || p[1] === filter),
    [filter]
  )

  const onTerminal = (e) => {
    e.preventDefault()
    const cmd = termInput.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'clear') {
      setTermLog(['terminal cleared'])
      setTermInput('')
      return
    }

    const out = terminalCommands[cmd] || `unknown command: ${cmd}`
    setTermLog((prev) => [...prev, `> ${cmd}`, out])
    setTermInput('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    try {
      setForm({ loading: true, ok: false, err: '' })
      const res = await fetch('https://formsubmit.co/ajax/artin.krasniqi100@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('failed')
      e.currentTarget.reset()
      setForm({ loading: false, ok: true, err: '' })
    } catch {
      setForm({ loading: false, ok: false, err: 'Could not send. Please try again.' })
    }
  }

  return (
    <div className='page' id='home'>
      <div className='scroll-progress' style={{ width: `${scrollProgress}%` }} />
      <div className='ambient ambient-a' />
      <div className='ambient ambient-b' />
      <div className='ambient ambient-c' />

      <header className='header glass frame'>
        <a href='#home' className='brand'>ARTIN KRASNIQI</a>
        <button className='mobile-btn' onClick={() => setMenuOpen((s) => !s)}>Menu</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([n, h]) => (
            <a key={n} href={h} onClick={() => setMenuOpen(false)}>{n}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className='hero reveal'>
          <p className='kicker'>FULL STACK · PREMIUM ENGINEERING</p>
          <h1>Modern gold-standard portfolio experience, crafted for precision and impact.</h1>
          <p className='lead'>I build digital systems that combine elegant interface design, high performance, and strong business alignment.</p>
          <div className='hero-actions'>
            <a className='btn btn-primary' href='#projects'>View Projects</a>
            <a className='btn btn-ghost' href='#contact'>Start a Project</a>
          </div>
        </section>

        <section id='about' className='section reveal'>
          <h2>About Me</h2>
          <div className='card frame about'>
            <p>Hello! I'm a passionate Full Stack developer with extensive experience in database design, cybersecurity basics, and building scalable web solutions. I combine technical expertise with strong skills in business management, finance, and data analysis to create applications that deliver real impact for users and organizations.</p>
            <p>Throughout my projects, I have honed my abilities in managing products, optimizing workflows, and analyzing complex datasets, ensuring that every solution is not only technically robust but also aligned with business objectives. I thrive on solving challenging problems and turning ideas into efficient, user-friendly applications.</p>
            <p>I believe in continuous learning, embracing innovation, and improving with each project. By blending creativity, technical skills, and strategic thinking, I consistently deliver high-quality results that make a tangible difference.</p>
          </div>
        </section>

        <section id='skills' className='section reveal'>
          <h2>Skills</h2>
          <div className='grid grid-3'>
            {skills.map(([name, level]) => (
              <TiltCard key={name}>
                <div className='skill-head'>
                  <h3>{name}</h3>
                  <strong>{level}%</strong>
                </div>
                <div className='bar'><div style={{ width: `${level}%` }} /></div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='services' className='section reveal'>
          <h2>Services</h2>
          <div className='grid grid-3'>
            {services.map(([title, text]) => (
              <TiltCard key={title} className='service-card'>
                <span className='service-line' />
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='projects' className='section reveal'>
          <h2>Projects</h2>
          <div className='filters'>
            {filters.map((x) => (
              <button key={x} className={`filter-btn ${x === filter ? 'active' : ''}`} onClick={() => setFilter(x)}>{x}</button>
            ))}
          </div>
          <div className='grid grid-2'>
            {filteredProjects.map(([title, category, text]) => (
              <TiltCard key={title}>
                <p className='meta'>{category}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='experience' className='section reveal'>
          <h2>Experience</h2>
          <div className='grid grid-3'>
            {experience.map(([date, role, text]) => (
              <TiltCard key={role}>
                <p className='meta'>{date}</p>
                <h3>{role}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='pricing' className='section reveal'>
          <h2>Pricing</h2>
          <div className='grid grid-3'>
            {pricing.map(([name, price, features]) => (
              <TiltCard key={name} className='price-card'>
                <h3>{name}</h3>
                <p className='price'>{price}</p>
                <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
                <a href='#contact' className='btn btn-primary'>Choose {name}</a>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='terminal' className='section reveal'>
          <h2>Interactive Terminal</h2>
          <div className='card frame terminal'>
            {termLog.map((line, i) => <p key={`${line}-${i}`}>{line}</p>)}
            <form onSubmit={onTerminal} className='terminal-form'>
              <span>$</span>
              <input value={termInput} onChange={(e) => setTermInput(e.target.value)} placeholder='help | skills | services | projects | contact | offers | clear' />
            </form>
          </div>
        </section>

        <section id='contact' className='section reveal'>
          <h2>Contact</h2>
          <div className='social-row'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>Facebook</a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>LinkedIn</a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>Twitter / X</a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>Instagram</a>
            <a href='https://github.com/artin64' target='_blank' rel='noreferrer'>GitHub</a>
          </div>

          <form className='card frame contact-form' onSubmit={onSubmit}>
            <input type='hidden' name='_subject' value='New portfolio message' />
            <input type='hidden' name='_captcha' value='false' />
            <label>Name<input name='name' required /></label>
            <label>Email<input name='email' type='email' required /></label>
            <label>Message<textarea name='message' rows={5} required /></label>
            <button className='btn btn-primary' type='submit' disabled={form.loading}>{form.loading ? 'Sending...' : 'Send Message'}</button>
            {form.ok && <p className='ok'>Message sent successfully.</p>}
            {form.err && <p className='err'>{form.err}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}
