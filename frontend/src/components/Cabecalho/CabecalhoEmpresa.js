import "./cabecalho.css";

function CabecalhoEmpresa() {
  return (
    <header>
      <div className="cabecalho-container centralizar-xy">
        <h1>Meu Ingresso</h1>
        <div className="usuario-container centralizar-xy">
          <a href="#">Rock in Rio</a>
        </div>
      </div>
    </header>
  );
}

export default CabecalhoEmpresa;
