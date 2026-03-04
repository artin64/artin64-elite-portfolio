import { useEffect, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Projects', '#projects'],
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
  'Tailwind CSS',
  'REST APIs',
  'Performance',
]

const projects = [
  {
    title: 'AI Document Assistant',
    problem: 'Teams were wasting time searching and organizing large document sets.',
    role: 'Product architecture, full-stack implementation, deployment',
    outcome: 'Reduced average document lookup time and improved team workflow speed.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AI APIs'],
  },
  {
    title: 'Issue Management SaaS',
    problem: 'A startup needed one clear workflow for tasks, sprints, and team visibility.',
    role: 'Frontend lead + backend integration + role-based permissions',
    outcome: 'Shipped a production-ready MVP with cleaner delivery process and tracking.',
    stack: ['Next.js', 'TypeScript', 'Auth', 'Analytics'],
  },
  {
    title: 'Conversion-Focused Company Website',
    problem: 'The old site looked outdated and was not converting visitors into leads.',
    role: 'UX strategy, UI system, responsive implementation, SEO setup',
    outcome: 'Delivered faster loading pages and stronger first-impression trust.',
    stack: ['Vite', 'React', 'SEO', 'Motion'],
  },
]

const processSteps = [
  {
    title: 'Discovery',
    text: 'I clarify business goals, target users, and success metrics before writing code.',
  },
  {
    title: 'Build',
    text: 'I ship clean, scalable implementation with strong UI standards and secure architecture.',
  },
  {
    title: 'Launch & Improve',
    text: 'After release, I monitor performance, fix bottlenecks, and iterate quickly.',
  },
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
      <header className="header">
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
          <p className="eyebrow">WEB DEVELOPER · PRISHTINË, KOSOVË</p>
          <h1>I build fast, modern websites and web apps that actually convert.</h1>
          <p className="lead">
            I help founders and businesses launch clean, scalable digital products with strong UI, solid performance,
            and clear business value.
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

        <section className="section reveal" id="projects">
          <h2>Selected Projects</h2>
          <p className="section-intro">Quality over quantity: focused case studies with clear impact.</p>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
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
          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <article key={step.title} className="card process">
                <span className="step">0{idx + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="about">
          <h2>About Me</h2>
          <p>
            I’m Artin Krasniqi, a full-stack web developer focused on building practical, high-quality products.
            My work combines clean engineering with product thinking, so clients get more than just “nice visuals”.
          </p>
          <p>
            I work across frontend, backend, and deployment, with a strong focus on responsive design, speed,
            maintainability, and real-world usability.
          </p>
          <div className="chips skill-chips">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="section contact reveal" id="contact">
          <h2>Let’s Build Something Serious</h2>
          <p>If you need a website or web app that looks professional and performs well, message me directly.</p>
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
