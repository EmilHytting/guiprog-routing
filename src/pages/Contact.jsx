import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="page">
      <h2 className="page__title">Contact</h2>
      <p className="page__lead">Du er nu på Contact-siden.</p>
      <p className="route-badge">Aktiv route: /contact</p>

      <div className="contact-layout">
        <article className="page-card">
          <h3>Kontaktinfo</h3>
          <p>Email: emil153s@elev.techcollege.dk</p>
          <p>Telefon: +45 23 93 39 97</p>
          <p>Adresse: Priorgade 24, 9000 Aalborg</p>
        </article>
        <article className="page-card">
          <h3>Tip</h3>
          <p>Brug menuen eller knappen "Næste side" for at teste routing hurtigt.</p>
        </article>
      </div>

      <div className="page-links">
        <Link className="page-link-button" to="/">
          Gå til Home
        </Link>
        <Link className="page-link-button" to="/about">
          Gå til About
        </Link>
      </div>
    </section>
  )
}

export default Contact
