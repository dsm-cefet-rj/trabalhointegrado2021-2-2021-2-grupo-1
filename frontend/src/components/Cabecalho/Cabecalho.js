import "./cabecalho.css";

import Menu from "../Menu/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cabecalho({ items, user }) {
  return (
    <header>
      <div className="cabecalho-container centralizar-xy">
        <h1>Meu Ingresso</h1>
        <div className="usuario-container centralizar-xy">
          <a href="#">{user}</a>
          {user == "Thales" ? (
            <div className="carrinho-compra-container">
              <a href="#">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="lg"
                  className="carrinho-compra-img"
                />
                <span>1</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <Menu items={items} />
    </header>
  );
}

export default Cabecalho;
