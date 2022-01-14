import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ingressoSchema from "./IngressoSchema"
import { selectAllEventos } from "../../../redux/eventosSlice";

import "../ingresso.css";

import Cabecalho from "../../Cabecalho/Cabecalho";

import {
  selectIngressoById,
  updateIngresso,
  deleteIngresso,
} from "../../../redux/ingressosSlice";

function EditarIngresso() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const eventos = useSelector(selectAllEventos);
  const ingresso = useSelector((state) =>
   selectIngressoById(state, id));
  const [ingressoForm] = useState(ingressoSchema.cast({...ingresso}));
  const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm({
   resolver: yupResolver(ingressoSchema),
  });

  function checaEnvio(ingresso) {
    dispatch(
      updateIngresso({
        ...ingresso,
        id,
      })
    );
    navigate("/empresa/ingressos");
  }

  function deletaIngresso(e) {
    dispatch(deleteIngresso(ingresso.id));
    e.preventDefault();
    navigate("/empresa/ingressos");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo"> Editar Ingresso </h2>
        <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
        <label>
          Selecione um Evento
          <select
            className={
              errors.nome?.message ? "input-box input-box-error" : "input-box"
            }
            defaultValue={ingressoForm.eventoId}
            {...register("eventoId", { required: true })}
          >
            {eventos.map((evento) => (
              <option value={evento.id} key={evento.id}>
                {evento.nome}
              </option>
            ))}
          </select>
        </label>

          <label>
            Nome do Ingresso
              <input
              type="text"
              placeholder="Rock in Rio - 3º Dia"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              defaultValue={ingressoForm.nome}
              {...register("nome", { required: true })}
            />
            <span>{errors.nome?.message}</span>
          </label>
          <label>
            Dados Adicionais
            <input
              type="text"
              placeholder="Coloque alguma informação sobre o ingresso"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              defaultValue={ingressoForm.descricao}
              {...register("descricao", { required: true })}
            />
            <span>{errors.descricao?.message}</span>
          </label>
          <div className="botoes-container">
            <input type="submit" value="Editar" className="botao" />
            <input
              type="button"
              value="Deletar"
              className="botao botao-perigo"
              onClick={deletaIngresso}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default EditarIngresso;
