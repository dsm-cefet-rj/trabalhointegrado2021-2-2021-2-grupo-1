import "./menu.css";

function Menu({ items }) {
  return (
    <>
      <nav className="menu-container centralizar-x">
        <ul className="menu-conteudo centralizar-xy centralizar-x">
          {items.map((item, i) => (
            <li>
              <a className="menu-item anchor" key={i}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Menu;
