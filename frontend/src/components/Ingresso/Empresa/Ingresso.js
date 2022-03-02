import Botao from "../../Botoes/Botoes";
import { useSelector } from "react-redux";
import { selectEventoById } from "../../../redux/eventosSlice";

function Ingresso({ ingresso }) {
  const evento = useSelector((state) => selectEventoById(state, ingresso.eventoId));

  const botao = [
    {
      nome: "Editar",
      url: `/empresa/ingresso/${ingresso.id}`,
    },
  ];

  return (
    <div>
      <h2 className = "subtitulo" > {ingresso.nome} </h2>
      <p>Evento: {evento.nome}</p>
      <p>Horário: {ingresso.horario}</p>
      <p>Data: {ingresso.data}</p>
      <p>Dados Adicionais: {ingresso.descricao}</p>
      <Botao botoes = {botao} />
    </div>
  );
}

export default Ingresso;
