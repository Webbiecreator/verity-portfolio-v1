"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    type: "Portfolio · 2026",
    title: "Verity Portfolio",
    label: "VERITY",
    description:
      "A visual portfolio built around motion, typography and a more cinematic way of showing digital work.",
    visual: "visual-one",
  },
  {
    number: "02",
    type: "E-commerce · 2026",
    title: "Product Experience",
    label: "COMMERCE",
    description:
      "A storefront direction where the product takes the lead and every interaction stays deliberate.",
    visual: "visual-two",
  },
  {
    number: "03",
    type: "Brand site · 2026",
    title: "Creative Studio",
    label: "STUDIO",
    description:
      "An editorial landing experience using scale, contrast and movement to make a small studio feel larger.",
    visual: "visual-three",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const projectStoryRef = useRef(null);
  const projectStageRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const story = projectStoryRef.current;
    const stage = projectStageRef.current;
    const progress = progressRef.current;
    if (!hero || !story || !stage || !progress) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const heroRect = hero.getBoundingClientRect();
      const heroProgress = Math.min(1, Math.max(0, -heroRect.top / Math.max(hero.offsetHeight, 1)));
      hero.style.setProperty("--hero-progress", heroProgress.toString());
      hero.style.setProperty("--mouse-shift", `${heroProgress * 18}px`);

      const rect = story.getBoundingClientRect();
      const travel = Math.max(story.offsetHeight - window.innerHeight, 1);
      const rawProgress = Math.min(1, Math.max(0, -rect.top / travel));
      const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
      const projectProgress = easedProgress * projects.length;
      const active = Math.min(projects.length - 1, Math.floor(projectProgress));
      const local = projectProgress - active;

      story.style.setProperty("--story-progress", rawProgress.toString());
      story.style.setProperty("--story-active", active.toString());
      story.style.setProperty("--story-local", local.toString());
      progress.style.transform = `scaleY(${Math.min(1, rawProgress + 0.02)})`;

      const panels = stage.querySelectorAll("[data-project-panel]");
      panels.forEach((panel, index) => {
        const distance = index - active;
        const opacity = Math.max(0, 1 - Math.min(1, Math.abs(distance) * 1.4));
        const translate = distance * 12 + (index === active ? -local * 12 : 0);
        const scale = index === active ? 1 - local * 0.04 : 0.94;
        panel.style.opacity = opacity.toString();
        panel.style.transform = `translate3d(0, ${translate}%, 0) scale(${scale})`;
        panel.style.zIndex = String(10 + (projects.length - Math.abs(distance)));
        panel.style.pointerEvents = index === active ? "auto" : "none";
      });
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="noise" />
      <div className="cursor-glow" aria-hidden="true" />

      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Verity home">
          <span className="brand-mark">V</span>
          <span>VERITY</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section ref={heroRef} className="hero wrap">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-grid" />

          <div className="hero-kicker">
            <span className="pulse" /> Independent digital studio · India
          </div>

          <div className="hero-copy">
            <p className="eyebrow">DESIGN · DEVELOPMENT · DIGITAL</p>
            <h1>
              Websites that
              <br />
              <em>feel different.</em>
            </h1>
            <p className="lede">
              I build sharp digital experiences with personality, motion and a
              reason to keep scrolling.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#work">
                View work <span>↘</span>
              </a>
              <a className="btn btn-secondary" href="#contact">
                Start a project <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-footer">
            <span>Scroll to explore</span>
            <span>01 / 04</span>
          </div>
        </section>

        <section ref={projectStoryRef} id="work" className="project-story">
          <div className="project-story-sticky wrap" ref={projectStageRef}>
            <div className="project-intro">
              <p className="eyebrow">SELECTED WORK</p>
              <span className="project-intro-line" />
            </div>

            <div className="project-progress" aria-hidden="true">
              <span className="project-progress-fill" ref={progressRef} />
            </div>

            <div className="project-stage">
              {projects.map((project) => (
                <article
                  className="project-panel"
                  data-project-panel
                  key={project.number}
                >
                  <div className={`project-visual ${project.visual}`}>
                    <div className="visual-top">
                      <span>{project.number}</span>
                      <span>{project.type}</span>
                    </div>
                    <div className="visual-core">
                      <span className="visual-symbol">✦</span>
                      <strong>{project.label}</strong>
                      <span className="visual-caption">A DIGITAL EXPERIENCE</span>
                    </div>
                    <div className="visual-bottom">
                      <span>VERITY / WORK</span>
                      <span>↗</span>
                    </div>
                  </div>

                  <div className="project-copy">
                    <div className="project-meta">
                      <span>{project.number} / 03</span>
                      <span>{project.type}</span>
                    </div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a className="project-link" href="#contact">
                      Explore project <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about wrap">
          <div className="about-panel">
            <div className="about-panel-top">
              <p className="eyebrow">ABOUT</p>
              <span>03 — 04</span>
            </div>
            <div className="about-grid">
              <h2>
                I care about the details people don&apos;t consciously notice.
              </h2>
              <div>
                <p>
                  I&apos;m a young designer/developer building websites around
                  visual identity, interaction and usability.
                </p>
                <p>
                  Verity is where those ideas meet: less template, more point
                  of view.
                </p>
                <div className="tag-row">
                  <span>Web Design</span>
                  <span>Frontend</span>
                  <span>Motion</span>
                  <span>Creative Dev</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact wrap">
          <p className="eyebrow">CONTACT · 04 / 04</p>
          <h2>
            Have something
            <br />
            <em>worth building?</em>
          </h2>
          <p className="contact-copy">
            Tell me what you&apos;re working on. Let&apos;s make something people
            remember.
          </p>
          <a className="contact-link" href="mailto:hello@verity.studio">
            hello@verity.studio <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© 2026 VERITY</span>
        <span>Built with intention.</span>
      </footer>
    </>
  );
}
