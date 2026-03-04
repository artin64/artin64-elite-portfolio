import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Featured', '#featured'],
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['Skills', '#skills'],
  ['About', '#about'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

const featuredProject = {
  title: 'AI Document Assistant Platform',
  summary:
    'A full-stack document workflow platform designed for speed, clarity, and team productivity.',
  problem:
    'Large teams were losing time across scattered files and unclear collaboration structure.',
  solution:
    'Implemented structured dashboard flows, role-based access, and optimized document search patterns.',
  stack: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Auth'],
  image:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  live: '#contact',
  github: 'https://github.com/artin64',
}

const projects = [
  {
    title: 'Issue Management SaaS',
    desc: 'Built a sprint-focused SaaS flow with clear permissions, status tracking, and reporting modules.',
    stack: ['Next.js', 'TypeScript', 'RBAC', 'Analytics'],
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Conversion-First Company Site',
    desc: 'Redesigned messaging, hierarchy, and UI interactions to improve trust and lead intent.',
    stack: ['React', 'Vite', 'SEO', 'Motion'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
  {
    title: 'Internal Client Dashboard',
    desc: 'Created KPI-focused dashboard architecture for project visibility and stakeholder clarity.',
    stack: ['React', 'Node.js', 'Charts', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    live: '#contact',
    github: 'https://github.com/artin64',
  },
]

const services = [
  ['⚡', 'Full-Stack Product Development', 'From planning to deployment with clean code and scalable architecture.'],
  ['🎯', 'Conversion-Focused Web Design', 'Premium UI systems designed to communicate value and increase trust.'],
  ['🛡️', 'Performance & Security Optimization', 'Fast loading, robust structure, and maintainable engineering decisions.'],
]

const skills = [
  ['React / Next.js', 95],
  ['TypeScript / JavaScript', 92],
  ['Node.js / API Design', 89],
  ['UI Engineering', 95],
  ['Performance Optimization', 87],
  ['PostgreSQL / Data Modeling', 84],
]

const stats = [
  ['30+', 'Projects delivered'],
  ['3+', 'Years experience'],
  ['99%', 'Client satisfaction'],
  ['24h', 'Avg response time'],
]

const faqs = [
  {
    q: 'What type of projects do you take?',
    a: 'Business websites, custom web apps, dashboards, and product-focused frontend/backend builds.',
  },
  {
    q: 'Do you work with startups and remote clients?',
    a: 'Yes. Most collaborations are remote-first with clear milestones and fast communication.',
  },
  {
    q: 'Can you improve an existing website instead of building from zero?',
    a: 'Absolutely. I often optimize structure, performance, UX flow, and visual quality on existing products.',
  },
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
      { threshold: 0.14 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const allProjects = useMemo(() => [featuredProject, ...projects], [])

  useReveal()

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') setLightboxImage('')
    }

    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <div className="page" id="home">
      <div className="bg-grid" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="floating-shape shape-square" />
      <div className="floating-shape shape-diamond" />

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
          <div className="hero-tag">Available for high-quality freelance projects</div>
          <p className="eyebrow">FULL-STACK WEB DEVELOPER · PRISHTINË, KOSOVË</p>
          <h1>Building exceptional digital products with premium UI, speed, and clarity.</h1>
          <p className="lead">
            I help founders and businesses launch websites and web apps that look elite,
            feel smooth, and perform reliably across all devices.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore Projects</a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="quick-links">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
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
          <p className="section-intro">Every project card includes context, stack, and links.</p>

          <div className="grid-3">
            {projects.map((project) => (
              <article key={project.title} className="card hover-lift project-card">
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
            I’m Artin Krasniqi, a full-stack developer focused on premium digital execution.
            I combine technical depth with product thinking to create clean, scalable, and conversion-ready experiences.
          </p>
          <p>
            My workflow prioritizes clarity: clear structure, strong visual hierarchy, modern interactions,
            and performance that feels immediate.
          </p>
        </section>

        <section id="faq" className="section reveal">
          <h2>FAQ</h2>
          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.q} className="card hover-lift">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <h2>Contact Me</h2>
          <p>Tell me what you want to build. I’ll answer with a clear, practical plan.</p>

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
              <textarea name="message" rows={5} required placeholder="Project details, budget, timeline..." />
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
        <button className="lightbox" onClick={() => setLightboxImage('')} aria-label="Close preview">
          <img src={lightboxImage} alt="Project preview full size" />
        </button>
      )}
    </div>
  )
}
