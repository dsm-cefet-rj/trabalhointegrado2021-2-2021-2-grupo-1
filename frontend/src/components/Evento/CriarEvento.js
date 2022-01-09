import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import eventoSchema from "./EventoSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "../Botoes/botoes.css";

import { addEvento } from "../../redux/eventosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarEvento() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [eventoForm] = useState(eventoSchema.cast({}));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eventoSchema),
  });

  function checaEnvio(evento) {
    dispatch(addEvento(evento));
    navigate("/empresa/eventos");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Evento</h2>
        <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
          <label>
            Nome do Evento
            <input
              type="text"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              defaultValue={eventoForm.nome}
              placeholder="Rock in Rio"
              {...register("nome", { required: true })}
            />
            <span>{errors.nome?.message}</span>
          </label>
          <label>
            Gênero
            <select
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              defaultValue={eventoForm.genero}
              {...register("genero", { required: true })}
            >
              <option value="esporte">Esportes</option>
              <option value="musica">Música</option>
              <option value="familia">Família</option>
            </select>
            <span>{errors.genero?.message}</span>
          </label>
          <label>
            Endereço
            <input
              type="text"
              placeholder="Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ, 20271-130"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              defaultValue={eventoForm.endereco}
              {...register("endereco", { required: true })}
            />
            <span>{errors.endereco?.message}</span>
          </label>
          <label>
            Começo Do Evento
            <input
              type="datetime-local"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              name="dataInicio"
              defaultValue={eventoForm.dataInicio}
              {...register("dataInicio", { required: true })}
            />
            <span>{errors.dataInicio?.message}</span>
          </label>
          <label>
            Finalização do Evento
            <input
              type="datetime-local"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
              name="dataFim"
              defaultValue={eventoForm.dataFim}
              {...register("dataFim", { required: true })}
            />
            <span>{errors.dataFim?.message}</span>
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

export default CriarEvento;
