import Cabecalho from "../Cabecalho/Cabecalho";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import vendaSchema from "./VendaSchema";

import { selectAllIngressos } from "../../redux/ingressosSlice";
import {
  selectVendaById,
  updateVenda,
  deleteVenda,
} from "../../redux/vendasSlice";

function EditarVenda() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const venda = useSelector((state) =>
    selectVendaById(state, id)
  );
  const ingressos = useSelector(selectAllIngressos);

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
        ...venda,
        id,
      })
    );
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
        <h2 className="subtitulo">Editar Venda</h2>
        <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
          <label>
            Selecione um Ingresso
            <select
              className="input-box"
              defaultValue={vendaForm.ingressoId}
              {...register("ingressoId", { required: true })}
            >
              {ingressos.map((ingresso) => (
                <option value={ingresso.id} key={ingresso.id}>
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
              defaultValue={vendaForm.valor}
              className={
                errors.valor?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("valor", { required: true })}
            />
            <span>{errors.valor?.message}</span>
          </label>
          <label>
            Quantidade de Ingressos
            <input
              type="number"
              placeholder="10"
              defaultValue={vendaForm.quantidade}
              className={
                errors.quantidade?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("quantidade", { required: true })}
            />
            <span>{errors.quantidade?.message}</span>
          </label>
          <div className="botoes-container">
            <input
              type="submit"
              value="Editar"
              className="botao"
            />
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
