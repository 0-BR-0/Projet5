
function ErrorPage() {
  return (
    <div>
      <div style={{ color: "#FF6060" }}>404</div>
      <div style={{ color: "#FF6060" }}>Oups! La page que vous demandez n'existe pas.</div>
      <nav id="navErrorPageId">
        <a id="lienErrorPageId" href="/">Retouner sur la page d'accueil</a>
      </nav>
    </div>
  )
}


export default ErrorPage