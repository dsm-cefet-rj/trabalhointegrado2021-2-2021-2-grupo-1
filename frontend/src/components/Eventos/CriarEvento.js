import "./eventos.css";

import CabecalhoEmpresa from "../../components/Cabecalho/CabecalhoEmpresa";
import MenuEmpresa from "../../components/Menu/MenuEmpresa";
import EditarECriar from "../Botoes/EditarECriar";

function EditarEvento() {
  return (
    <>
      <header>
        <CabecalhoEmpresa />
        <MenuEmpresa />
      </header>
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Evento</h2>
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
            Começo Do Evento
            <input type="datetime-local" className="input-box" />
          </label>
          <label>
            Finalização do Evento
            <input type="datetime-local" className="input-box" />
          </label>
          <EditarECriar />
        </form>
      </main>
    </>
  );
}

export default EditarEvento;
