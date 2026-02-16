import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function getNavLinkClassName({ isActive }) {
  return `site-nav__link ${isActive ? 'is-active' : ''}`
}

function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  function goToNextPage() {
    const order = ['/', '/about', '/contact']
    const current = location.pathname.replace(/\/+$/, '') || '/'
    const currentIndex = order.indexOf(current)
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % order.length : 0
    navigate(order[nextIndex])
  }

  return (
    <nav className="site-nav" aria-label="Hovedmenu">
      <NavLink end className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/about">
        About
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/contact">
        Contact
      </NavLink>
      <button type="button" className="site-nav__action" onClick={goToNextPage}>
        Næste side
      </button>
    </nav>
  )
}

export default Navigation
