import Cabecalho from "../Cabecalho/Cabecalho";
import Botao from "../Botoes/Botoes";

function CriarVenda() {
  const botao = [
    {
      nome: "Criar",
      url: "/",
    },
  ];

  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo">Criar Venda</h2>
        <form className = "formulario">
          <label>
            Nome do Evento
            <select className = "input-box">
              <option>Rock in Rio 2021</option>
              <option>Rock in Rio 2021</option>
            </select>
          </label>
          <label>
            Nome do Ingresso
            <select className = "input-box">
              <option>Rock in Rio 2021 - Dia 5</option>
              <option>Rock in Rio 2021 - Dia 7</option>
            </select>
          </label>
          <label>
            Valor do Ingresso
            <input type="number" placeholder="100" className="input-box" />
          </label>
          <label>
            Quantidade de Ingressos
            <input type="number" placeholder="2" className="input-box" />
          </label>
          <Botao botoes = {botao}/>
        </form>
      </main>
    </>
  );
}

export default CriarVenda;
