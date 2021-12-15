import "./Ingresso.css";

import CabecalhoEmpresa from "../Cabecalho/CabecalhoEmpresa";
import MenuEmpresa from "../Menu/MenuEmpresa";

function Listar_Ingresso() {
  return (
    <>
      <header>
        <CabecalhoEmpresa />
        <MenuEmpresa />
      </header>
      <main className="centralizar-xy">
        <div className="ingressos-criados-container">
          <div>
            <h3>Ingresso do Rock in Rio - Dia 3</h3>
            <a className="ancora" href="#">Editar</a>
          </div>
          <div>
            <h3>Ingresso do Rock in Rio - Dia 4</h3>
            <a className="ancora" href="#">Editar</a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Listar_Ingresso;
