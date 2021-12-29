import Cabecalho from "../Cabecalho/Cabecalho";
import Botoes from "../Botoes/Botoes";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { editVenda, deleteVenda } from "../../redux/vendasSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function EditarVenda() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const venda = useSelector((state) => state.vendas.find((e) => e.id === id));

  const [vendaEditada, setVendaEditada] = useState({
    nomeEvento: venda.nome,
    idIngresso: venda.id,
    genero: venda.genero,
    valor: venda.valor,
    quantidade: venda.quantidade,
  });

  function checaMudanca(e) {
    setVendaEditada({
      ...VendaEditada,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    dispatch(editVenda(vendaEditada));
    e.preventDefault();
    navigate("/empresa/vendas");
  }

  function deletaVenda(e) {
    dispatch(deleteVenda(venda.id));
    e.preventDefault();
    navigate("/empresa/vendas");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Venda</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>Nome do Evento</label>
          <input
            type="text"
            name="nomeEvento"
            className="input-box"
            placeholder="Rock in Rio"
            onChange={checaMudanca}
          />
          <label>
            Identificação do Ingresso
            <select
              className="input-box"
              name="idIngresso"
              onChange={checaMudanca}
            >
              <option>Rock in Rio 2021 - Dia 5</option>
              <option>Rock in Rio 2021 - Dia 7</option>
            </select>
          </label>
          <label>
            Genero
            <select className="input-box" name="genero" onChange={checaMudanca}>
              <option>Esportes</option>
              <option>Shows</option>
              <option>Família</option>
            </select>
          </label>
          <label>
            Valor do Ingresso
            <input
              type="number"
              placeholder="100"
              className="input-box"
              name="valor"
              onChange={checaMudanca}
            />
          </label>
          <label>
            Quantidade de Ingressos
            <input
              type="number"
              placeholder="2"
              className="input-box"
              name="quantidade"
              onChange={checaMudanca}
            />
          </label>
          <div className="botoes-container">
            <input
              type="submit"
              value="Criar"
              className="botao botao-sucesso"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default EditarVenda;
