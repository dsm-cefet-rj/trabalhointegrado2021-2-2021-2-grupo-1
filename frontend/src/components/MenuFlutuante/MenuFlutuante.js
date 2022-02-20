import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux'

import { logoutUsuario } from "../../redux/usuariosSlice";

import "./MenuFlutuante.css";

function MenuFlutuante({ nomeMenu, lista }) {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(logoutUsuario());
    navigate("/");
    localStorage.removeItem("usuario");
  }

  function ativaMenu() {
    setMenuAtivo(!menuAtivo);
  }

  function menu(path, item, key) {
    if (item === "Entrar") {
      return (
        <button className="ancora" id="entrar" key={key}>
          {item}
        </button>
      );
    }
    else if (item === "Criar Conta") {
      return (
        <button className="ancora" id="criar-conta" key={key}>
          {item}
        </button>
      );
    }
    else if (item === "Sair") {
      return (
        <button className="ancora" style={{ margin: "0 auto", marginBottom: "30px" }} onClick={logout} key={key} >
          Sair
        </button>
      )
    }
    else {
      return (
        <Link to={path} className="ancora" key={key}>
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
