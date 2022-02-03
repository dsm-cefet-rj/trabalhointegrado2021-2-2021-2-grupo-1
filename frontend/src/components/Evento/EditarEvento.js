import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import eventoSchema from "./EventoSchema";

import {
  selectEventoById,
  updateEvento,
  deleteEvento,
} from "../../redux/eventosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function EditarEvento() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const evento = useSelector((state) => selectEventoById(state, id));

  const [eventoForm] = useState(
    eventoSchema.cast({
      ...evento,
    })
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eventoSchema),
  });

  function checaEnvio(evento) {
    dispatch(
      updateEvento({
        ...evento,
        id,
      })
    );
    navigate("/empresa/eventos");
  }

  function deletaEvento(e) {
    dispatch(deleteEvento(evento.id));
    e.preventDefault();
    navigate("/empresa/eventos");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Evento</h2>
        {evento ? (
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
                  errors.genero?.message ? "input-box input-box-error" : "input-box"
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
                  errors.endereco?.message ? "input-box input-box-error" : "input-box"
                }
                defaultValue={eventoForm.endereco}
                {...register("endereco", { required: true })}
              />
              <span>{errors.endereco?.message}</span>
            </label>
            <label>
              Local
              <input
                type="text"
                placeholder="Maracanã"
                defaultValue={eventoForm.local}
                className={
                  errors.local?.message ? "input-box input-box-error" : "input-box"
                }
                {...register("local", { required: true })}
              />
              <span>{errors.local?.message}</span>
            </label>
            <div className="botoes-container">
              <input type="submit" value="Editar" className="botao" />
              <input
                type="button"
                value="Deletar"
                className="botao botao-perigo"
                onClick={deletaEvento}
              />
            </div>
          </form>
        ): (
          <p>
            Evento não encontrado.
          </p>
        )}
      </main>
    </>
  );
}

export default EditarEvento;
