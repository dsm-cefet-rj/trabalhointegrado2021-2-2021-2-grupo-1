import "./botoes.css";

import { Link } from "react-router-dom";

function Botoes({ botoes }) {
  function classeBotao(botao) {
    if (botao === "Criar") {
      return "botao botao-sucesso";
    } else if (botao === "Remover" || botao === "Reembolso") {
      return "botao botao-perigo";
    } else return "botao";
  }

  return (
    <div className="botoes-container">
      {botoes.map(({ url, nome }, i) => (
        <Link to={url} key={i}>
          <button className={classeBotao(nome)}>{nome}</button>
        </Link>
      ))}
    </div>
  );
}

export default Botoes;
