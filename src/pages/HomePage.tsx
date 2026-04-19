import { Link } from 'react-router-dom'
import { services, siteConfig, whyNekok } from '../data/siteData'

export function HomePage() {
  return (
    <>
      <section className="hero-section section">
        <div className="hero-background" aria-hidden="true" />
        <p className="eyebrow">UK-Based Technology Company</p>
        <h1>
          Product guidance built on
          <span>science, structure, and clarity.</span>
        </h1>
        <p className="hero-lead">{siteConfig.slogan}</p>
        <p className="hero-sub">{siteConfig.shortDescription}</p>
        <div className="hero-actions">
          <a href="#featured-services" className="btn btn-primary btn-always-on btn-always-on-primary">
            Explore Services
          </a>
          <Link to="/about" className="btn btn-secondary btn-always-on btn-always-on-secondary">
            Learn About Us
          </Link>
        </div>
      </section>

      <section className="section positioning-section">
        <div className="section-title-wrap">
          <p className="eyebrow">Brand Positioning</p>
          <h2>We use technology to deliver product recommendations and direct consultation.</h2>
        </div>
        <p>
          NekoK Tech LTD is a technology company that turns complex product information into practical recommendations.
          We focus on helping people choose what actually fits their needs through evidence-led analysis, with clarity and
          confidence, and we also provide consultation when users need deeper support.
        </p>
      </section>

      <section id="featured-services" className="section services-section">
        <div className="section-title-wrap">
          <p className="eyebrow">Featured Services</p>
          <h2>Launching with skincare. Expanding into specialist technical domains.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => {
            const s = service as any;
            return (
              <article key={s.id} className="info-card service-card">
                {s.status && (
                  <p className="service-status">{s.status}</p>
                )}
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                {s.isAvailable ? (
                  <Link to={s.href} className="text-link">
                    Visit service page
                  </Link>
                ) : (
                  <span className="text-link muted" aria-disabled="true">
                    Service page coming soon
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section why-section">
        <div className="section-title-wrap">
          <p className="eyebrow">Why NekoK</p>
          <h2>Built for trust, designed for thoughtful choices.</h2>
        </div>
        <div className="card-grid">
          {whyNekok.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-preview">
        <div className="section-title-wrap">
          <p className="eyebrow">About Us</p>
          <h2>A focused technology company with a personalization-first philosophy.</h2>
        </div>
        <p>
          We combine technical analysis, recommendation systems, and consultation workflows to make complex product decisions clearer
          and more informed.
        </p>
        <Link to="/about" className="btn btn-secondary">
          Read our story
        </Link>
      </section>

      <section className="section contact-cta">
        <div>
          <p className="eyebrow">Let&apos;s Connect</p>
          <h2>Follow the build journey and reach us directly.</h2>
        </div>
        <div className="cta-links">
          <a href={`mailto:${siteConfig.contactEmail}`} className="btn btn-primary">
            {siteConfig.contactEmail}
          </a>
          <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            {siteConfig.twitterHandle}
          </a>
        </div>
      </section>
    </>
  )
}
