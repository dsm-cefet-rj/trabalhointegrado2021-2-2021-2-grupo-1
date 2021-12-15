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
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Venda</h2>
        <form className="formulario">
          <label>Nome do Evento</label>
          <input type="text" className="input-box" placeholder="Rock in Rio" />
          <label>
            Genero
            <select className="input-box">
              <option>Esportes</option>
              <option>Shows</option>
              <option>Família</option>
            </select>
          </label>
          <label>
            Estado
            <select className="input-box">
              <option>RJ</option>
              <option>SP</option>
              <option>MG</option>
              <option>ES</option>
            </select>
          </label>
          <label>
            Cidade
            <input
              type="text"
              placeholder="Rio de Janeiro"
              className="input-box"
            />
          </label>
          <label>
            CEP
            <input type="number" placeholder="20270090" className="input-box" />
          </label>
          <label>
            Valor do Ingresso
            <input type="number" placeholder="R$ 100" className="primary-content-input"/>
          </label>
          <label>
            Quantidade de Ingressos
            <input type="number" placeholder="2" className="primary-content-input"/>
          </label>
          <EditarECriar />
        </form>
      </main>
    </>
  );
}


export default CriarVenda;
