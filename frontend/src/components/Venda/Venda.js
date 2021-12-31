import { useSelector } from "react-redux";

import Botao from "../Botoes/Botoes";

function Venda({ venda }) {
  const ingresso = useSelector((state) =>
    state.ingressos.find((ingresso) => ingresso.id === venda.ingressoId)
  );

  const botao = [
    {
      nome: "Editar",
      url: `/empresa/venda/${venda.id}`,
    },
  ];

  return (
    <div>
      <h2 className="subtitulo"> {ingresso.nome} </h2>
      <p>Ingressos Restantes: {venda.quantidade} </p>
      <Botao botoes={botao} />
    </div>
  );
}

export default Venda;
