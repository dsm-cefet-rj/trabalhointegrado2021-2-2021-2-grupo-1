import "./home.css";

import Cabecalho from "../Cabecalho/Cabecalho";

import UsuarioModal from "../Usuario/UsuarioModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeLogin() {
  const navigate = useNavigate();
  const usuarioLogadoTipo = JSON.parse(localStorage.getItem("usuario"))?.tipo;

  useEffect(() => {
    if (usuarioLogadoTipo === "cliente") {
      navigate("/home")
    } else if (usuarioLogadoTipo === "empresa") {
      navigate("/empresa/eventos")
    }
  })

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
