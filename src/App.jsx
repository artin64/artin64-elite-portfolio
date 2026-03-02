import './App.css'

const services = [
  'Full-Stack Web Development',
  'SaaS Product Architecture',
  'Performance Optimization',
  'UI Engineering & Design Systems',
]

const projects = [
  {
    title: 'AI Document Assistant',
    description:
      'Product-focused platform concept for AI-powered document workflows, dashboard UX, and scalable backend foundations.',
    tags: ['Next.js', 'TypeScript', 'AI', 'SaaS'],
  },
  {
    title: 'Team Issue Management System',
    description:
      'End-to-end issue tracking workflow with auth, prioritization, role-based actions, and clean team collaboration flows.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Auth'],
  },
  {
    title: 'High-Performance Product Website',
    description:
      'Conversion-oriented web experience with advanced responsiveness, fast loading, and SEO-ready structure.',
    tags: ['Vite', 'React', 'CSS', 'Performance'],
  },
]

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Tailwind CSS',
  'GitHub Actions',
]

export default function App() {
  return (
    <div className="site">
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <header className="hero" id="home">
        <nav className="nav glass">
          <a href="#home" className="logo">AK</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="mailto:artin.krasniqi100@gmail.com" className="nav-cta">Let&apos;s Talk</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">AVAILABLE FOR FREELANCE & FULL-TIME</p>
          <h1>
            I build premium digital products
            <span>that drive real growth.</span>
          </h1>
          <p className="lead">
            I&apos;m <strong>Artin Krasniqi</strong>, a Full-Stack Developer crafting modern,
            high-performance web experiences from idea to deployment.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Open CV</a>
          </div>

          <div className="hero-metrics glass">
            <div><strong>3+</strong><span>Years building web products</span></div>
            <div><strong>30+</strong><span>Delivered UI components & flows</span></div>
            <div><strong>100%</strong><span>Focus on quality and performance</span></div>
          </div>
        </div>
      </header>

      <section className="ticker-wrap">
        <div className="ticker">
          {[...services, ...services].map((s, i) => <span key={`${s}-${i}`}>{s} ✦</span>)}
        </div>
      </section>

      <main>
        <section id="about" className="section about">
          <div>
            <p className="section-label">ABOUT ME</p>
            <h2>Engineering clarity from complexity.</h2>
            <p>
              I specialize in building robust full-stack products with clean architecture,
              maintainable code, and polished user experiences. My work blends practical
              engineering with thoughtful interface decisions.
            </p>
            <p>
              Based in Prishtinë, Kosovë — open to remote collaboration and ambitious product teams.
            </p>
          </div>
          <aside className="about-card glass">
            <h3>Quick Profile</h3>
            <ul>
              <li><span>Role</span><strong>Full-Stack Developer</strong></li>
              <li><span>Location</span><strong>Prishtinë, Kosovë</strong></li>
              <li><span>Email</span><strong>artin.krasniqi100@gmail.com</strong></li>
              <li><span>Phone</span><strong>+383 49 732 298</strong></li>
            </ul>
          </aside>
        </section>

        <section id="projects" className="section">
          <p className="section-label">FEATURED WORK</p>
          <h2>Selected projects and product builds.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card glass">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section">
          <p className="section-label">TECH STACK</p>
          <h2>Tools I use to ship reliable software.</h2>
          <div className="stack-grid">
            {stack.map((item) => <span key={item} className="stack-item">{item}</span>)}
          </div>
        </section>

        <section id="contact" className="contact section glass">
          <p className="section-label">CONTACT</p>
          <h2>Let&apos;s build something serious.</h2>
          <p className="contact-text">
            I help founders and teams turn ideas into scalable products with strong UX and robust code.
          </p>
          <div className="contact-links">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">github.com/artin64</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Artin Krasniqi. Crafted with precision.</p>
      </footer>
    </div>
  )
}
