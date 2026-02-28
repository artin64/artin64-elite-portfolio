import './App.css'

const projects = [
  {
    title: 'Client Business Website',
    description:
      'Custom business website me strukturë moderne, SEO bazë dhe menaxhim të lehtë të përmbajtjes.',
    stack: ['React', 'CSS', 'SEO'],
    live: 'https://artin64.github.io/artin64-elite-portfolio/',
  },
  {
    title: 'Lead Capture Landing',
    description:
      'Landing page e optimizuar për konvertime me CTA të qarta, performancë të lartë dhe UX të pastër.',
    stack: ['Next.js', 'TypeScript', 'Analytics'],
    live: '#',
  },
  {
    title: 'Management Dashboard',
    description:
      'Dashboard koncept për menaxhim operacionesh, raportime dhe workflows për role të ndryshme.',
    stack: ['Node.js', 'SQL', 'UI/UX'],
    live: '#',
  },
  {
    title: 'Service Showcase',
    description:
      'Prezantim profesional i shërbimeve me seksione të qarta dhe dizajn premium responsive.',
    stack: ['JavaScript', 'Design', 'Performance'],
    live: '#',
  },
  {
    title: 'Portfolio Refresh',
    description:
      'Redesign i plotë i portfolio-s me stil modern, animacione dhe strukturë vizuale enterprise.',
    stack: ['Vite', 'React', 'Animations'],
    live: '#',
  },
  {
    title: 'Business Automation Mini App',
    description:
      'Mini aplikacion për automatizim të proceseve të thjeshta të biznesit dhe menaxhim lead-esh.',
    stack: ['Node.js', 'API', 'MongoDB'],
    live: '#',
  },
]

const skills = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲', name: 'Next.js' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🟦', name: 'TypeScript' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🎨', name: 'UI/UX Design' },
  { icon: '🚀', name: 'Performance' },
  { icon: '🔍', name: 'SEO' },
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="logo" href="#home">
          ArtinKrasniqi
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content fade-up">
            <span className="badge">Available for work</span>
            <h1>Artin Krasniqi</h1>
            <h2>Full-Stack Web Developer & Creative Builder</h2>
            <p>
              Ndërtoj produkte web të shpejta, të sigurta dhe të dizajnuara për rezultat real.
              Fokus te performanca, konvertimi dhe eksperienca premium e përdoruesit.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#portfolio">
                Explore My Work
              </a>
              <a className="btn ghost" href="#contact">
                Let&apos;s Talk
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>Projects Completed</span>
              </div>
              <div>
                <strong>95+</strong>
                <span>Lighthouse Target</span>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-up delay-1">
            <div className="avatar">AK</div>
            <p>Prishtinë, Kosovë</p>
            <small>Secure • Scalable • Creative</small>
          </div>
        </section>

        <section id="portfolio" className="section fade-up">
          <h3>Featured Projects</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-cover" />
                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-overlay">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      View Live
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about fade-up">
          <div>
            <h3>About Me</h3>
            <p>
              Jam zhvillues ambicioz me qasje analitike, i orientuar në ndërtimin e zgjidhjeve
              praktike që sjellin rezultat. Punoj nga ideja deri te publikimi, duke mbajtur standard
              të lartë në kod, dizajn dhe optimizim.
            </p>
            <p>
              Qëllimi im është të ndërtoj produkte të qëndrueshme dhe të dukshme profesionalisht,
              që jo vetëm duken mirë por edhe performojnë fort në përdorim real.
            </p>
          </div>

          <div className="about-photo">
            <div className="photo-placeholder">Your Professional Photo</div>
          </div>
        </section>

        <section id="skills" className="section fade-up">
          <h3>Expertise / Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <span>{skill.icon}</span>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact fade-up">
          <span className="badge">Available for work</span>
          <h3>Let&apos;s build something that actually works.</h3>
          <a href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>

          <div className="contact-links">
            <a href="https://github.com/artin64" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Artin Krasniqi. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  )
}
