import './App.css'

const projects = [
  {
    title: 'Business Website Delivery',
    description:
      'Custom responsive website for business presentation, optimized for speed, SEO basics and user trust.',
    stack: ['React', 'JavaScript', 'SEO', 'Responsive UI'],
  },
  {
    title: 'Lead Generation Landing Page',
    description:
      'High-conversion landing page with focused CTA flow, mobile-first layout and content hierarchy for client acquisition.',
    stack: ['Next.js', 'TypeScript', 'Performance', 'UX'],
  },
  {
    title: 'Dashboard Concept',
    description:
      'Operational dashboard concept for monitoring internal metrics and workflows with clean visual structure.',
    stack: ['Node.js', 'SQL', 'UI/UX', 'Architecture'],
  },
]

export default function App() {
  return (
    <div className="site">
      <header className="hero">
        <p className="kicker">WELCOME TO MY UNIVERSE</p>
        <h1>
          Crafting Digital
          <span>Masterpieces</span>
        </h1>
        <p className="lead">
          I&apos;m <strong>Artin Krasniqi</strong>, a professional <strong>Full-Stack Web Developer</strong>{' '}
          dedicated to building high-performance, user-centric web applications.
        </p>
        <div className="cta-row">
          <a className="btn" href="#portfolio">Projects Showcase</a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
      </header>

      <main>
        <section id="portfolio" className="section">
          <p className="section-kicker">Portfolio</p>
          <h2>Featured Creations</h2>
          <p className="section-text">
            A selection of high-impact digital solutions, built with focus on scalability, performance,
            and exceptional user experience.
          </p>

          <div className="cards">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p>/</p>
          <p>
            Professional Full Stack Developer dedicated to crafting immersive, high-performance
            digital experiences with cutting-edge technology.
          </p>
          <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
          <a href="tel:+38349732298">+383 49 732 298</a>
          <p>Prishtinë, Kosovë</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Artin Krasniqi. All rights reserved.</p>
        <p>Made with ❤️ in Kosova</p>
      </footer>
    </div>
  )
}
