import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page">
      <h2 className="page__title">Home</h2>
      <p className="page__lead">Dette er standardsiden (index-route).</p>
      <p className="route-badge">Aktiv route: /</p>

      <div className="page-grid">
        <article className="page-card">
          <h3>Formål</h3>
          <p>Eksempel app til navigation mellem sider med react-router-dom.</p>
        </article>
        <article className="page-card">
          <h3>Layout</h3>
          <p>Header, Navigation og Footer kommer fra MainLayout.</p>
        </article>
      </div>

      <div className="page-links">
        <Link className="page-link-button" to="/about">
          Gå til About
        </Link>
        <Link className="page-link-button" to="/contact">
          Gå til Contact
        </Link>
      </div>
    </section>
  )
}

export default Home
