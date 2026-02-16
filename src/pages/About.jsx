import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="page">
      <h2 className="page__title">About</h2>
      <p className="page__lead">Du er nu på About-siden.</p>
      <p className="route-badge">Aktiv route: /about</p>

      <div className="about-list">
        <article className="page-card">
          <h3>Hvad er denne side?</h3>
          <p>Denne side viser at routing til /about virker korrekt.</p>
        </article>
      </div>

      <div className="page-links">
        <Link className="page-link-button" to="/">
          Gå til Home
        </Link>
        <Link className="page-link-button" to="/contact">
          Gå til Contact
        </Link>
      </div>
    </section>
  )
}

export default About
