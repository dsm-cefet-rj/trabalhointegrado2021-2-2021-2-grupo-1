import "./MenuFlutuante.css";

import { Link } from "react-router-dom";
import { useState } from "react";

function MenuFlutuante({ nomeMenu, lista }) {
  const [menuAtivo, setMenuAtivo] = useState(false);

  function ativaMenu() {
    setMenuAtivo(!menuAtivo);
  }

  return (
    <div className="menu-flutuante">
      <a className="ancora" onClick={ativaMenu}>
        {nomeMenu}
      </a>
      {menuAtivo ? (
        <div className="menu-flutuante-conteudo">
          {lista.map(({ pathName, itemName }, i) => (
            <Link to={pathName} key={i}>
              {itemName}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default MenuFlutuante;
