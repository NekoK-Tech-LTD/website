import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from './LogoMark'
import { ServicesMenu } from './ServicesMenu'

export function Header() {
  const [open, setOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const closeTimerRef = useRef<number | null>(null)

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false)
      closeTimerRef.current = null
    }, 240)
  }

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      clearCloseTimer()
    }
  }, [])

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="brand-link" aria-label="NekoK Tech home">
          <LogoMark />
        </Link>

        <div className="nav-links" role="menubar">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>

          <div
            className="services-menu-anchor"
            ref={servicesRef}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            onFocus={openMenu}
            onBlur={scheduleClose}
          >
            <button
              type="button"
              className="nav-link services-trigger"
              aria-haspopup="dialog"
              aria-expanded={open}
              onClick={() => (open ? scheduleClose() : openMenu())}
            >
              Services
              <span aria-hidden="true" className={open ? 'chevron open' : 'chevron'}>
                ▾
              </span>
            </button>
            <ServicesMenu open={open} />
          </div>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
