import "./cabecalho.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CabecalhoPessoa() {
  return (
    <header>
      <div className="cabecalho-container centralizar-xy">
        <h1>Meu Ingresso</h1>
        <div className="usuario-container centralizar-xy">
          <a href="#">Thales</a>
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
        </div>
      </div>
    </header>
  );
}

export default CabecalhoPessoa;
