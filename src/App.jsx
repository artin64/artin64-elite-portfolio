import { useEffect, useMemo, useState } from 'react'
import './App.css'

const filters = ['All', 'React', 'Design', 'Node.js']

const projects = [
  {
    title: 'Client Business Website',
    category: 'React',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern business platform with SEO-ready structure and clean UX.',
    stack: ['React', 'SEO', 'UI'],
    live: 'https://artin64.github.io/artin64-elite-portfolio/',
  },
  {
    title: 'Lead Capture Landing',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description: 'High-conversion landing page with strong CTA flow and analytics.',
    stack: ['Design', 'Copy', 'Analytics'],
    live: '#',
  },
  {
    title: 'Operations Dashboard',
    category: 'Node.js',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description: 'Role-based dashboard for reports and operational control.',
    stack: ['Node.js', 'API', 'SQL'],
    live: '#',
  },
  {
    title: 'Portfolio Premium UI',
    category: 'React',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description: 'Interactive portfolio redesign with rich animations and transitions.',
    stack: ['React', 'Animation', 'CSS'],
    live: '#',
  },
]

const skills = [
  { name: 'React', value: 92, icon: '⚛️' },
  { name: 'Node.js', value: 85, icon: '🟢' },
  { name: 'JavaScript', value: 94, icon: '🟨' },
  { name: 'UI/UX', value: 88, icon: '🎨' },
  { name: 'SEO', value: 82, icon: '🔎' },
  { name: 'Performance', value: 90, icon: '🚀' },
]

const timeline = [
  { year: '2023', text: 'Started professional freelance web development projects.' },
  { year: '2024', text: 'Built business sites and landing pages for local clients.' },
  { year: '2025', text: 'Focused on premium UI, performance and conversion-oriented UX.' },
  { year: '2026', text: 'Delivering end-to-end digital solutions with scalable architecture.' },
]

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [modalProject, setModalProject] = useState(null)
  const [showTop, setShowTop] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sent, setSent] = useState(false)
  const [dark, setDark] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll('[data-animate]').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2600)
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
        <button className="theme-btn" onClick={() => setDark((v) => !v)}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text" data-animate>
            <span className="badge">Available for work</span>
            <h1>Artin Krasniqi</h1>
            <h2>Full-Stack Web Developer & Creative Builder</h2>
            <p>
              Building secure, scalable and elegant web products with strong UX, smooth motion and
              real business impact.
            </p>
            <div className="actions">
              <a className="btn" href="#portfolio">Explore my work</a>
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
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="overlay">
                  <button onClick={() => setModalProject(project)}>Details</button>
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
              I focus on building premium interfaces and practical systems that improve performance,
              increase trust and convert visitors into clients.
            </p>
            <a className="btn" href="/artin64-elite-portfolio/resume.pdf" download>
              Download CV
            </a>
          </div>
          <div className="photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=80"
              alt="Professional portrait placeholder"
              loading="lazy"
            />
          </div>
          <div className="timeline" aria-label="Experience timeline">
            {timeline.map((item) => (
              <article key={item.year}>
                <strong>{item.year}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section" data-animate>
          <h3>Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill" key={skill.name}>
                <div
                  className="circle"
                  style={{ '--value': `${skill.value}%` }}
                  aria-label={`${skill.name} ${skill.value}%`}
                >
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
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Enter your message..." rows="4" required />
            <button type="submit">Send Message</button>
          </form>
          {sent && <p className="success">Message sent successfully ✔</p>}
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

      {showTop && (
        <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      )}

      {modalProject && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button className="close" onClick={() => setModalProject(null)}>✕</button>
            <img src={modalProject.image} alt={modalProject.title} loading="lazy" />
            <h4>{modalProject.title}</h4>
            <p>{modalProject.description}</p>
            <a href={modalProject.live} target="_blank" rel="noreferrer">Open Project</a>
          </div>
        </div>
      )}
    </div>
  )
}
