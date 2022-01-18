import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ComprarSchema from "./ComprarSchema";

import {
  editCompra,
} from "../../redux/ComprarSlice";

import Cabecalho from "../Cabecalho/Cabecalho";
function EditarCompra() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const compra = useSelector((state) =>
    state.comprar.compras.find((compra) => compra.id === id)
  );

const [compraForm] = useState(
    comprarSchema.cast({
      ...comprar,
    })
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(compraSchema),
  });

function checaEnvio(compra) {
    dispatch(
      editCompra({
        ...Comprar,
        id,
      })
    );
    navigate("/meus-ingressos");
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Compra</h2>
        <form className="formulario" onSubmit={checaEnvio}>
          <label>CPF do Ingresso
            <input
              type="number"
              className="input-box"
              placeholder="13713799737"
              name="cpf"
              defaultValue={compra.cpf}
               {...register("cpf", { required: true })}
            />
          </label>
          <div className="botoes-container">
            <input
              type="submit"
              value="Editar"
              className="botao botao-sucesso"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default EditarCompra;
