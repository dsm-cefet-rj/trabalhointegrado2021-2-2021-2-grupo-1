import "./Home.css";

import Cabecalho from "../Cabecalho/Cabecalho";

function Home() {
  return (
    <>
      <Cabecalho items={["Esporte", "Show", "Família"]} user="Thales" />
      <main className="centralizar-xy">
        <div className="conteudo-principal-container">
          <h2>Procure Por Um Evento</h2>
          <form>
            <input
              type="text"
              placeholder="Nome do Evento"
              className="conteudo-principal-input input-text"
            />
            <button className="botao">Procurar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Home;
