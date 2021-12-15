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
          <h2 className="subtitulo">Procure Por Um Evento</h2>
          <form>
            <input
              type="text"
              placeholder="Nome do Evento"
              className="input-box conteudo-principal-input"
            />
            <button className="botao">Procurar</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Home;
