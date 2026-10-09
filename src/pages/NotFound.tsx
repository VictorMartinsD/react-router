import "./NotFound.css";

export function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <span className="not-found-badge">Erro de Navegação</span>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Página não encontrada</h2>
        <p className="not-found-text">
          Ops! O endereço que você tentou acessar não existe, foi movido ou está temporariamente indisponível.
        </p>
        <a href="/" className="not-found-button">
          Voltar para o Início
        </a>
      </div>
    </div>
  );
}
