import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngressos({ingressos}) {
  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo">Meus Ingressos</h2>
        <div className = "listagem-container-empresa">
          {ingressos.map(({nome}, i) => (
            <Ingresso ingressoNome = {nome} key = {i} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListarIngressos;
