import "./Home.css";

import CabecalhoPessoa from "../Cabecalho/CabecalhoPessoa";
import MenuPessoa from "../Menu/MenuPessoa";

function Home() {
  return (
    <>
      <header>
        <CabecalhoPessoa />
        <MenuPessoa />
      </header>
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
