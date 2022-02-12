import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import "./MenuFlutuante.css";

function MenuFlutuante({ nomeMenu, lista }) {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const navigate = useNavigate();

  function logout() {
    navigate("/")
  }

  function ativaMenu() {
    setMenuAtivo(!menuAtivo);
  }

  function menu(path, item, key) {
    if (item === "Entrar Empresa") {
      return (
        <button className="ancora" id="entrar-empresa" key={key}>
          {item}
        </button>
      );
    } else if (item === "Entrar Cliente") {
      return (
        <button className="ancora" id="entrar-cliente" key={key}>
          {item}
        </button>
      );
    }
    else if (item === "Criar Empresa") {
      return (
        <button className="ancora" id="criar-empresa" key={key}>
          {item}
        </button>
      );
    }
    else if (item === "Criar Cliente") {
      return (
        <button className="ancora" id="criar-cliente" key={key}>
          {item}
        </button>
      );
    } else {
      if (item === "Sair") {
        return (
          <Link to={path} onClick={logout} key={key} >
            Sair
          </Link>
        )
      } else {
        return (
          <Link to={path} key={key}>
            {item}
          </Link>
        );
      }
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
