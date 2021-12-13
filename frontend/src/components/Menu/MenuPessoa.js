import "./menu.css";

function MenuPessoa() {
  return (
    <>
      <nav className="menu-container centralizar-x">
        <ul className="menu-conteudo centralizar-xy centralizar-x">
          <li>
            <a className="menu-item anchor">Esportes</a>
          </li>
          <li>
            <a className="menu-item anchor">Shows</a>
          </li>
          <li>
            <a className="menu-item anchor">Família</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuPessoa;
