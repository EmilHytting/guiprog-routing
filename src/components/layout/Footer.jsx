function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>GUIProg Routing</p>
      <p>{year} - React Router DOM</p>
    </footer>
  )
}

export default Footer
