import './App.css'

const nav = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Uses', '#uses'],
  ['Contact', '#contact'],
]

const projects = [
  {
    name: 'AI Document Assistant',
    type: 'Full-Stack Product',
    summary:
      'AI-powered workspace for document workflows with clean dashboard UX, reusable components, and scalable backend structure.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AI'],
  },
  {
    name: 'Team Issue Management Platform',
    type: 'SaaS App',
    summary:
      'Production-style issue tracking with authentication, role-based access, sprint flow, and optimized admin + user experiences.',
    stack: ['Next.js', 'TypeScript', 'Express', 'Auth'],
  },
  {
    name: 'High-Performance Product Website',
    type: 'Brand + Conversion',
    summary:
      'Modern launch site with premium motion, lightning-fast loading, and SEO-first architecture designed to convert traffic.',
    stack: ['Vite', 'React', 'CSS', 'Performance'],
  },
]

const uses = [
  'Visual Studio Code',
  'GitHub + GitHub Actions',
  'Postman',
  'Figma',
  'Vercel / Netlify',
  'Notion',
]

export default function App() {
  return (
    <div className="page" id="home">
      <div className="noise" />
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <header className="hero-shell">
        <nav className="topbar glass">
          <a className="brand" href="#home">AK</a>
          <div className="links">
            {nav.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
          <a className="cta" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </nav>

        <section className="hero">
          <p className="status">● AVAILABLE FOR FREELANCE / FULL-TIME</p>
          <h1>
            Artin Krasniqi
            <span>Full-Stack Developer</span>
          </h1>
          <p className="intro">
            I build premium, engineering-driven web products with clean architecture,
            high performance, and modern interface systems that scale.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-gold">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>

          <div className="metrics glass">
            <article>
              <strong>3+ Years</strong>
              <span>Building production-ready products</span>
            </article>
            <article>
              <strong>30+</strong>
              <span>UI modules, pages, and product flows delivered</span>
            </article>
            <article>
              <strong>100%</strong>
              <span>Focused on quality, speed, and user experience</span>
            </article>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section">
          <p className="eyebrow">ABOUT</p>
          <div className="split">
            <div>
              <h2>Engineering clarity from complexity.</h2>
              <p>
                I specialize in robust full-stack solutions, blending strong backend
                foundations with polished frontend execution. My process is focused,
                clean, and built for long-term maintainability.
              </p>
              <p>
                Based in Prishtinë, Kosovë. Open to remote collaboration, startup teams,
                and ambitious product challenges.
              </p>
            </div>
            <aside className="profile-card glass">
              <h3>Profile</h3>
              <ul>
                <li><span>Role</span><b>Full-Stack Developer</b></li>
                <li><span>Location</span><b>Prishtinë, Kosovë</b></li>
                <li><span>Email</span><b>artin.krasniqi100@gmail.com</b></li>
                <li><span>Phone</span><b>+383 49 732 298</b></li>
                <li><span>GitHub</span><b>github.com/artin64</b></li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">PROJECTS</p>
          <h2>Selected builds</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card glass" key={project.name}>
                <small>{project.type}</small>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="chips">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="uses" className="section">
          <p className="eyebrow">USES</p>
          <h2>Tools I rely on daily</h2>
          <div className="chips uses-list">
            {uses.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>

        <section id="contact" className="section contact glass">
          <p className="eyebrow">CONTACT</p>
          <h2>Let&apos;s build something serious.</h2>
          <p>
            I help founders and teams ship fast, scalable, and premium web products.
          </p>
          <div className="contact-links">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">github.com/artin64</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Artin Krasniqi. Matte Black × Gold Edition.</p>
      </footer>
    </div>
  )
}
