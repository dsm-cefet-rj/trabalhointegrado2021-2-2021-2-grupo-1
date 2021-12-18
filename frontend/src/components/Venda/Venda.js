import Botao from "../Botoes/Botoes";

function Venda() {
  const botao = [
    {
      nome: "Editar",
      url: "/editar-venda",
    },
  ];

  return (
    <div>
      <h2 className="subtitulo">Rock in Rio 2021 - Dia 3</h2>
      <p>Ingressos Restantes: 5</p>
      <Botao botoes={botao} />
    </div>
  );
}

export default Venda;
