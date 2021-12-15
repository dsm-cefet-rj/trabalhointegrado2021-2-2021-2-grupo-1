import "./menu.css";

function MenuPessoa() {
  return (
    <>
      <nav className="menu-container centralizar-x">
        <ul className="menu-conteudo centralizar-xy centralizar-x">
          <li>
            <a className="menu-item ancora">Esportes</a>
          </li>
          <li>
            <a className="menu-item ancora">Shows</a>
          </li>
          <li>
            <a className="menu-item ancora">Família</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuPessoa;
