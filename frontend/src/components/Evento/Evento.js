import Botao from "../Botoes/Botoes";

function Evento({ eventoNome }) {
  const botao = [
    {
      nome: "Editar",
      url: "/editar-evento",
    },
  ];

  return (
    <div>
      <h2 className="subtitulo">{eventoNome}</h2>
      <Botao botoes={botao} />
    </div>
  );
}

export default Evento;
