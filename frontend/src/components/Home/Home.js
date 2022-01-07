import { useState } from "react";

import "./home.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import Botao from "../Botoes/Botoes";

function Home() {
  const [pesquisa, setPesquisa] = useState("");

  const botao = [
    {
      nome: "Procurar",
      url: `/ingressos/${pesquisa}`,
    },
  ];

  function checaMudança(e) {
    setPesquisa(e.target.value);
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy">
        <div className="pagina-inicial-container">
          <h2 className="subtitulo">Procure Por Um Evento</h2>
          <form className="formulario">
            <input
              type="text"
              placeholder="Nome do Evento"
              className="input-box"
              onChange={checaMudança}
            />
            <Botao botoes={botao} />
          </form>
        </div>
      </main>
    </>
  );
}

export default Home;
