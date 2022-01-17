import Cabecalho from "../Cabecalho/Cabecalho";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import vendaSchema from "./VendaSchema";

import {
  selectVendaById,
  updateVenda,
  deleteVenda,
} from "../../redux/VendasSlice";

function EditarVenda() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const venda = useSelector((state) =>
    state.vendas.find((venda) => venda.id === id)
  );
  const ingressos = useSelector((state) => state.ingressos);

const [vendaForm] = useState(
    vendaSchema.cast({
      ...venda,
    })
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(vendaSchema),
  });

  function checaEnvio(venda) {
    dispatch(
      updateVenda({
        ...Venda,
        id,
      })
    );
    navigate("/empresa/vendass");
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
              {...register("nome", { required: true })}
            />
              <span>{errors.nome?.message}</span>
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
              {...register("valor", { required: true })}
            />
              <span>{errors.valor?.message}</span>
          </label>
          <label>
            Quantidade de Ingressos
            <input
              type="number"
              placeholder="2"
              className="input-box"
              name="quantidade"
              defaultValue={venda.quantidade}
            {...register("quantidade", { required: true })}
            >
              <span>{errors.quantidade?.message}</span>
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
