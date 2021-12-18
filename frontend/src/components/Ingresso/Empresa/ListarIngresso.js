import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngressos() {
  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Ingressos</h2>
        <div className="listagem-container-empresa">
          <Ingresso />
          <Ingresso />
        </div>
      </main>
    </>
  );
}

export default ListarIngressos;
