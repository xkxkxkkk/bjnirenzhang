import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/gallery', label: '作品馆' },
  { path: '/heritage', label: '传承志' },
  { path: '/visit', label: '到访' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        {/* Logo */}
        <Link to="/" className="nav__logo">
          <span className="nav__logo-cn">泥人张</span>
          <span className="nav__logo-en">CLAY FIGURINE ZHANG</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav__links">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav__link ${location.pathname === path ? 'nav__link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav__mobile ${menuOpen ? 'nav__mobile--open' : ''}`}>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`nav__mobile-link ${location.pathname === path ? 'nav__mobile-link--active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
