import { useEffect, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['Process', '#process'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Tailwind',
  'Framer Motion',
  'Performance',
]

const stats = [
  ['30+', 'Projects Delivered'],
  ['3+', 'Years Experience'],
  ['99%', 'Client Satisfaction'],
  ['24h', 'Avg. Response Time'],
]

const services = [
  {
    title: 'Full-Stack Development',
    text: 'From architecture to deployment with clean, scalable implementation.',
  },
  {
    title: 'Premium Frontend UI',
    text: 'High-end interfaces with strong visual hierarchy and conversion-focused flow.',
  },
  {
    title: 'Optimization & Security',
    text: 'Speed, accessibility, and secure engineering decisions from day one.',
  },
]

const projects = [
  {
    title: 'AI Document Assistant',
    problem: 'Teams were wasting time searching and organizing large document sets.',
    role: 'Product architecture, full-stack implementation, deployment',
    outcome: 'Faster document workflows and smoother internal collaboration.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AI APIs'],
  },
  {
    title: 'Issue Management SaaS',
    problem: 'A startup needed one clear workflow for tasks, sprints, and reporting.',
    role: 'Frontend lead, backend integration, role-based permissions',
    outcome: 'Production MVP that improved team visibility and delivery consistency.',
    stack: ['Next.js', 'TypeScript', 'Auth', 'Analytics'],
  },
  {
    title: 'Conversion-Focused Company Site',
    problem: 'Old website had weak brand trust and low conversion potential.',
    role: 'UX strategy, UI system, responsive implementation, SEO setup',
    outcome: 'Cleaner positioning and stronger first impression across devices.',
    stack: ['Vite', 'React', 'SEO', 'Motion'],
  },
]

const processSteps = [
  ['01', 'Discovery', 'Clarify business goals, audience, and priorities before building.'],
  ['02', 'Build', 'Ship scalable code and polished UI with clear product logic.'],
  ['03', 'Launch', 'Deploy, monitor, optimize, and iterate based on real usage.'],
]

const timeline = [
  ['2026', 'Scaling premium client projects', 'Advanced frontend systems + productized delivery process.'],
  ['2025', 'Product collaboration focus', 'Built real SaaS components, workflows, and role systems.'],
  ['2024', 'Deep full-stack execution', 'Expanded backend architecture and deployment skills.'],
]

const testimonials = [
  '“Fast execution and extremely clean result. Exactly what we needed.”',
  '“Strong communication, very reliable delivery, premium quality output.”',
  '“Not just design — real product thinking and solid engineering.”',
]

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()

  return (
    <div className="page" id="home">
      <div className="bg-blur blur-1" />
      <div className="bg-blur blur-2" />

      <header className="header glass">
        <a className="brand" href="#home">Artin Krasniqi</a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-primary" href="mailto:artin.krasniqi100@gmail.com">Hire Me</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal">
          <span className="pill">Available for freelance & remote roles</span>
          <p className="eyebrow">FULL-STACK WEB DEVELOPER · PRISHTINË, KOSOVË</p>
          <h1>I build premium websites and web apps that feel fast, modern, and trustworthy.</h1>
          <p className="lead">
            I help founders and businesses launch scalable digital products with clean code,
            conversion-focused UI, and excellent cross-device performance.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">See My Projects</a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="quick-contact">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
          </div>
        </section>

        <section className="stats reveal" aria-label="Key numbers">
          {stats.map(([value, label], i) => (
            <article key={label} className="card pop" style={{ animationDelay: `${i * 110}ms` }}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section className="section reveal" id="services">
          <h2>Services</h2>
          <p className="section-intro">End-to-end delivery with quality that reflects your brand.</p>
          <div className="grid-3">
            {services.map((service) => (
              <article key={service.title} className="card hover-lift">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <h2>Selected Projects</h2>
          <p className="section-intro">Focused case studies with clear outcomes.</p>
          <div className="grid-3">
            {projects.map((project) => (
              <article key={project.title} className="card hover-lift project-card">
                <h3>{project.title}</h3>
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>My role:</strong> {project.role}</p>
                <p><strong>Outcome:</strong> {project.outcome}</p>
                <div className="chips">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="process">
          <h2>How I Work</h2>
          <div className="grid-3">
            {processSteps.map(([num, title, text]) => (
              <article key={num} className="card hover-lift process-card">
                <span className="step">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="about">
          <h2>About Me</h2>
          <p>
            I’m Artin Krasniqi, a full-stack developer who combines engineering discipline with product thinking.
            I focus on building systems that look sharp, scale cleanly, and solve real business problems.
          </p>
          <div className="chips skill-chips">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>

          <div className="timeline">
            {timeline.map(([year, title, desc]) => (
              <article key={year} className="timeline-item card hover-lift">
                <div>
                  <span className="year">{year}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal">
          <h2>Client Feedback</h2>
          <div className="grid-3">
            {testimonials.map((item, i) => (
              <article key={i} className="card hover-lift">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact reveal" id="contact">
          <h2>Ready to Upgrade Your Online Presence?</h2>
          <p>Tell me what you want to build and I’ll give you a clear execution plan.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:artin.krasniqi100@gmail.com">Email Me</a>
            <a className="btn btn-ghost" href="https://github.com/artin64" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Artin Krasniqi · Full-Stack Web Developer</p>
      </footer>
    </div>
  )
}
