import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Botoes/botoes.css";

import { addVenda } from "../../redux/vendasSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarVenda() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vendas = useSelector((state) => state.vendas);
  const ingressos = useSelector((state) => state.ingressos);

  const maiorId = vendas.reduce((previousValue, currentValue) => {
    return currentValue.id > previousValue ? currentValue.id : previousValue;
  }, 0);
  const vendaId = (Number(maiorId) + Number(1)).toString();

  const [novaVenda, setNovaVenda] = useState({
    id: vendaId,
    ingressoId: "",
    valor: "",
    quantidade: "",
  });

  function checaMudanca(e) {
    setNovaVenda({
      ...novaVenda,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    dispatch(addVenda(novaVenda));
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

export default CriarVenda;
