import Botao from "../../Botoes/Botoes";

function Ingresso({ ingresso}) {
  const botao = [
    {
      nome: "Editar",
      url: `/empresa/ingresso/${ingresso.id}`,
    },
  ];

  return (
    <div>
      <h2 className = "subtitulo" > {ingresso.nome} </h2>
      <Botao botoes = {botao} />
    </div>
  );
}

export default Ingresso;
