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
      <ul>
        <li>
          <span>Gênero:</span> {evento.genero}
        </li>
        <li><span>Endereço:</span> {evento.endereco}</li>
        <li><span>Local:</span> {evento.local} </li>
      </ul>
      <Botao botoes={botao} />
    </div>
  );
}

export default Evento;
