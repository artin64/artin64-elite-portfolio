import './App.css'

const stats = [
  ['3+', 'Years Experience'],
  ['30+', 'Projects & modules delivered'],
  ['Global', 'Remote collaboration ready'],
]

const expertise = [
  {
    title: 'Full-Stack Architecture',
    text: 'Scalable backend + polished frontend with clear structure and maintainable codebase.',
  },
  {
    title: 'Premium UI Engineering',
    text: 'Elegant interfaces, smooth interactions, and responsive behavior across all screens.',
  },
  {
    title: 'Performance First',
    text: 'Fast load, smooth rendering, and SEO-ready implementation for modern products.',
  },
]

const projects = [
  {
    title: 'AI Document Assistant',
    desc: 'Workflow platform for AI document automation with dashboard UX and secure backend foundations.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AI'],
  },
  {
    title: 'Issue Management SaaS',
    desc: 'Complete team task flow with auth, priorities, role-based access, and real-time collaboration.',
    stack: ['Next.js', 'TypeScript', 'Express', 'Auth'],
  },
  {
    title: 'Conversion Product Site',
    desc: 'Premium, high-speed landing architecture built for brand positioning and measurable growth.',
    stack: ['Vite', 'React', 'CSS', 'Performance'],
  },
]

const process = [
  ['01', 'Discover', 'Understand business goals, users, and product direction before writing code.'],
  ['02', 'Build', 'Develop robust features with clean architecture, reusable components, and testing mindset.'],
  ['03', 'Refine', 'Polish motion, spacing, and details to deliver a premium and reliable product experience.'],
]

export default function App() {
  return (
    <div className="page" id="home">
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-left" />
      <div className="bg-glow bg-glow-right" />

      <header className="header container glass">
        <a className="logo" href="#home">AK</a>
        <nav>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn-gold btn-small" href="/resume.pdf" target="_blank" rel="noreferrer">
          Download CV
        </a>
      </header>

      <main className="container">
        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="kicker">HELLO, I&apos;M</p>
            <h1>
              Artin
              <span>Krasniqi</span>
            </h1>
            <p className="role">Full-Stack Developer</p>
            <p className="lead">
              I design and build secure, scalable, and premium web products that look elite and perform fast.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#projects">See Projects</a>
              <a className="btn btn-outline" href="mailto:artin.krasniqi100@gmail.com">Hire Me</a>
            </div>
          </div>

          <aside className="hero-card glass">
            <div className="avatar">AK</div>
            <h3>Founder Mindset Developer</h3>
            <p>Building digital products with premium quality and serious execution.</p>
            <div className="mini-links">
              <a href="https://github.com/artin64" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:artin.krasniqi100@gmail.com">Email</a>
              <a href="tel:+38349732298">Call</a>
            </div>
          </aside>
        </section>

        <section className="stats">
          {stats.map(([value, label]) => (
            <article className="glass" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </section>

        <section id="expertise" className="block">
          <p className="section-kicker">MY EXPERTISE</p>
          <h2>Building digital excellence.</h2>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="glass" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="block">
          <p className="section-kicker">FEATURED PROJECTS</p>
          <h2>Work experience that ships real value.</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project glass" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="chips">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="block">
          <p className="section-kicker">MY APPROACH</p>
          <h2>Clear process. Premium execution.</h2>
          <div className="process-grid">
            {process.map(([num, title, desc]) => (
              <article className="glass" key={num}>
                <span className="num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact glass" id="contact">
          <p className="section-kicker">CONTACT</p>
          <h2>Ready to build your next premium product?</h2>
          <p>
            Let&apos;s collaborate and turn your idea into a serious, scalable, high-performance digital product.
          </p>
          <div className="contact-links">
            <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
            <a href="tel:+38349732298">+383 49 732 298</a>
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">github.com/artin64</a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} Artin Krasniqi — Matte Black + Gold Portfolio.
      </footer>
    </div>
  )
}
