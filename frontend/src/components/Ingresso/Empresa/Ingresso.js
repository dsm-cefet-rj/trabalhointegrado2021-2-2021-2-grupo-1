import Botao from "../../Botoes/Botoes";

function Ingresso({ ingresso }) {
  const botao = [
    {
      nome: "Editar",
      url: `/empresa/ingresso/${ingresso.id}`,
    },
  ];

  return (
    <div>
      <h2 className = "subtitulo" > {ingresso.nome} </h2>
      <p>Evento: {ingresso.eventoID}</p>
      <p>Horário: {ingresso.horario}</p>
      <p>Data: {ingresso.data}</p>
      <p>Dados Adicionais: {ingresso.descricao}</p>
      <Botao botoes = {botao} />
    </div>
  );
}

export default Ingresso;
