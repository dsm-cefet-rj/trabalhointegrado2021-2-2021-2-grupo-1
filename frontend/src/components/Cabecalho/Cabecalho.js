import { Link, useLocation } from "react-router-dom";

import "./cabecalho.css";

import MenuFlutuante from "../MenuFlutuante/MenuFlutuante";

function Cabecalho({ usuario }) {
  const location = useLocation();

  const menuListaPessoa = [
    {
      pathName: "/meus-ingressos",
      itemName: "Meus Ingressos",
    },
    {
      pathName: "/carrinho",
      itemName: "Meu Carrinho",
    },
    {
      pathName: "/revendas",
      itemName: "Revendas",
    },
    {
      pathName: "/",
      itemName: "Sair",
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
    {
      pathName: "/",
      itemName: "Sair",
    },
  ];

  const menuHome = [
    {
      pathName: "/",
      itemName: "Entrar Empresa",
    },
    {
      pathName: "/",
      itemName: "Entrar Cliente",
    },
    {
      pathName: "/",
      itemName: "Criar Empresa",
    },
    {
      pathName: "/",
      itemName: "Criar Cliente",
    },
  ];

  return (
    <header>
      <div className="cabecalho-container centralizar-xy">
        {location.pathname.includes("/empresa") ? (
          <Link to={"/empresa/eventos"}>
            <h1 className="titulo">Meu Ingresso</h1>
          </Link>
        ) : (
          <Link to={"/home"}>
            <h1 className="titulo">Meu Ingresso</h1>
          </Link>
        )}
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
              home: <MenuFlutuante nomeMenu={"Entre"} lista={menuHome} />,
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
