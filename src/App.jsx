import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Featured', '#featured'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

const featuredProject = {
  title: 'AI Document Assistant Platform',
  summary:
    'A full-stack document workflow tool focused on search speed, collaboration, and clean UX for fast-moving teams.',
  problem:
    'Teams were losing time in repetitive document navigation and fragmented internal flow.',
  solution:
    'Built a structured dashboard with smart filters, role-based access, and reliable backend architecture.',
  stack: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Auth'],
  image:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  live: '#contact',
  github: 'https://github.com/artin64',
}

const projects = [
  {
    title: 'Issue Management SaaS',
    desc: 'Problem: scattered team workflow. Solution: sprint-ready product with access roles and reporting view.',
    stack: ['Next.js', 'TypeScript', 'RBAC', 'Analytics'],
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Conversion-First Company Site',
    desc: 'Problem: weak trust and unclear messaging. Solution: redesigned structure, modern UI, and faster loading.',
    stack: ['React', 'Vite', 'SEO', 'Motion'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Internal Client Dashboard',
    desc: 'Problem: poor project visibility. Solution: custom dashboard for status tracking, KPIs, and updates.',
    stack: ['React', 'Node.js', 'Charts', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
]

const skills = [
  ['React / Next.js', 95],
  ['TypeScript / JavaScript', 92],
  ['Node.js / APIs', 88],
  ['UI Engineering', 94],
  ['Performance Optimization', 86],
  ['Database Design (PostgreSQL)', 82],
]

const testimonials = [
  '“Premium quality delivery with strong communication and clean execution.”',
  '“Exactly what we needed: modern UI + scalable architecture.”',
  '“Fast turnaround and excellent attention to detail.”',
]

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  useReveal()

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') setLightboxImage('')
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const allProjects = useMemo(() => [featuredProject, ...projects], [])

  return (
    <div className="page" id="home">
      <div className="bg-gradient" />
      <div className="particle particle-a" />
      <div className="particle particle-b" />

      <header className="header glass">
        <a className="brand" href="#home">Artin Krasniqi</a>

        <button
          className="menu-toggle"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary" href="#contact" onClick={() => setMenuOpen(false)}>Start a Project</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <div className="hero-overlay" />
          <p className="eyebrow">FULL-STACK DEVELOPER · PRISHTINË, KOSOVË</p>
          <h1>Modern web products with premium UI, speed, and real business impact.</h1>
          <p className="lead">
            I design and build responsive websites and web apps that help brands look credible and convert more.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">See Projects</a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="quick-links">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
          </div>
        </section>

        <section id="featured" className="section reveal">
          <h2>Featured Work</h2>
          <article className="card featured-card hover-lift">
            <img
              src={featuredProject.image}
              alt="Featured project preview"
              loading="lazy"
              onClick={() => setLightboxImage(featuredProject.image)}
            />

            <div>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.summary}</p>
              <p><strong>Problem:</strong> {featuredProject.problem}</p>
              <p><strong>Solution:</strong> {featuredProject.solution}</p>

              <div className="chips">
                {featuredProject.stack.map((item) => <span key={item}>{item}</span>)}
              </div>

              <div className="project-links">
                <a href={featuredProject.live}>Live Demo</a>
                <a href={featuredProject.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        </section>

        <section id="projects" className="section reveal">
          <h2>Project Showcase</h2>
          <p className="section-intro">Each project includes problem, solution direction, and tech stack.</p>

          <div className="grid-3">
            {projects.map((project) => (
              <article key={project.title} className="card project hover-lift">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  onClick={() => setLightboxImage(project.image)}
                />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
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

        <section id="skills" className="section reveal">
          <h2>Skills & Tech Stack</h2>
          <div className="skills-grid">
            {skills.map(([name, level]) => (
              <article key={name} className="card hover-lift">
                <div className="skill-head">
                  <h3>{name}</h3>
                  <span>{level}%</span>
                </div>
                <div className="progress">
                  <div className="progress-fill" style={{ width: `${level}%` }} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>About</h2>
          <p>
            I’m Artin Krasniqi — a full-stack web developer focused on clean architecture, premium interface quality,
            and practical product outcomes. I work across frontend, backend, and deployment.
          </p>
          <p>
            What makes my approach different: I do not only build visuals; I align each section with user intent,
            trust signals, and conversion clarity.
          </p>

          <div className="stats-grid">
            <article className="card pop"><strong>30+</strong><span>Projects Delivered</span></article>
            <article className="card pop"><strong>3+</strong><span>Years Experience</span></article>
            <article className="card pop"><strong>Global</strong><span>Remote Collaborations</span></article>
          </div>
        </section>

        <section className="section reveal">
          <h2>Testimonials</h2>
          <div className="grid-3">
            {testimonials.map((item, i) => (
              <article key={i} className="card hover-lift"><p>{item}</p></article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <h2>Contact Me</h2>
          <p>Send your idea, budget range, and timeline. I’ll reply with a clear execution direction.</p>

          <form
            className="contact-form"
            action="https://formsubmit.co/artin.krasniqi100@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>

            <label>
              Email
              <input name="email" type="email" required placeholder="you@email.com" />
            </label>

            <label>
              Message
              <textarea name="message" required rows={5} placeholder="Tell me about your project" />
            </label>

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

      {lightboxImage && (
        <button className="lightbox" onClick={() => setLightboxImage('')} aria-label="Close image preview">
          <img src={lightboxImage} alt="Project large preview" />
        </button>
      )}
    </div>
  )
}
