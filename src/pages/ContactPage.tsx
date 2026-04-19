import { siteConfig } from '../data/siteData'

export function ContactPage() {
  return (
    <section className="section page-section">
      <p className="eyebrow">Contact</p>
      <h1>We&apos;d love to hear from you.</h1>
      <p className="page-lead">Reach NekoK Tech LTD by email or on X. We reply during UK business hours.</p>

      <div className="contact-layout">
        <div className="info-card contact-details">
          <h2>Company Details</h2>
          <p>
            <strong>Email:</strong> <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </p>
          <p>
            <strong>X / Twitter:</strong>{' '}
            <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">
              {siteConfig.twitterHandle}
            </a>
          </p>
          <p>
            <strong>Business Hours:</strong> {siteConfig.businessHours}
          </p>
          <p>
            <strong>Address:</strong> {siteConfig.address}
          </p>
        </div>
      </div>
    </section>
  )
}
