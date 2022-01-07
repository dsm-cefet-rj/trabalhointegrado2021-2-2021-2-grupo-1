import { Link } from "react-router-dom";
import { useState } from "react";

import "./MenuFlutuante.css";

function MenuFlutuante({ nomeMenu, lista }) {
  const [menuAtivo, setMenuAtivo] = useState(false);

  function ativaMenu() {
    setMenuAtivo(!menuAtivo);
  }

  function menu(path, item, key) {
    if (item === "Já Possui uma Conta?") {
      return (
        <button className="ancora" id="possui-conta" key={key}>
          {item}
        </button>
      );
    } else if (item === "Crie uma Conta") {
      return (
        <button className="ancora" id="nao-possui-conta" key={key}>
          {item}
        </button>
      );
    } else {
      return (
        <Link className="ancora" to={path} key={key}>
          {item}
        </Link>
      );
    }
  }

  return (
    <>
      <div className="menu-flutuante">
        <button className="ancora" onClick={ativaMenu}>
          {nomeMenu}
        </button>
        {menuAtivo ? (
          <div className="menu-flutuante-conteudo">
            {lista.map(({ pathName, itemName }, i) =>
              menu(pathName, itemName, i)
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default MenuFlutuante;
