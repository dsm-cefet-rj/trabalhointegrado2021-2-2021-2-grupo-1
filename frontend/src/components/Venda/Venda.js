import { useSelector } from "react-redux";

import { selectIngressoById } from "../../redux/ingressosSlice";

import Botao from "../Botoes/Botoes";

function Venda({ venda }) {
  const ingresso = useSelector((state) => selectIngressoById(state, venda.ingressoId));

  const botao = [
    {
      nome: "Editar",
      url: `/empresa/venda/${venda.id}`,
    },
  ];

  return (
    <div>
      <h2 className="subtitulo">{ingresso.nome} </h2>
      <p>Ingressos Restantes: {venda.quantidade} </p>
      <Botao botoes={botao} />
    </div>
  );
}

export default Venda;
