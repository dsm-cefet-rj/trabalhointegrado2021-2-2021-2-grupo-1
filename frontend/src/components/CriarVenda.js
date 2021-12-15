import "./Venda.css";

import CabecalhoEmpresa from "../Cabecalho/CabecalhoEmpresa";
import MenuEmpresa from "../Menu/MenuEmpresa";
import EditarECriar from "../Botoes/EditarECriar";

function CriarVenda() {
  return (
    <>
      <header>
        <CabecalhoEmpresa />
        <MenuEmpresa />
      </header>
      <main>
        <h1 className="titulo">Revenda seus Ingressos</h1>
        <h2 className="subtitulo">Preencha com as Informações Necessárias</h2>
        <hr/>
        <form className="checkout-form">
            <p>Evento</p>
            <select className="primary-content-input">
                <option>Fla x Flu (RJ)</option>
                <option>Lolapalooza Dia 2 (SP)</option>
                <option>Show Zeca Pagods (MG)</option>
                <option>Teatro Estadual (ES)</option>
            </select>
            <hr/>
            <p>Quantidade de Ingressos</p>
            <p>
              <input type="number" className="primary-content-input" placeholder="2"/>
            </p>
            <hr/>
            <p>Valor de Cada Ingresso</p>
            <p>
              <input type="number" placeholder="R$ 100" className="primary-content-input"/>
            </p>
        </form>
        <br/>
        <div className="submit container-botao">
          <button className = "botao">
            Cancelar
          </button>
          <button className = "botao">
            Finalizar
          </button>
        </div>
        <EditarECriar />
      </main>
    </>
  );
}

export default CriarVenda;
