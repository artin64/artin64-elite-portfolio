import { useEffect, useRef, useState } from 'react'
import './App.css'

const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['About', '#about'],
  ['Contact', '#contact'],
  ['Blog', '#blog'],
]

const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'UI/UX', 'Security', 'PostgreSQL', 'Vite']

const services = [
  {
    title: 'Full-Stack Development',
    text: 'From product strategy to deployment-ready code with secure and scalable architecture.',
    icon: '⚙️',
  },
  {
    title: 'Premium UI Engineering',
    text: 'High-end interfaces with polished motion, visual hierarchy, and strong conversion flow.',
    icon: '✨',
  },
  {
    title: 'Security & Performance',
    text: 'Optimized loading, robust auth patterns, and engineering decisions built to last.',
    icon: '🛡️',
  },
]

const projects = [
  {
    title: 'AI Document Assistant',
    desc: 'Smart document workflow platform with premium dashboard UI and scalable backend.',
    tags: ['React', 'Node.js', 'AI', 'PostgreSQL'],
    image: 'grad-1',
  },
  {
    title: 'Issue Management SaaS',
    desc: 'Team collaboration product with role-based access, sprint flow, and analytics modules.',
    tags: ['Next.js', 'TypeScript', 'Auth', 'SaaS'],
    image: 'grad-2',
  },
  {
    title: 'Conversion Product Website',
    desc: 'Performance-first website engineered for positioning, trust, and high conversion intent.',
    tags: ['Vite', 'SEO', 'Motion', 'UI'],
    image: 'grad-3',
  },
]

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance / Remote',
    period: '2023 — Present',
    text: 'Building complete web products for startups and teams with focus on speed, quality, and scalability.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Product Collaborations',
    period: '2022 — 2023',
    text: 'Delivered modern UI systems, reusable component libraries, and production-grade frontend flows.',
  },
]

const approach = [
  ['01', 'Planning & Strategy', 'Clear business goals, audience mapping, and product architecture blueprint.'],
  ['02', 'Development', 'Execution with clean code, modular systems, and scalable full-stack implementation.'],
  ['03', 'Testing & Launch', 'Performance tuning, QA hardening, deployment, and post-launch optimization.'],
]

const blog = [
  {
    title: 'How to Build Premium Personal Branding Websites',
    desc: 'A practical process for turning basic portfolios into trust-building conversion assets.',
  },
  {
    title: 'React Performance Wins That Actually Matter',
    desc: 'Simple engineering moves that noticeably improve speed and user experience.',
  },
  {
    title: 'UI Hierarchy for Founder-Level Personal Sites',
    desc: 'How layout, spacing, and motion influence first-impression authority.',
  },
]

const testimonials = [
  '“Very clean execution. Fast turnaround and premium quality.”',
  '“Great communication and strong technical decisions throughout the project.”',
  '“Exactly what we needed: scalable code + elite UI.”',
]

function AnimatedCounter({ to, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let started = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        let start = 0
        const duration = 1200
        const stepTime = 20
        const steps = duration / stepTime
        const increment = to / steps

        const timer = setInterval(() => {
          start += increment
          if (start >= to) {
            setCount(to)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, stepTime)
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [to])

  return <strong ref={ref}>{count}{suffix}</strong>
}

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page" id="home">
      <div className="bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <header className="nav glass">
        <a className="logo" href="#home">AK</a>
        <div className="nav-links">
          {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <a href="/resume.pdf" className="btn btn-gold" target="_blank" rel="noreferrer">Download CV</a>
      </header>

      <main className="container">
        <section className="hero reveal">
          <div>
            <p className="mini">HELLO, I&apos;M</p>
            <h1>Artin <span>Krasniqi</span></h1>
            <p className="title">Full-Stack Web Developer & Product Builder</p>
            <p className="lead">Prishtinë, Kosovë — building secure, scalable and premium digital products for modern brands.</p>
            <div className="actions">
              <a href="#portfolio" className="btn btn-gold">Explore My Work</a>
              <a href="mailto:artin.krasniqi100@gmail.com" className="btn btn-dark">Let&apos;s Connect</a>
            </div>
            <div className="skill-row">
              {skills.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <aside className="hero-card glass">
            <div className="avatar">AK</div>
            <p className="mini">Founder-ready execution</p>
            <h3>Digital Excellence</h3>
            <p>Detail-driven UI, clean architecture, and serious performance standards.</p>
            <div className="socials">
              <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:artin.krasniqi100@gmail.com">Email</a>
              <a href="tel:+38349732298">Call</a>
            </div>
          </aside>
        </section>

        <section className="stats reveal" aria-label="stats">
          <article className="glass pop"><AnimatedCounter to={3} suffix="+" /><span>Years Experience</span></article>
          <article className="glass pop"><AnimatedCounter to={30} suffix="+" /><span>Projects Delivered</span></article>
          <article className="glass pop"><strong>Global</strong><span>Clients Worldwide</span></article>
        </section>

        <section id="services" className="section reveal">
          <p className="mini">SERVICES</p>
          <h2>Building digital products that feel premium.</h2>
          <div className="grid-3">
            {services.map((service) => (
              <article key={service.title} className="card glass hover-up">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section reveal">
          <p className="mini">FEATURED PROJECTS</p>
          <h2>Portfolio highlights</h2>
          <div className="grid-3">
            {projects.map((project) => (
              <article key={project.title} className="project glass hover-up">
                <div className={`thumb ${project.image}`} />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="chips">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href="#contact">Check Live Site</a>
                  <a href="#contact">Project Details</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section reveal">
          <p className="mini">WORK EXPERIENCE</p>
          <h2>Experience built from real product execution.</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.role} className="timeline-item glass hover-up">
                <div className="dot" />
                <div>
                  <h3>{job.role}</h3>
                  <p className="meta">{job.company} • {job.period}</p>
                  <p>{job.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal">
          <p className="mini">TRUST</p>
          <h2>Kind words from satisfied clients.</h2>
          <div className="grid-3">
            {testimonials.map((item, i) => (
              <article key={i} className="card glass hover-up"><p>{item}</p></article>
            ))}
          </div>
        </section>

        <section className="section reveal">
          <p className="mini">MY APPROACH</p>
          <h2>Process that keeps quality high.</h2>
          <div className="grid-3">
            {approach.map(([num, title, desc]) => (
              <article key={num} className="card glass hover-up">
                <span className="num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="section reveal">
          <p className="mini">LATEST POSTS</p>
          <h2>Recent insights</h2>
          <div className="grid-3">
            {blog.map((post) => (
              <article key={post.title} className="card glass hover-up">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <a href="#contact" className="read-more">Read article</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="cta reveal glass">
          <p className="mini">CONTACT</p>
          <h2>Ready to take your digital presence to the next level?</h2>
          <p>Let&apos;s build something serious, scalable, and visually elite.</p>
          <div className="actions">
            <a href="mailto:artin.krasniqi100@gmail.com" className="btn btn-gold">artin.krasniqi100@gmail.com</a>
            <a href="tel:+38349732298" className="btn btn-dark">+383 49 732 298</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container foot-grid">
          <div>
            <h4>Artin Krasniqi</h4>
            <p>Premium full-stack development for founders, startups, and ambitious product teams.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p><a href="#services">Services</a> · <a href="#portfolio">Portfolio</a> · <a href="#contact">Contact</a></p>
          </div>
          <div>
            <h4>Core Stack</h4>
            <p>React · Next.js · Node.js · TypeScript · UI Engineering</p>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} Artin Krasniqi. Matte Black + Gold.</p>
      </footer>
    </div>
  )
}
