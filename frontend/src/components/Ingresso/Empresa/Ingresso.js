import Botao from "../../Botoes/Botoes";

function Ingresso() {
  const botao = [
    {
      nome: "Editar",
      url: "/editar-ingresso",
    },
  ];

  return (
    <div>
      <h2 className="subtitulo">Rock in Rio 2022 - Dia 3</h2>
      <Botao botoes={botao} />
    </div>
  );
}

export default Ingresso;
