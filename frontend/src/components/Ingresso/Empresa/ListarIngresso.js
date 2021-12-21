import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";
import Ingresso from "./Ingresso";

function ListarIngressos() {
  const ingresso = [
    {
      nome: "Rock in Rio 2022 - 3º Dia",
    },
    {
      nome: "Rock in Rio 2022 - 4º Dia",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Meus Ingressos</h2>
        <div className="listagem-container-empresa">
          {ingresso.map(({nome}) => (
            <Ingresso ingressoNome = {nome} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListarIngressos;
