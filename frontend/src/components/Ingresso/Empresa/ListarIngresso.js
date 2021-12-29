import { useSelector } from "react-redux";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngressos() {
  const ingressos = useSelector ((state) => state.ingressos);
  
  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo"> Meus Ingressos </h2>
        <div className = "listagem-container-empresa">
          {ingressos.length > 0 ? (
            ingressos.map((ingresso) => <Ingresso ingresso = {ingresso} key = {ingresso.id} />)
          ) : (
            <h2 className = "subtitulo"> Nenhum Ingresso Cadastrado </h2>
          )}
        </div>
      </main>
    </>
  );
}

export default ListarIngressos;
