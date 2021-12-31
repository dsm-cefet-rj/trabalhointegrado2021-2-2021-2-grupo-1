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
                  <Link to="/esporte" className="menu-item ancora">
                    Esporte
                  </Link>
                </li>
                <li>
                  <Link to="/musica" className="menu-item ancora">
                    Música
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
                  <Link to={"/empresa/eventos"} className="menu-item ancora">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link to={"/empresa/ingressos"} className="menu-item ancora">
                    Ingressos
                  </Link>
                </li>
                <li>
                  <Link to={"/empresa/vendas"} className="menu-item ancora">
                    Vendas
                  </Link>
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
