import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Testimonials', '#testimonials'],
  ['Contact', '#contact'],
]

const skills = [
  ['html', 'HTML / CSS', 95],
  ['js', 'JavaScript', 92],
  ['react', 'React & Tailwind CSS', 93],
  ['dotnet', 'C# & .NET', 87],
  ['python', 'Python', 85],
  ['db', 'SQL & Database Design', 92],
  ['shield', 'Cybersecurity Basics', 80],
  ['wp', 'WordPress Development', 84],
  ['brief', 'Financial & Business Analysis', 88],
]

const services = [
  ['code', 'Web Development', 'Modern websites and full-stack applications built for scale and reliability.'],
  ['db', 'Database Design', 'Structured data architecture that improves performance, accuracy, and maintainability.'],
  ['shield', 'Cybersecurity Basics', 'Practical security hardening for websites, accounts, and operational workflows.'],
  ['trend', 'Business & Economics', 'Business strategy and analytical insights aligned with measurable outcomes.'],
  ['doc', 'Content & Communication', 'Clear, high-impact writing and content systems for digital platforms.'],
  ['career', 'Career Training', 'Mentoring and structured training for youth, students, and professionals.'],
]

const projects = [
  {
    title: 'Elite Portfolio Platform',
    category: 'Web',
    summary: 'Luxury portfolio experience with modern motion design and clear information hierarchy.',
    result: 'Elevated personal brand presence and stronger first impression.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Business Intelligence Dashboard',
    category: 'Database',
    summary: 'Executive dashboard with KPI reporting, data insights, and role-based data visibility.',
    result: 'Faster decision-making with clearer performance visibility.',
    image: 'https://images.unsplash.com/photo-1551281044-8b5bdc5c39b1?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Agency WordPress System',
    category: 'WordPress',
    summary: 'Service-focused website with conversion-driven content architecture and admin control.',
    result: 'Improved lead generation and easier content operations.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Interactive Product Interface',
    category: 'JS',
    summary: 'Fast, component-based frontend with polished interactions and responsive behavior.',
    result: 'Higher engagement and smoother user journeys.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
  },
]

const experience = [
  ['2025 — Present', 'Full Stack Developer', 'Building robust software products with premium frontend execution and business alignment.'],
  ['2024 — 2025', 'Web & Database Specialist', 'Designed responsive systems and optimized database structures for operational efficiency.'],
  ['2023 — 2024', 'Creative Technology Freelancer', 'Delivered high-quality digital interfaces, websites, and content systems for clients.'],
]

const testimonials = [
  ['Very clean execution, serious design quality, and excellent communication.', 'Client · Startup Founder'],
  ['Fast delivery with enterprise-level structure and detail.', 'Client · Business Owner'],
  ['Strong blend of design thinking and technical implementation.', 'Client · Agency Partner'],
]

const iconMap = {
  code: 'M4 7l8-4 8 4M4 17l8 4 8-4M12 3v18',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 6c0 1.7 3.6 3 8 3s8-1.3 8-3m-16 0v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  shield: 'M12 3l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z',
  trend: 'M4 16l5-5 4 4 7-7M20 8V3h-5',
  doc: 'M7 3h7l5 5v13H7zM14 3v5h5',
  career: 'M3 20h18M6 20V8h12v12M9 8V5h6v3',
  html: 'M4 4h16l-2 16-6 2-6-2zM8 8h8M8 12h8M8 16h6',
  js: 'M6 5h12v14H6zM10 16c.4.7 1 1 2 1 1.2 0 2-.7 2-2v-5',
  react: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 12c-4.5 0-8-1.8-8-4s3.5-4 8-4 8 1.8 8 4-3.5 4-8 4zm0 0c4.5 0 8 1.8 8 4s-3.5 4-8 4-8-1.8-8-4 3.5-4 8-4zm0 0c0-4.5 1.8-8 4-8s4 3.5 4 8-1.8 8-4 8-4-3.5-4-8zm0 0c0 4.5-1.8 8-4 8s-4-3.5-4-8 1.8-8 4-8 4 3.5 4 8z',
  dotnet: 'M4 6h16v12H4zM8 10h8M8 14h5',
  python: 'M7 7c0-2 2-3 5-3s5 1 5 3v3H7V7zm10 10c0 2-2 3-5 3s-5-1-5-3v-3h10v3z',
  wp: 'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18zm-4.2 5.3c.4 0 .7.1 1.1.1-.1.2-.2.6-.2 1l2 5.9 1.2-3.6-.8-2.2c-.2-.5-.3-.8-.3-1.1.6 0 1.2-.1 1.9-.1-.1.2-.2.6-.2 1l2 6 1.1-3.3c.3-1 .5-1.7.5-2.3 0-.8-.3-1.4-.8-1.9a7 7 0 0 1 1.7 4.6 7 7 0 0 1-3.8 6.2l2.3-6.6c.2-.6.4-1.2.4-1.6 0-.4-.1-.8-.2-1.1l-2.7 7.8-.2.6a7 7 0 0 1-4.2-1.4l-2.4-6.6c-.3-.9-.5-1.4-.9-2 .4 0 .8-.1 1.3-.1z',
  brief: 'M3 7h18v12H3zM8 7V5h8v2M3 12h18',
}

function Icon({ name }) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='icon'>
      <path d={iconMap[name]} />
    </svg>
  )
}

function levelLabel(value) {
  if (value >= 90) return 'Expert'
  if (value >= 75) return 'Advanced'
  if (value >= 60) return 'Intermediate'
  return 'Beginner'
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'))
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function TiltCard({ children, className = '' }) {
  const [style, setStyle] = useState({})
  const move = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setStyle({ transform: `perspective(1000px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-3px)` })
  }

  return (
    <article className={`card frame tilt ${className}`} style={style} onMouseMove={move} onMouseLeave={() => setStyle({})}>
      {children}
    </article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [progress, setProgress] = useState(0)
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ loading: false, ok: false, err: '' })

  useReveal()

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const p = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(p)
      document.documentElement.style.setProperty('--parallax-y', `${window.scrollY * 0.08}px`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const categories = ['All', 'Web', 'Database', 'WordPress', 'JS']
  const filteredProjects = useMemo(
    () => projects.filter((p) => filter === 'All' || p.category === filter),
    [filter]
  )

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
      if (!res.ok) throw new Error('failed')
      e.currentTarget.reset()
      setForm({ loading: false, ok: true, err: '' })
    } catch {
      setForm({ loading: false, ok: false, err: 'Could not send. Please try again.' })
    }
  }

  return (
    <div className='page' id='home'>
      <div className='scroll-progress' style={{ width: `${progress}%` }} />
      <div className='ambient ambient-a' />
      <div className='ambient ambient-b' />

      <header className='header glass frame'>
        <a href='#home' className='brand'>ARTIN KRASNIQI</a>
        <div className='controls'>
          <button className='control-btn' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label='Toggle theme'>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button className='mobile-btn' onClick={() => setMenuOpen((v) => !v)} aria-label='Open menu'>Menu</button>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([name, href]) => (
            <a key={name} href={href} onClick={() => setMenuOpen(false)}>{name}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className='hero reveal'>
          <p className='kicker'>FULL STACK · PREMIUM ENGINEERING</p>
          <h1>Professional portfolio crafted with precision, motion, and modern structure.</h1>
          <p className='lead'>
            I design and build scalable digital products where visual elegance, performance, and business value work together.
          </p>
          <div className='hero-actions'>
            <a className='btn btn-primary' href='#projects'>View Projects</a>
            <a className='btn btn-ghost' href='#contact'>Contact Me</a>
          </div>
        </section>

        <section id='about' className='section reveal'>
          <h2>About Me</h2>
          <div className='card frame'>
            <p>Hello! I'm a passionate Full Stack developer with extensive experience in database design, cybersecurity basics, and building scalable web solutions. I combine technical expertise with strong skills in business management, finance, and data analysis to create applications that deliver real impact for users and organizations.</p>
            <p>Throughout my projects, I have honed my abilities in managing products, optimizing workflows, and analyzing complex datasets, ensuring that every solution is not only technically robust but also aligned with business objectives. I thrive on solving challenging problems and turning ideas into efficient, user-friendly applications.</p>
            <p>I believe in continuous learning, embracing innovation, and improving with each project. By blending creativity, technical skills, and strategic thinking, I consistently deliver high-quality results that make a tangible difference.</p>
          </div>
        </section>

        <section id='skills' className='section reveal'>
          <h2>Skills</h2>
          <div className='grid grid-3'>
            {skills.map(([icon, name, level]) => (
              <TiltCard key={name}>
                <div className='skill-head'>
                  <div className='skill-title'><Icon name={icon} /><h3>{name}</h3></div>
                  <span className='level' title={levelLabel(level)}>{level}%</span>
                </div>
                <div className='bar' role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={level} aria-label={name}>
                  <div style={{ width: `${level}%` }} />
                </div>
                <p className='skill-meta'>{levelLabel(level)}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='services' className='section reveal'>
          <h2>Services</h2>
          <div className='grid grid-3'>
            {services.map(([icon, title, text]) => (
              <TiltCard key={title}>
                <div className='service-top'><Icon name={icon} /><h3>{title}</h3></div>
                <p>{text}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='projects' className='section reveal'>
          <h2>Projects</h2>
          <div className='filters'>
            {categories.map((c) => (
              <button key={c} className={`filter-btn ${c === filter ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className='grid grid-2'>
            {filteredProjects.map((p) => (
              <TiltCard key={p.title} className='project-card'>
                <img src={p.image} alt={p.title} loading='lazy' />
                <p className='meta'>{p.category}</p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <button className='btn btn-ghost' onClick={() => setSelected(p)}>View Details</button>
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
            {pricing.map(([name, price, list]) => (
              <TiltCard key={name} className='price-card'>
                <h3>{name}</h3>
                <p className='price'>{price}</p>
                <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href='#contact' className='btn btn-primary'>Choose {name}</a>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id='testimonials' className='section reveal'>
          <h2>Testimonials</h2>
          <div className='grid grid-3'>
            {testimonials.map(([quote, by]) => (
              <TiltCard key={by}>
                <p>{quote}</p>
                <strong>{by}</strong>
              </TiltCard>
            ))}
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

          <form className='card frame contact-form' onSubmit={submit}>
            <label>Name<input name='name' required /></label>
            <label>Email<input name='email' type='email' required /></label>
            <label>Message<textarea name='message' rows={5} required /></label>
            <button className='btn btn-primary' disabled={form.loading}>{form.loading ? 'Sending...' : 'Send Message'}</button>
            {form.ok && <p className='ok'>Message sent successfully.</p>}
            {form.err && <p className='err'>{form.err}</p>}
          </form>
        </section>
      </main>

      <a className='mobile-cta' href='#contact'>Contact</a>

      {selected && (
        <button className='modal' onClick={() => setSelected(null)}>
          <article className='modal-card frame' onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <p className='meta'>{selected.category}</p>
            <h3>{selected.title}</h3>
            <p>{selected.summary}</p>
            <p><strong>Result:</strong> {selected.result}</p>
            <button className='btn btn-ghost' onClick={() => setSelected(null)}>Close</button>
          </article>
        </button>
      )}
    </div>
  )
}
