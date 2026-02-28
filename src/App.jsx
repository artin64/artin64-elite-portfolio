import { useEffect, useMemo, useState } from 'react'
import './App.css'

const filters = ['All', 'Web', 'Design', 'Apps']

const projects = [
  {
    slug: 'client-business',
    title: 'Client Business Website',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80',
    problem: 'Client needed trust-focused online presence and faster lead capture.',
    solution: 'Built fast React interface with clear CTA structure and SEO setup.',
    result: 92,
    stack: ['React', 'SEO', 'UI'],
    live: 'https://artin64.github.io/artin64-elite-portfolio/',
    code: 'https://github.com/artin64/artin64-elite-portfolio',
  },
  {
    slug: 'landing-convert',
    title: 'Lead Capture Landing',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    problem: 'Low conversion and weak message hierarchy.',
    solution: 'Redesigned content flow, strong visual hierarchy and form UX.',
    result: 87,
    stack: ['Design', 'Copy', 'Analytics'],
    live: '#',
    code: '#',
  },
  {
    slug: 'ops-dashboard',
    title: 'Operations Dashboard',
    category: 'Apps',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    problem: 'Operations data was spread across multiple tools.',
    solution: 'Created dashboard architecture for role-based visibility.',
    result: 84,
    stack: ['Node.js', 'API', 'SQL'],
    live: '#',
    code: '#',
  },
  {
    slug: 'portfolio-premium',
    title: 'Portfolio Premium UI',
    category: 'Web',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    problem: 'Needed premium portfolio with high engagement effects.',
    solution: 'Implemented animations, filters, modal previews and terminal overlay.',
    result: 95,
    stack: ['React', 'Animation', 'Performance'],
    live: '#',
    code: '#',
  },
]

const skills = [
  { name: 'React', value: 92, icon: '⚛️' },
  { name: 'Node.js', value: 86, icon: '🟢' },
  { name: 'JavaScript', value: 94, icon: '🟨' },
  { name: 'UI/UX', value: 90, icon: '🎨' },
  { name: 'SEO', value: 84, icon: '🔎' },
  { name: 'Performance', value: 91, icon: '🚀' },
]

const timeline = [
  { year: '2023', role: 'Freelance Start', text: 'Started delivering first production websites.' },
  { year: '2024', role: 'Client Work', text: 'Built business websites and conversion landing pages.' },
  { year: '2025', role: 'Premium UI', text: 'Focused on animations, UX quality and performance.' },
  { year: '2026', role: 'Full Delivery', text: 'End-to-end development from idea to deployment.' },
]

const terminalHelp = `Commands:\nls projects\nview <slug>\nskills\ncontact\nlocation\nweather\nclear`

function useTypewriter(text, speed = 65) {
  const [value, setValue] = useState('')
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setValue(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return value
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modalProject, setModalProject] = useState(null)
  const [showTop, setShowTop] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sent, setSent] = useState(false)
  const [dark, setDark] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalLines, setTerminalLines] = useState(['Terminal ready. type `help`'])
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 })
  const [locationText, setLocationText] = useState('Locating...')
  const [weatherText, setWeatherText] = useState('Loading weather...')
  const [chatOpen, setChatOpen] = useState(false)
  const [chatText, setChatText] = useState('')
  const [toasts, setToasts] = useState([])

  const heroTitle = useTypewriter('Artin Krasniqi', 80)
  const heroSub = useTypewriter('Full-Stack Web Developer & Creative Builder', 30)

  const filteredProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter],
  )

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 240)
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const canvas = document.getElementById('particles')
    if (!(canvas instanceof HTMLCanvasElement)) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const points = Array.from({ length: 42 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }))

    let raf = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      points.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.fillStyle = 'rgba(125,210,255,0.45)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            if (entry.target.id === 'about') {
              let p = 0
              const iv = setInterval(() => {
                p += 1
                setStats({ projects: Math.min(36, p), clients: Math.min(21, Math.floor(p * 0.58)), years: Math.min(3, Math.floor(p / 12)) })
                if (p >= 36) clearInterval(iv)
              }, 26)
            }
          }
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll('[data-animate]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationText('Geolocation not available')
      return
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude.toFixed(3)
        const lon = pos.coords.longitude.toFixed(3)
        setLocationText(`Lat ${lat}, Lon ${lon}`)
        try {
          const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`).then((r) => r.json())
          const temp = weather?.current?.temperature_2m
          setWeatherText(typeof temp === 'number' ? `${temp}°C currently` : 'Weather unavailable')
        } catch {
          setWeatherText('Weather unavailable')
        }
      },
      () => setLocationText('Location denied'),
      { timeout: 5000 },
    )
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setModalProject(null)
        setTerminalOpen(false)
      }
      if (e.key.toLowerCase() === 't' && e.shiftKey) setTerminalOpen((v) => !v)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const pushToast = (msg) => {
    const id = Date.now()
    setToasts((t) => [...t, { id, msg }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2300)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    pushToast('Message sent')
    setTimeout(() => setSent(false), 2600)
  }

  const runCommand = () => {
    const cmd = terminalInput.trim()
    if (!cmd) return
    const next = [`> ${cmd}`]

    if (cmd === 'help') next.push(terminalHelp)
    else if (cmd === 'ls projects') next.push(projects.map((p) => `- ${p.slug}`).join('\n'))
    else if (cmd.startsWith('view ')) {
      const slug = cmd.replace('view ', '')
      const found = projects.find((p) => p.slug === slug)
      if (found) {
        setModalProject(found)
        next.push(`Opening ${found.title}...`)
      } else next.push('Project not found')
    } else if (cmd === 'skills') next.push(skills.map((s) => `${s.name}: ${s.value}%`).join('\n'))
    else if (cmd === 'contact') {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      next.push('Navigating to contact section...')
    } else if (cmd === 'location') next.push(locationText)
    else if (cmd === 'weather') next.push(weatherText)
    else if (cmd === 'clear') setTerminalLines([])
    else next.push('Unknown command. type `help`')

    setTerminalLines((l) => [...l, ...next])
    setTerminalInput('')
  }

  return (
    <div className={`app ${dark ? 'theme-dark' : 'theme-light'}`}>
      {!loaded && (
        <div className="preloader" aria-live="polite">
          <div className="loader" />
          <p>Loading portfolio...</p>
        </div>
      )}

      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />

      <header className="topbar">
        <a className="logo" href="#home">ArtinKrasniqi</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="top-actions">
          <button className="theme-btn" onClick={() => setDark((v) => !v)}>{dark ? 'Light' : 'Dark'}</button>
          <button className="theme-btn" onClick={() => setTerminalOpen(true)}>Terminal</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <canvas id="particles" aria-hidden="true" />
          <div className="hero-text" data-animate>
            <span className="badge">Available for work</span>
            <h1>{heroTitle}<span className="caret">|</span></h1>
            <h2>{heroSub}</h2>
            <p>
              Building secure, scalable and elegant web products with strong UX, smooth motion and real business impact.
            </p>
            <div className="actions">
              <a className="btn ripple" href="#portfolio">Explore my work</a>
              <a className="btn ghost" href="#contact">Let&apos;s Talk</a>
            </div>
          </div>

          <div className="hero-card" data-animate>
            <div className="avatar">AK</div>
            <p>Prishtinë, Kosovë</p>
            <small>Secure • Scalable • Creative</small>
          </div>
          <a className="scroll-down" href="#portfolio" aria-label="Scroll down">↓ Scroll</a>
        </section>

        <section id="portfolio" className="section" data-animate>
          <h3>Featured Projects</h3>
          <div className="filters" role="tablist" aria-label="Project filters">
            {filters.map((filter) => (
              <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project, i) => (
              <article className="project-card" key={project.title} style={{ animationDelay: `${i * 90}ms` }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.problem}</p>
                  <div className="chips">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
                <div className="overlay">
                  <button onClick={() => setModalProject(project)}>Case Study</button>
                  <a href={project.live} target="_blank" rel="noreferrer">View Live</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about" data-animate>
          <div>
            <h3>About Me</h3>
            <p>
              I design and build practical digital products with premium interface quality, measurable performance and conversion-focused structure.
            </p>
            <a className="btn ripple" href="/artin64-elite-portfolio/resume.pdf" download>Download CV</a>
            <div className="stats">
              <div><strong>{stats.projects}+</strong><span>Projects completed</span></div>
              <div><strong>{stats.clients}+</strong><span>Clients worked with</span></div>
              <div><strong>{stats.years}+</strong><span>Years experience</span></div>
            </div>
          </div>

          <div className="photo-wrap" aria-label="Photo frame placeholder">
            <div className="photo-frame">PLACE YOUR PHOTO HERE</div>
          </div>

          <div className="timeline" aria-label="Experience timeline">
            {timeline.map((item, i) => (
              <article key={item.year} style={{ animationDelay: `${i * 120}ms` }}>
                <strong>{item.year}</strong>
                <h4>{item.role}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section" data-animate>
          <h3>Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <article className="skill" key={skill.name} style={{ animationDelay: `${i * 120}ms` }}>
                <div className="circle" style={{ '--value': `${skill.value}%` }} aria-label={`${skill.name} ${skill.value}%`}>
                  <span>{skill.value}%</span>
                </div>
                <p>{skill.icon} {skill.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact" data-animate>
          <h3>Let&apos;s build something strong.</h3>
          <form onSubmit={handleSubmit}>
            <label><input type="text" placeholder=" " required /><span>Your name</span></label>
            <label><input type="email" placeholder=" " required /><span>Email address</span></label>
            <label><textarea placeholder=" " rows="4" required /><span>Enter your message...</span></label>
            <button type="submit" className="ripple">Send Message</button>
          </form>
          {sent && <p className="success">Message sent successfully ✔</p>}

          <div className="widgets">
            <article><h4>Location API</h4><p>{locationText}</p></article>
            <article><h4>Weather Widget</h4><p>{weatherText}</p></article>
          </div>

          <div className="socials">
            <a href="mailto:artin.krasniqi100@gmail.com">Email</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer data-animate>
        <p>© {new Date().getFullYear()} Artin Krasniqi. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </footer>

      {showTop && <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}

      <button className="chatbot-toggle" onClick={() => setChatOpen((v) => !v)}>Chat</button>
      {chatOpen && (
        <div className="chatbot">
          <h4>Mini Assistant</h4>
          <p>Need quick info? Ask me.</p>
          <input value={chatText} onChange={(e) => setChatText(e.target.value)} placeholder="Type a question..." />
          <button onClick={() => { pushToast('Assistant will contact you soon'); setChatText('') }}>Send</button>
        </div>
      )}

      {toasts.length > 0 && (
        <div className="toast-wrap">{toasts.map((t) => <div className="toast" key={t.id}>{t.msg}</div>)}</div>
      )}

      {terminalOpen && (
        <div className="terminal-modal" role="dialog" aria-modal="true">
          <div className="terminal-card">
            <header>
              <strong>Dev Terminal</strong>
              <button onClick={() => setTerminalOpen(false)}>✕</button>
            </header>
            <div className="terminal-log">
              {terminalLines.map((line, i) => <p key={`${line}-${i}`}>{line}</p>)}
            </div>
            <div className="terminal-input">
              <input
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runCommand()}
                placeholder="type command..."
              />
              <button onClick={runCommand}>Run</button>
            </div>
          </div>
        </div>
      )}

      {modalProject && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button className="close" onClick={() => setModalProject(null)}>✕</button>
            <img src={modalProject.image} alt={modalProject.title} loading="lazy" />
            <h4>{modalProject.title}</h4>
            <p><strong>Problem:</strong> {modalProject.problem}</p>
            <p><strong>Solution:</strong> {modalProject.solution}</p>
            <div className="impact"><span style={{ width: `${modalProject.result}%` }} /></div>
            <p className="impact-label">Impact score: {modalProject.result}%</p>
            <div className="modal-actions">
              <a href={modalProject.live} target="_blank" rel="noreferrer">View Live</a>
              <a href={modalProject.code} target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
