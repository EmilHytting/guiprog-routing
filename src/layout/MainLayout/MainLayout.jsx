import { Outlet } from 'react-router-dom'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import Navigation from '../../components/layout/Navigation'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="site-shell">
      <Header />
      <Navigation />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
