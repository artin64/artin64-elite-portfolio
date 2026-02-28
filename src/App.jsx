import './App.css'

const content = {
  en: {
    nav: ['Home', 'Portfolio', 'About', 'Contact'],
    available: 'Available for work',
    hello: "Hello, I'm",
    name: 'Artin Krasniqi',
    role1: 'Full-Stack Web Developer',
    role2: '& Creative Digital Builder',
    subtitle:
      'I build secure, scalable, and conversion-focused web experiences with modern design and clean code.',
    ctaPrimary: 'Explore My Work',
    ctaSecondary: 'Contact Me',
    location: 'Prishtina District, Kosovo',
    aboutTitle: 'About',
    aboutText:
      'Ambitious and analytical developer with strong practical skills in programming, IT systems, and solving real business problems. I focus on performance, clear UX, and production-ready delivery.',
    expertiseTitle: 'Expertise / Skills',
    featuredTitle: 'Featured projects',
    contactTitle: "Let's build something that actually works.",
    contactHint: 'Tap to copy email',
    footerText: '© 2026 Artin Krasniqi. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms',
  },
  sq: {
    nav: ['Kryefaqja', 'Portfolio', 'Rreth meje', 'Kontakt'],
    available: 'I disponueshëm për punë',
    hello: 'Përshëndetje, unë jam',
    name: 'Artin Krasniqi',
    role1: 'Zhvillues Full-Stack',
    role2: '& Krijues Digjital',
    subtitle:
      'Ndërtoj përvoja web të sigurta, të shkallëzueshme dhe të orientuara në rezultate me dizajn modern dhe kod të pastër.',
    ctaPrimary: 'Shiko projektet',
    ctaSecondary: 'Më kontakto',
    location: 'Rrethi i Prishtinës, Kosovë',
    aboutTitle: 'Rreth meje',
    aboutText:
      'Zhvillues ambicioz dhe analitik me aftësi të forta praktike në programim, sisteme IT dhe zgjidhje të problemeve reale të biznesit. Fokusohem në performancë, UX të qartë dhe dorëzim profesional.',
    expertiseTitle: 'Ekspertizë / Aftësi',
    featuredTitle: 'Projektet kryesore',
    contactTitle: 'Le të ndërtojmë diçka që funksionon vërtet.',
    contactHint: 'Kliko për ta kopjuar emailin',
    footerText: '© 2026 Artin Krasniqi. Të gjitha të drejtat e rezervuara.',
    privacy: 'Politika e Privatësisë',
    terms: 'Kushtet',
  },
}

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'SEO', 'UI/UX', 'JavaScript', 'WordPress']

const projects = [
  {
    title: 'Client Business Website',
    desc: 'Custom responsive business website with SEO setup and CMS handover for easy content editing.',
    live: '#',
  },
  {
    title: 'Lead Capture Landing',
    desc: 'High-conversion landing page with clear CTA flow, fast loading and conversion-focused structure.',
    live: '#',
  },
  {
    title: 'Management Dashboard Concept',
    desc: 'Role-based dashboard concept for internal reporting, operations and simplified decision workflows.',
    live: '#',
  },
  {
    title: 'Service Showcase Website',
    desc: 'Modern personal/service showcase with smooth animations, strong accessibility and responsive layout.',
    live: '#',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function App() {
  const lang = window.location.pathname.startsWith('/sq') ? 'sq' : 'en'
  const t = content[lang]

  return (
    <div className="site">
      <header className="nav-wrap">
        <a className="brand" href="#home">AK</a>
        <nav>
          <a href="#home">{t.nav[0]}</a>
          <a href="#portfolio">{t.nav[1]}</a>
          <a href="#about">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <span className="pill">{t.available}</span>
            <p className="hello">{t.hello}</p>
            <h1>{t.name}</h1>
            <h2>
              {t.role1}
              <br />
              {t.role2}
            </h2>
            <p className="sub">{t.subtitle}</p>
            <div className="stats">
              <div><strong>2+</strong><span>Years Experience</span></div>
              <div><strong>20+</strong><span>Projects Delivered</span></div>
              <div><strong>Global</strong><span>Remote Clients</span></div>
            </div>
            <div className="actions">
              <a className="btn" href="#portfolio">{t.ctaPrimary}</a>
              <a className="btn btn-ghost" href="#contact">{t.ctaSecondary}</a>
            </div>
            <p className="location">{t.location}</p>
          </div>

          <div className="hero-card" aria-label="profile">
            <div className="avatar">{initials(t.name)}</div>
            <p>{t.name}</p>
            <small>https://artinkrasniqi.netlify.app</small>
          </div>
        </section>

        <section className="skills-strip" aria-label={t.expertiseTitle}>
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </section>

        <section id="about" className="section">
          <h3>{t.aboutTitle}</h3>
          <p>{t.aboutText}</p>
        </section>

        <section id="portfolio" className="section">
          <h3>{t.featuredTitle}</h3>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <div className="cover" />
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <a href={p.live}>Check Live Site</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <h3>{t.contactTitle}</h3>
          <a className="email" href="mailto:artin.krasniqi100@gmail.com">artin.krasniqi100@gmail.com</a>
          <p>{t.contactHint}</p>
        </section>
      </main>

      <footer>
        <p>{t.footerText}</p>
        <div>
          <a href="#">{t.privacy}</a>
          <a href="#">{t.terms}</a>
        </div>
      </footer>
    </div>
  )
}
