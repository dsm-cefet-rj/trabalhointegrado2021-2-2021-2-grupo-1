import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editarCompraSchema }from "./CompraSchema";

import { updateCompra, selectCompraById } from "../../redux/comprasSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function EditarCompra() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editarCompraSchema),
  });

  const compra = useSelector((state) => selectCompraById(state, id));

  const [compraForm] = useState(
    editarCompraSchema.cast({
      ...compra,
    })
  );

  function checaEnvio(teste) {
    dispatch(updateCompra({
      ...compra,
      cpf: teste.cpf,
    }));
    navigate("/meus-ingressos");
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Compra</h2>
        <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
          <label>CPF
            <input
              type="text"
              placeholder="000.000.000-00"
              defaultValue={compraForm.cpf}
              className={
                errors.cpf?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("cpf", { required: true })}
            />
            <span>{errors.cpf?.message}</span>
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
