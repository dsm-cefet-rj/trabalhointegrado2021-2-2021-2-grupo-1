import Cabecalho from "../Cabecalho/Cabecalho";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { editVenda, deleteVenda } from "../../redux/vendasSlice";

function EditarVenda() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const venda = useSelector((state) =>
    state.vendas.find((venda) => venda.id === id)
  );
  const ingressos = useSelector((state) => state.ingressos);

  const [vendaEditada, setVendaEditada] = useState({
    id: venda.id,
    ingressoId: venda.ingressoId,
    valor: venda.valor,
    quantidade: venda.quantidade,
  });

  function checaMudanca(e) {
    setVendaEditada({
      ...vendaEditada,
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
          <label>
            Nome do Ingresso
            <select
              className="input-box"
              name="ingressoId"
              onChange={checaMudanca}
            >
              {ingressos.map((ingresso) => (
                <option key={ingresso.id} value={ingresso.id}>
                  {ingresso.nome}
                </option>
              ))}
            </select>
          </label>
          <label>
            Valor do Ingresso
            <input
              type="number"
              placeholder="100"
              className="input-box"
              name="valor"
              defaultValue={venda.valor}
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
              defaultValue={venda.quantidade}
            />
          </label>
          <div className="botoes-container">
            <input type="submit" value="Editar" className="botao" />
            <input
              type="button"
              value="Deletar"
              className="botao botao-perigo"
              onClick={deletaVenda}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default EditarVenda;
