import Botao from "../Botoes/Botoes";

function Venda({venda}) {
  const botao = [
    {
      nome: "Editar",
      url: "/editar-venda",
    },
  ];

  return (
    <div>
      <h2 className="subtitulo"> {venda.idIngresso} </h2>
      <p>Ingressos Restantes: {venda.quantidade} </p>
      <Botao botoes = {botao} />
    </div>
  );
}

export default Venda;
