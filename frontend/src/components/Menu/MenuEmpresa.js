import "./menu.css";

function MenuPessoa() {
  return (
    <>
      <nav className="menu-container centralizar-x">
        <ul className="menu-conteudo centralizar-xy centralizar-x">
          <li>
            <a className="menu-item ancora">
              Eventos
            </a>
          </li>
          <li>
            <a className="menu-item ancora">
              Ingressos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuPessoa;
