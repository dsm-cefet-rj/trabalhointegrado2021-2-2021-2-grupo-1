import "./cabecalho.css";

import { Link } from "react-router-dom";

import MenuFlutuante from "../MenuFlutuante/MenuFlutuante";

function Cabecalho({ usuario }) {
  const menuListaPessoa = [
    {
      pathName: "/meus-ingressos",
      itemName: "Meus Ingressos",
    },
    {
      pathName: "/carrinho",
      itemName: "Meu Carrinho",
    },
  ];

  const menuListaEmpresa = [
    {
      pathName: "/empresa/criar-evento",
      itemName: "Criar Evento",
    },
    {
      pathName: "/empresa/criar-ingresso",
      itemName: "Criar Ingresso",
    },
    {
      pathName: "/empresa/criar-venda",
      itemName: "Vender",
    },
  ];

  return (
    <header>
      <div className="cabecalho-container centralizar-xy">
        <Link to={"/"}>
          <h1 className="titulo">Meu Ingresso</h1>
        </Link>
        <div className="usuario-container centralizar-xy">
          {
            {
              pessoa: (
                <MenuFlutuante nomeMenu={"Thales"} lista={menuListaPessoa} />
              ),
              empresa: (
                <MenuFlutuante
                  nomeMenu={"Rock in Rio"}
                  lista={menuListaEmpresa}
                />
              ),
            }[usuario]
          }
        </div>
      </div>
      <nav className="menu-container centralizar-x">
        {
          {
            pessoa: (
              <ul className="menu-conteudo centralizar-xy centralizar-x">
                <li>
                  <Link to="/esportes" className="menu-item ancora">
                    Esportes
                  </Link>
                </li>
                <li>
                  <Link to="/shows" className="menu-item ancora">
                    Shows
                  </Link>
                </li>
                <li>
                  <Link to="/familia" className="menu-item ancora">
                    Família
                  </Link>
                </li>
              </ul>
            ),
            empresa: (
              <ul className="menu-conteudo centralizar-xy centralizar-x">
                <li>
                  <Link to={"/empresa/eventos"}>Eventos</Link>
                </li>
                <li>
                  <Link to={"/empresa/ingressos"}>Ingressos</Link>
                </li>
                <li>
                  <Link to={"/empresa/vendas"}>Vendas</Link>
                </li>
              </ul>
            ),
          }[usuario]
        }
      </nav>
    </header>
  );
}

export default Cabecalho;
