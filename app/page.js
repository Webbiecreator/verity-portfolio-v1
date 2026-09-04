const projects = [
  ["01", "Portfolio · 2026", "Verity Portfolio", "VERITY", "A premium portfolio system exploring motion, typography and visual storytelling.", "visual-one"],
  ["02", "E-commerce · 2026", "Product Experience", "COMMERCE", "A clean storefront direction built around product focus and frictionless browsing.", "visual-two"],
  ["03", "Brand site · 2026", "Creative Studio", "STUDIO", "An editorial-inspired landing page with bold type, modular sections and subtle motion.", "visual-three"],
];

export default function Home() {
  return (
    <>
      <div className="noise" />
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Verity home"><span className="brand-mark">V</span><span>VERITY</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-kicker"><span className="pulse" /> Independent digital studio · India</div>
          <div className="hero-copy">
            <p className="eyebrow">DESIGN · DEVELOPMENT · DIGITAL</p>
            <h1>Websites that<br /><em>feel different.</em></h1>
            <p className="lede">Sharp, responsive digital experiences built to make brands look memorable — without making the interface complicated.</p>
            <div className="actions"><a className="btn btn-primary" href="#work">View work <span>↘</span></a><a className="btn btn-secondary" href="#contact">Start a project <span>↗</span></a></div>
          </div>
          <div className="hero-footer"><span>Scroll to explore</span><span>01 / 04</span></div>
        </section>

        <section id="work" className="section wrap">
          <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2>A few things I&apos;ve built.</h2></div><p className="section-note">A compact selection from web design, development and digital experiments.</p></div>
          <div className="project-grid">
            {projects.map(([number, type, title, label, description, visual]) => (
              <article className={`project-card ${number === "01" ? "featured" : ""}`} key={number}>
                <div className={`project-visual ${visual}`}><span>{number}</span><strong>{label}</strong></div>
                <div className="project-meta"><span>{type}</span><span>↗</span></div>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about wrap"><div className="about-panel"><p className="eyebrow">ABOUT</p><div className="about-grid"><h2>I care about the details people don&apos;t consciously notice.</h2><div><p>I&apos;m a young designer/developer building websites with a focus on visual identity, interaction and usability.</p><p>Verity exists to make digital work feel considered — from the first frame to the last click.</p><div className="tag-row"><span>Web Design</span><span>Frontend</span><span>Motion</span><span>Creative Dev</span></div></div></div></div></section>

        <section id="contact" className="contact wrap"><p className="eyebrow">CONTACT</p><h2>Have something worth building?</h2><p className="contact-copy">Tell me what you&apos;re working on. I&apos;ll get back to you with the next step.</p><a className="contact-link" href="mailto:hello@verity.studio">hello@verity.studio <span>↗</span></a></section>
      </main>

      <footer className="footer wrap"><span>© 2026 VERITY</span><span>Built with intention.</span></footer>
    </>
  );
}
