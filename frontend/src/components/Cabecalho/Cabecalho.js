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
      pathName: "/criar-evento",
      itemName: "Criar Evento",
    },
    {
      pathName: "/criar-ingresso",
      itemName: "Criar Ingresso",
    },
    {
      pathName: "/criar-venda",
      itemName: "Vender",
    },
    {
      pathName: "/vendas",
      itemName: "Minhas Vendas",
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
                  <Link to={"/eventos"}>Eventos</Link>
                </li>
                <li>
                  <Link to={"/ingressos"}>Ingressos</Link>
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
