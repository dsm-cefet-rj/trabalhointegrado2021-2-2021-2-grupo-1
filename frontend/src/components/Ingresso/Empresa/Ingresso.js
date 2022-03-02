import { useSelector } from "react-redux";
import { selectEventoById } from "../../../redux/eventosSlice";
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

  const evento = useSelector(state => selectEventoById(state, ingresso.eventoId));

  return (
    <div>
      <h2 className="subtitulo">{ingresso.nome}</h2>
      <ul>
        <li>
          <span>Evento:</span> {evento.nome}
        </li>
        <li>
          <span>Horário:</span> {ingresso.horario}
        </li>
        <li><span>Data:</span> {ingresso.data}</li>
        <li><span>Descrição:</span> {ingresso.descricao} </li>
      </ul>
      <Botao botoes={botao} />
    </div>
  );
}

export default Ingresso;
