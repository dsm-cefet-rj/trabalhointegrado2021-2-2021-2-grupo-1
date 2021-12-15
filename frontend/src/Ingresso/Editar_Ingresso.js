import "./Ingresso.css";

import CabecalhoEmpresa from "../Cabecalho/CabecalhoEmpresa";
import MenuEmpresa from "../Menu/MenuEmpresa";
import EditarEDeletar from "../Botoes/EditarEDeletar";

function Editar_Ingresso(){
    return (
        <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <header>
        <CabecalhoEmpresa />
        <MenuEmpresa />
      </header>
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Ingresso</h2>
        <form class="formulario">
          <label>Selecione um Evento</label>
          <select className="input-box" placeholder="Evento">
            <option>Evento1</option>
            <option>Evento2</option>
          </select>
          <label>Nome do Ingresso</label>
          <input
            type="text"
            className="input-box"
            placeholder="Rock in Rio - 3º Dia"
          />
          <label>Quantidade de Ingressos</label>
          <input type="number" placeholder="1000" className="input-box" />
          <label>Valor Sugerido de cada Ingresso</label>
          <input type="number" placeholder="R$500" className="input-box" />
          <label>Dados Adicionais</label>
          <input
            type="text"
            placeholder="Coloque alguma informação sobre o ingresso"
            className="input-box"
          />
          <EditarEDeletar />
        </form>
      </main>
    </>
  );
}

export default Editar_Ingresso;