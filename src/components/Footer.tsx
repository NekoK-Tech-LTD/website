import { Link } from 'react-router-dom'
import { LogoMark } from './LogoMark'
import { siteConfig } from '../data/siteData'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <LogoMark withWordmark={false} />
        <p>
          {siteConfig.companyName} builds elegant personalized guidance tools that help people discover products with more confidence.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">
            {siteConfig.twitterHandle}
          </a>
          <p>{siteConfig.businessHours}</p>
          <address>{siteConfig.address}</address>
        </div>
      </div>
    </footer>
  )
}
