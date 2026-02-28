import './App.css'

const projects = [
  {
    title: 'AI PDF Assistant SaaS Concept',
    summary:
      'Platform concept for intelligent document chat with strong focus on UX clarity, dashboard structure and scalable architecture.',
    stack: ['Next.js', 'TypeScript', 'AI', 'Dashboard'],
  },
  {
    title: 'Issue Tracker Platform',
    summary:
      'Full-stack tracking workflow with authentication, filtering and management features for team productivity.',
    stack: ['React', 'Node.js', 'SQL', 'Auth'],
  },
  {
    title: 'Game Discovery Experience',
    summary:
      'Interactive catalog experience with search, categories and responsive design optimized for performance.',
    stack: ['React', 'API', 'UI/UX', 'Performance'],
  },
]

export default function App() {
  return (
    <div className="app">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="hero-wrap">
        <nav className="topbar">
          <a href="#home" className="brand">Artin Krasniqi</a>
          <div className="menu">
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" className="hero">
          <p className="label">WELCOME TO MY UNIVERSE</p>
          <h1>
            Crafting Digital
            <span>Masterpieces</span>
          </h1>
          <p className="lead">
            I&apos;m <strong>Artin Krasniqi</strong>, a professional <strong>Full-Stack Web Developer</strong>{' '}
            dedicated to building high-performance, user-centric web applications.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#portfolio">Projects Showcase</a>
            <a className="btn ghost" href="#contact">Let&apos;s Connect</a>
          </div>
        </section>
      </header>

      <main>
        <section id="portfolio" className="section">
          <p className="section-label">Portfolio</p>
          <h2>Featured Creations</h2>
          <p className="section-text">
            A selection of high-impact digital solutions, built with focus on scalability,
            performance, and exceptional user experience.
          </p>

          <div className="cards">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <div className="thumb" aria-hidden="true" />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <h2>About</h2>
            <p className="section-text">
              Professional Full-Stack Developer focused on crafting immersive,
              high-performance digital experiences with practical engineering and strong visual quality.
            </p>
            <p className="section-text">
              Location: Prishtinë, Kosovë · Open for freelance and full-time opportunities.
            </p>
          </div>
          <div className="photo-frame">PLACE YOUR PHOTO HERE</div>
        </section>

        <section id="contact" className="section contact">
          <p>/</p>
          <h2>Let&apos;s Build Something Strong</h2>
          <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
          <a href="tel:+38349732298">+383 49 732 298</a>
          <a href="https://github.com/artin64" target="_blank" rel="noreferrer">github.com/artin64</a>
        </section>
      </main>

      <footer>
        <p>© 2026 Artin Krasniqi. All rights reserved.</p>
        <p>Made with ❤️ in Kosova</p>
      </footer>
    </div>
  )
}
