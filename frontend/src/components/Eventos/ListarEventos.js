import "./eventos.css";

import CabecalhoEmpresa from "../../components/Cabecalho/CabecalhoEmpresa";
import MenuEmpresa from "../../components/Menu/MenuEmpresa";

function ListaEventos() {
  return (
    <>
      <header>
        <CabecalhoEmpresa />
        <MenuEmpresa />
      </header>
      <main className="centralizar-xy">
        <div className="eventos-criados-container">
          <div>
            <h3>Rock in Rio 2022</h3>
            <a className="ancora" href="#">Editar</a>
          </div>
          <div>
            <h3>Rock in Rio 2020</h3>
            <a className="ancora" href="#">Editar</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default ListaEventos;
