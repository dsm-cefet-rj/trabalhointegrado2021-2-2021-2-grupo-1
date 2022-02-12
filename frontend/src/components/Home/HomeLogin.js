import "./home.css";

import Cabecalho from "../Cabecalho/Cabecalho";

import UsuarioModal from "../Usuario/UsuarioModal";

function HomeLogin() {
  return (
    <>
      <Cabecalho usuario={"home"} />
      <main className="centralizar-xy centralizar-yx">
        <h2 className="pagina-inicial-chamada">
          Compre<span className="pagina-inicial-fonte-menor"> ingressos </span>
          <span className="pagina-inicial-pula-linha pagina-inicial-fonte-menor">de seus eventos favoritos</span>
          <span className="pagina-inicial-fonte-menor"> e </span>Revenda<span className="pagina-inicial-fonte-muito-menor"> (caso precise)</span>
        </h2>
        <UsuarioModal />
      </main>
    </>
  );
}

export default HomeLogin;
