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
  ['💻', 'HTML / CSS / JavaScript', 95],
  ['⚛️', 'React & Tailwind CSS', 93],
  ['🟣', 'C# & .NET', 86],
  ['🐍', 'Python', 84],
  ['🗄️', 'SQL & Database Design', 91],
  ['🔐', 'Cybersecurity (Basics)', 80],
  ['🌐', 'WordPress Development', 85],
  ['📊', 'Business & Financial Analysis', 88],
  ['📣', 'Social Media Management', 86],
]

const services = [
  ['🌍', 'Web Development', 'Modern, scalable websites and web apps with premium UI quality.'],
  ['🧱', 'Database Design', 'Clean and efficient database structures for business-critical systems.'],
  ['🛡️', 'Cybersecurity Basics', 'Securing accounts, websites, and workflows with practical safeguards.'],
  ['🎯', 'Career Training', 'Certified training for students, youth, and professionals.'],
  ['📈', 'Business & Economics', 'Strategic direction with economic and management insight.'],
  ['✍️', 'Content Writing', 'Professional content strategy and writing for digital platforms.'],
]

const projects = [
  ['Elite Portfolio', 'Web', 'Luxury-grade personal branding platform with animated storytelling.'],
  ['Business Insight Dashboard', 'Database', 'Executive dashboard with analytics and data visualization.'],
  ['Agency WordPress Platform', 'WordPress', 'High-conversion service website for growth-focused teams.'],
  ['Interactive Product UI', 'JS', 'Component-driven frontend with smooth interactions and performance.'],
]

const experiences = [
  ['2025 — Present', 'Full Stack Developer', 'Delivering robust applications aligned with business outcomes.'],
  ['2024 — 2025', 'Web & Database Specialist', 'Built responsive products and optimized relational data architecture.'],
  ['2023 — 2024', 'Creative Technology Freelancer', 'Delivered premium frontend experiences and content systems.'],
]

const pricing = [
  ['Basic', '€249', ['Landing page / portfolio', 'Responsive design', 'Fast deployment']],
  ['Premium', '€699', ['Business website', 'Premium animations', 'Database/contact integrations']],
  ['Ultra', '€1499', ['Full-stack solution', 'Advanced optimization', 'Priority support']],
]

const terminalMap = {
  help: 'commands: skills | services | projects | contact | offers | clear',
  skills: 'Core: React, JavaScript, C#, SQL, Python, Cybersecurity Basics.',
  services: 'web-dev, database-design, cybersecurity, training, business, content.',
  projects: 'Elite Portfolio, Business Dashboard, Agency WordPress, Product UI.',
  offers: 'basic (€249), premium (€699), ultra (€1499)',
  contact: 'email: artin.krasniqi100@gmail.com | socials in Contact section',
}

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function TiltCard({ children, className = '' }) {
  const [style, setStyle] = useState({})

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * 8
    const ry = (x - 0.5) * 10
    setStyle({ transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)` })
  }

  return (
    <article
      className={`card premium-border tilt ${className}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({})}
    >
      {children}
    </article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [filter, setFilter] = useState('All')
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLog, setTerminalLog] = useState(['gold-shell v1.0 — type help'])
  const [form, setForm] = useState({ loading: false, ok: false, err: '' })

  useReveal()

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScroll(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const categories = ['All', 'Web', 'Database', 'WordPress', 'JS']
  const filteredProjects = useMemo(
    () => projects.filter((item) => filter === 'All' || item[1] === filter),
    [filter]
  )

  const runCommand = (e) => {
    e.preventDefault()
    const command = terminalInput.trim().toLowerCase()
    if (!command) return

    if (command === 'clear') {
      setTerminalLog(['terminal cleared'])
      setTerminalInput('')
      return
    }

    const out = terminalMap[command] || `unknown command: ${command}`
    setTerminalLog((prev) => [...prev, `> ${command}`, out])
    setTerminalInput('')
  }

  const submit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    try {
      setForm({ loading: true, ok: false, err: '' })
      const res = await fetch('https://formsubmit.co/ajax/artin.krasniqi100@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('send fail')
      e.currentTarget.reset()
      setForm({ loading: false, ok: true, err: '' })
    } catch {
      setForm({ loading: false, ok: false, err: 'Could not send. Please try again.' })
    }
  }

  return (
    <div className='page' id='home'>
      <div className='progress' style={{ width: `${scroll}%` }} />
      <div className='ambient a1' />
      <div className='ambient a2' />
      <div className='ambient a3' />

      <header className='header glass premium-border'>
        <a className='brand' href='#home'>ARTIN · ELITE</a>
        <button className='chip mobile' onClick={() => setMenuOpen((v) => !v)}>☰</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([name, href]) => (
            <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className='hero reveal'>
          <p className='eyebrow'>PREMIUM FULL STACK EXPERIENCE</p>
          <h1>Gold-standard digital engineering with elite visual precision.</h1>
          <p className='lead'>
            Architecting modern products where performance, business logic, and luxury-level UI craftsmanship meet.
          </p>
          <div className='hero-actions'>
            <a className='btn primary' href='#projects'>View Projects</a>
            <a className='btn ghost' href='#contact'>Let’s Work</a>
          </div>
        </section>

        <section id='about' className='section reveal'>
          <h2>About Me</h2>
          <div className='card premium-border about'>
            <p>
              Hello! I'm a passionate Full Stack developer with extensive experience in database design, cybersecurity basics, and building scalable web solutions. I combine technical expertise with strong skills in business management, finance, and data analysis to create applications that deliver real impact for users and organizations.
            </p>
            <p>
              Throughout my projects, I have honed my abilities in managing products, optimizing workflows, and analyzing complex datasets, ensuring that every solution is not only technically robust but also aligned with business objectives. I thrive on solving challenging problems and turning ideas into efficient, user-friendly applications.
            </p>
            <p>
              I believe in continuous learning, embracing innovation, and improving with each project. By blending creativity, technical skills, and strategic thinking, I consistently deliver high-quality results that make a tangible difference.
            </p>
          </div>
        </section>

        <section id='skills' className='section reveal'>
          <h2>Skills</h2>
          <div className='grid-3'>
            {skills.map(([icon, name, level]) => (
              <TiltCard key={name}>
                <div className='head-skill'>
                  <span>{icon} {name}</span>
                  <strong>{level}%</strong>
                </div>
                <div className='bar'><div style={{ width: `${level}%` }} /></div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='services' className='section reveal'>
          <h2>What I Offer</h2>
          <div className='grid-3'>
            {services.map(([icon, title, text]) => (
              <div className='flip-wrap' key={title}>
                <div className='flip'>
                  <article className='card premium-border flip-face front'>
                    <div className='icon'>{icon}</div>
                    <h3>{title}</h3>
                  </article>
                  <article className='card premium-border flip-face back'>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='projects' className='section reveal'>
          <h2>Projects</h2>
          <div className='filters'>
            {categories.map((cat) => (
              <button key={cat} className={`chip ${cat === filter ? 'active' : ''}`} onClick={() => setFilter(cat)}>{cat}</button>
            ))}
          </div>
          <div className='grid-2'>
            {filteredProjects.map(([title, category, description]) => (
              <TiltCard key={title}>
                <p className='badge'>{category}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='experience' className='section reveal'>
          <h2>Experience</h2>
          <div className='grid-3'>
            {experiences.map(([date, role, text]) => (
              <TiltCard key={role}>
                <p className='badge'>{date}</p>
                <h3>{role}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='pricing' className='section reveal'>
          <h2>Pricing</h2>
          <div className='grid-3'>
            {pricing.map(([plan, price, list]) => (
              <TiltCard key={plan} className='pricing-card'>
                <h3>{plan}</h3>
                <p className='price'>{price}</p>
                <ul>{list.map((x) => <li key={x}>{x}</li>)}</ul>
                <a className='btn primary' href='#contact'>Choose {plan}</a>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='terminal' className='section reveal'>
          <h2>Interactive Terminal</h2>
          <div className='card premium-border terminal'>
            {terminalLog.map((line, idx) => <p key={`${line}-${idx}`}>{line}</p>)}
            <form onSubmit={runCommand} className='terminal-form'>
              <span>$</span>
              <input value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} placeholder='help / skills / services / projects / contact / offers / clear' />
            </form>
          </div>
        </section>

        <section id='contact' className='section reveal'>
          <h2>Contact</h2>
          <div className='socials'>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>📘 Facebook</a>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>💼 LinkedIn</a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>🐦 Twitter/X</a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>📸 Instagram</a>
            <a href='https://github.com/artin64' target='_blank' rel='noreferrer'>🐙 GitHub</a>
          </div>

          <form className='card premium-border contact' onSubmit={submit}>
            <input type='hidden' name='_subject' value='New portfolio message' />
            <input type='hidden' name='_captcha' value='false' />
            <label>Name<input name='name' required /></label>
            <label>Email<input name='email' type='email' required /></label>
            <label>Message<textarea name='message' rows={5} required /></label>
            <button className='btn primary' type='submit' disabled={form.loading}>{form.loading ? 'Sending...' : 'Send Message'}</button>
            {form.ok && <p className='ok'>Message sent successfully ✅</p>}
            {form.err && <p className='err'>{form.err}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}
