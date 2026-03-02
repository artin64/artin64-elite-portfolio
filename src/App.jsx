import './App.css'

const marqueeItems = [
  'User-Friendly',
  'Adaptive',
  'Fluid',
  'Future-Proof',
  'SEO-Ready',
  'Immersive',
  'Protected',
  'Dependable',
  'Captivating',
]

const cards = [
  {
    title: 'Creative Stack',
    text: 'Tools and resources that power my workflow and product delivery.',
  },
  {
    title: 'AI Product Concepts',
    text: 'SaaS concepts focused on practical UX, strong architecture and real utility.',
  },
  {
    title: 'Issue Tracker Platform',
    text: 'Full-stack management flow with authentication, filtering and clear team workflows.',
  },
  {
    title: 'Interactive Web Experiences',
    text: 'Fast and responsive interfaces built with modern frameworks and performance-first mindset.',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="home">
        <div className="hero-overlay" />
        <nav className="nav">
          <a className="logo" href="#home">AK</a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a className="pill" href="mailto:artin.krasniqi100@gmail.com">Book a Call</a>
        </nav>

        <div className="hero-content">
          <span className="mini-badge">NEW</span>
          <h1>
            I design and build products that
            <br />
            deliver <em>real impact</em>
          </h1>
          <p>
            Hello, I&apos;m <strong>Artin Krasniqi</strong> — Full-Stack Developer focused on modern,
            scalable web products.
          </p>
          <div className="hero-buttons">
            <a className="btn solid" href="#contact">Let&apos;s Connect</a>
            <a className="btn soft" href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
          </div>
        </div>
      </header>

      <section className="marquee-wrap" aria-label="marquee">
        <div className="marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`}>{item} ✦</span>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-tag">A QUICK GLANCE</p>
        <h2>
          Building the bridge between ideas and <em>experiences</em>
        </h2>
        <p>
          I&apos;m Artin Krasniqi, an engineering-driven developer who transforms technical complexity
          into high-speed web products. I manage the full stack with clean architecture and reusable code.
        </p>
        <p>
          My focus is building reliable, scalable products with React/Next.js and backend systems that
          support real users and growing startups.
        </p>
      </section>

      <section className="grid" id="projects">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="cta" id="contact">
        <div className="cta-inner">
          <h2>FROM IDEA TO EXECUTION</h2>
          <h3>LET&apos;S BUILD SOMETHING REAL!</h3>
          <a className="btn solid" href="mailto:artin.krasniqi100@gmail.com">Get in touch</a>
          <p>Available for full-time roles and selective freelance projects.</p>
          <p>Prishtinë, Kosovë · +383 49 732 298 · github.com/artin64</p>
          <a className="resume" href="/resume.pdf" target="_blank" rel="noreferrer">View CV</a>
        </div>
      </section>

      <footer>
        <div>© 2026 Artin Krasniqi. All rights reserved.</div>
      </footer>
    </div>
  )
}
