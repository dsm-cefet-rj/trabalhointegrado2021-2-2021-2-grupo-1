import Botao from "../../Botoes/Botoes";

function Ingresso({ ingressoNome}) {
  const botao = [
    {
      nome: "Editar",
      url: "/editar-ingresso",
    },
  ];

  return (
    <div>
      <h2 className="subtitulo">{ingressoNome}</h2>
      <Botao botoes={botao} />
    </div>
  );
}

export default Ingresso;
