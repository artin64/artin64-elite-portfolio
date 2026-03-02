import './App.css'

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="top-glow" />
        <nav className="nav">
          <div className="logo">AK</div>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" className="hero-content">
          <p className="badge">NEW</p>
          <h1>
            I design and build products that deliver
            <span>real impact</span>
          </h1>
          <p className="intro">
            Hello, I&apos;m <strong>Artin Krasniqi</strong> — <strong>Full-Stack Developer</strong>.
          </p>
          <div className="actions">
            <a href="#contact" className="btn primary">Let&apos;s Connect</a>
            <a href="mailto:artin.krasniqi100@gmail.com" className="btn ghost">artin.krasniqi100@gmail.com</a>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="block">
          <p className="kicker">A QUICK GLANCE</p>
          <h2>Building the bridge between ideas and experiences</h2>
          <p>
            I&apos;m Artin Krasniqi, an engineering-driven developer who turns technical challenges
            into high-speed web products. I build full-stack solutions with clean, reusable code
            and practical architecture focused on performance.
          </p>
          <p>
            I focus on modern tools like Next.js, React and Node.js to ship products that scale
            and genuinely solve user problems.
          </p>
        </section>

        <section id="work" className="block cards">
          <article className="card"><h3>Creative Stack</h3><p>Tools and resources that power my workflow.</p></article>
          <article className="card"><h3>AI Product Concepts</h3><p>SaaS ideas with practical UX and scalable architecture.</p></article>
          <article className="card"><h3>Issue Tracker Platform</h3><p>Workflow-focused full-stack application with auth & filtering.</p></article>
          <article className="card"><h3>Interactive Web Apps</h3><p>Fast, responsive and user-centric experiences.</p></article>
        </section>

        <section id="contact" className="cta">
          <h2>FROM IDEA TO EXECUTION</h2>
          <h3>LET&apos;S BUILD SOMETHING REAL</h3>
          <a href="mailto:artin.krasniqi100@gmail.com" className="btn primary">Get in touch</a>
          <p>Available for full-time roles and freelance projects.</p>
          <p>Prishtinë, Kosovë · +383 49 732 298 · github.com/artin64</p>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-link">View CV</a>
        </section>
      </main>

      <footer>
        © 2026 Artin Krasniqi. All rights reserved.
      </footer>
    </div>
  )
}
