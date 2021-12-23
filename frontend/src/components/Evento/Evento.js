import Botao from "../Botoes/Botoes";

function Evento({ evento }) {
  const botao = [
    {
      nome: "Editar",
      url: `/empresa/evento/${evento.id}`,
    },
  ];

  return (
    <div>
      <h2 className="subtitulo">{evento.nome}</h2>
      <Botao botoes={botao} />
    </div>
  );
}

export default Evento;
