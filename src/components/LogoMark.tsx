import { siteConfig } from '../data/siteData'

type LogoMarkProps = {
  withWordmark?: boolean
  className?: string
}

export function LogoMark({ withWordmark = true, className }: LogoMarkProps) {
  return (
    <div className={className ? `logo-mark ${className}` : 'logo-mark'}>
      <img src={siteConfig.logoPath} alt="NekoK Tech logo" className="logo-image" />
      {withWordmark ? (
        <div className="logo-text-wrap" aria-hidden="true">
          <span className="logo-title">NekoK Tech LTD</span>
          <span className="logo-subtitle">Personalized Product Guidance</span>
        </div>
      ) : null}
    </div>
  )
}
