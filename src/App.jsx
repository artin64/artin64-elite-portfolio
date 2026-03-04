import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Pricing', '#pricing'],
  ['Testimonials', '#testimonials'],
  ['Terminal', '#terminal'],
  ['Contact', '#contact'],
]

const skillGroups = [
  {
    title: 'Technical Skills',
    items: [
      ['💻', 'HTML / CSS / JavaScript', 95],
      ['⚛️', 'React & Tailwind CSS', 92],
      ['🟣', 'C# & .NET', 87],
      ['🐍', 'Python', 85],
      ['🗄️', 'SQL & Database Design', 90],
      ['🛡️', 'Cybersecurity (Basics)', 80],
      ['🔌', 'Computer Circuits', 76],
      ['🌐', 'WordPress Development', 84],
      ['📎', 'Microsoft Office Suite', 93],
    ],
  },
  {
    title: 'Business & Management',
    items: [
      ['📈', 'Financial Management & Analysis', 89],
      ['🚀', 'Business Development', 86],
      ['📊', 'Marketing Analysis', 84],
      ['🧭', 'Management', 88],
      ['🎓', 'Career Development Training', 90],
      ['🤝', 'Customer Service', 91],
    ],
  },
  {
    title: 'Creative Skills',
    items: [
      ['✍️', 'Creative Writing', 88],
      ['📝', 'Content Strategy / Writing', 90],
      ['🧩', 'Organization & Creative Solutions', 89],
      ['📱', 'Social Media Management', 87],
    ],
  },
]

const services = [
  ['🌐', 'Web Development', 'Modern websites using HTML, CSS, JS, C#, React, Tailwind CSS, and WordPress.'],
  ['🗃️', 'Database Design', 'Efficient database structures for applications and businesses.'],
  ['🔐', 'Cybersecurity Basics', 'Securing websites, accounts, and digital systems from attacks.'],
  ['🎯', 'Career Training', 'Certified coaching for youth, students, and professionals.'],
  ['📉', 'Business & Economics', 'Driving growth through economic insight and strategic management.'],
  ['🧠', 'Organization & Creative Solutions', 'Structuring complex workflows and delivering creative solutions.'],
  ['✒️', 'Content Writing', 'Clear, engaging, and professional written content for various platforms.'],
  ['📣', 'Social Media Management', 'Planning, creating, and managing engaging content across social channels.'],
]

const experiences = [
  ['2025 - Present', 'Full Stack Developer', 'Building scalable web applications and performance-focused user interfaces.'],
  ['2024 - 2025', 'Web & Database Specialist', 'Designed business websites and optimized relational database structures.'],
  ['2023 - 2024', 'Creative Tech Freelancer', 'Delivered interactive frontend solutions, content systems, and brand pages.'],
]

const projects = [
  ['Elite Portfolio', 'Web', 'High-end personal portfolio with animations and interactive sections.'],
  ['Business Dashboard', 'Database', 'Data insights dashboard with role-based access and reporting panels.'],
  ['WordPress Agency Site', 'WordPress', 'Modern company site with service funnels and conversion-focused pages.'],
  ['JavaScript Product UI', 'JS', 'Responsive app interface with reusable components and API integrations.'],
]

const pricing = [
  ['Basic', '€199', ['One-page website', 'Mobile responsive layout', 'Basic SEO setup']],
  ['Premium', '€499', ['Multi-section website', 'Animations + interaction', 'Database/contact integration']],
  ['Ultra', '€999', ['Full stack solution', 'Advanced optimization + security', 'Priority support']],
]

const testimonials = [
  ['“Very professional work and excellent communication.”', 'Client — Small Business'],
  ['“Fast delivery, clean design, and strong technical execution.”', 'Client — Startup Founder'],
  ['“Helped us organize our workflow and improve our online presence.”', 'Client — Service Company'],
]

const terminalHelp = {
  skills: 'Top skills: React, C#, SQL, Cybersecurity Basics, Content Strategy.',
  services: 'Services: web-dev, database-design, cybersecurity, career-training, social-media.',
  projects: 'Projects: Elite Portfolio, Business Dashboard, WordPress Agency Site, JavaScript Product UI.',
  contact: 'Contact: artin.krasniqi100@gmail.com | Scroll to Contact section for direct form.',
  offers: 'Offers available: Basic (€199), Premium (€499), Ultra (€999).',
  help: 'Try: skills | services | projects | contact | offers | clear',
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function TiltCard({ className = '', children }) {
  const [style, setStyle] = useState({})

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (0.5 - y) * 8
    const ry = (x - 0.5) * 10
    setStyle({ transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)` })
  }

  return (
    <article className={`card tilt ${className}`} onMouseMove={onMove} onMouseLeave={() => setStyle({})} style={style}>
      {children}
    </article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [command, setCommand] = useState('')
  const [logs, setLogs] = useState(['Welcome to Artin Terminal. Type help'])
  const [form, setForm] = useState({ loading: false, ok: false, err: '' })

  useReveal()

  const categories = ['All', 'Web', 'Database', 'WordPress', 'JS']
  const filteredProjects = useMemo(
    () => projects.filter((p) => filter === 'All' || p[1] === filter),
    [filter]
  )

  const handleCommand = (e) => {
    e.preventDefault()
    const text = command.trim().toLowerCase()
    if (!text) return

    if (text === 'clear') {
      setLogs(['Terminal cleared. Type help'])
      setCommand('')
      return
    }

    const response = terminalHelp[text] || `Unknown command: ${text}. Type help.`
    setLogs((prev) => [...prev, `> ${text}`, response])
    setCommand('')
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
      if (!res.ok) throw new Error('send failed')
      e.currentTarget.reset()
      setForm({ loading: false, ok: true, err: '' })
    } catch {
      setForm({ loading: false, ok: false, err: 'Could not send. Please try again.' })
    }
  }

  return (
    <div className="page">
      <header className="header glass">
        <a className="brand" href="#about">Artin Krasniqi</a>
        <button className="chip mobile" onClick={() => setMenuOpen((v) => !v)}>☰</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([n, h]) => (
            <a key={n} href={h} onClick={() => setMenuOpen(false)}>{n}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="about" className="hero reveal">
          <h1>Elite Full Stack Portfolio</h1>
          <p className="lead">
            Hello! I'm a passionate Full Stack developer with extensive experience in database design, cybersecurity basics, and building scalable web solutions. I combine technical expertise with strong skills in business management, finance, and data analysis to create applications that deliver real impact for users and organizations. Throughout my projects, I have honed my abilities in managing products, optimizing workflows, and analyzing complex datasets, ensuring that every solution is not only technically robust but also aligned with business objectives. I thrive on solving challenging problems and turning ideas into efficient, user-friendly applications. I believe in continuous learning, embracing innovation, and improving with each project. By blending creativity, technical skills, and strategic thinking, I consistently deliver high-quality results that make a tangible difference.
          </p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">📘 Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter/X</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">🐙 GitHub</a>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <h2>Skills</h2>
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="grid-2">
                {group.items.map(([icon, name, level]) => (
                  <TiltCard key={name}>
                    <div className="head-skill"><span>{icon} {name}</span><strong>{level}%</strong></div>
                    <div className="bar"><div style={{ width: `${level}%` }} /></div>
                    <div className="radial" style={{ '--value': `${level}%` }} />
                  </TiltCard>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="experience" className="section reveal">
          <h2>Experience</h2>
          <div className="timeline">
            {experiences.map(([date, role, text]) => (
              <TiltCard key={role}>
                <p className="date">{date}</p>
                <h3>{role}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="services" className="section reveal">
          <h2>What I Offer</h2>
          <div className="grid-3">
            {services.map(([icon, title, text]) => (
              <div key={title} className="flip-wrap">
                <div className="flip">
                  <div className="card flip-front">
                    <div className="icon">{icon}</div>
                    <h3>{title}</h3>
                  </div>
                  <div className="card flip-back">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <h2>Portfolio Projects</h2>
          <div className="filters">
            {categories.map((c) => (
              <button key={c} className={`chip ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="grid-2">
            {filteredProjects.map(([title, cat, text]) => (
              <TiltCard key={title}>
                <p className="date">{cat}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="pricing" className="section reveal">
          <h2>Pricing / Offers</h2>
          <div className="grid-3">
            {pricing.map(([name, price, items]) => (
              <TiltCard key={name} className="price-card">
                <h3>{name}</h3>
                <p className="price">{price}</p>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="btn" href="#contact">Choose {name}</a>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section reveal">
          <h2>Rate My Work / Testimonials</h2>
          <div className="grid-3">
            {testimonials.map(([quote, who]) => (
              <TiltCard key={who}>
                <p>{quote}</p>
                <strong>{who}</strong>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="terminal" className="section reveal">
          <h2>Interactive Terminal</h2>
          <div className="terminal card">
            {logs.map((line, i) => <p key={`${line}-${i}`}>{line}</p>)}
            <form onSubmit={handleCommand}>
              <span>$</span>
              <input value={command} onChange={(e) => setCommand(e.target.value)} placeholder="Type command (help, skills, services...)" />
            </form>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <h2>Contact / CTA</h2>
          <form className="card contact" onSubmit={submit}>
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Message<textarea name="message" rows={5} required /></label>
            <button className="btn" type="submit" disabled={form.loading}>{form.loading ? 'Sending...' : 'Send Message'}</button>
            {form.ok && <p className="ok">Message sent successfully ✅</p>}
            {form.err && <p className="err">{form.err}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}
