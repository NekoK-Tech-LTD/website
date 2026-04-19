
import { services } from '../data/siteData'

type ServicesMenuProps = {
  open: boolean
}

export function ServicesMenu({ open }: ServicesMenuProps) {
  return (
    <div className={open ? 'services-panel open' : 'services-panel'} role="dialog" aria-label="Service links">
      <p className="services-panel-title">Explore Services</p>
      <div className="services-grid">
        {services.map((service) => {
          const s = service as any;
          return (
            <article key={s.id} className="service-tile">
              {s.status && (
                <p className="service-status">{s.status}</p>
              )}
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              {s.isAvailable ? (
                <a
                  href="/skincare-analyzer"
                  className="service-link"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Open service
                </a>
              ) : (
                <span className="service-link disabled" aria-disabled="true">
                  Coming soon
                </span>
              )}
            </article>
          );
        })}
      </div>
    </div>
  )
}
