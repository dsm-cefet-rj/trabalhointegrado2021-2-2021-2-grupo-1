import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import eventoSchema from "./EventoSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "../Botoes/botoes.css";

import { addEvento } from "../../redux/eventosSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarEvento() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usuarioId = useSelector(state => state.usuarios.entities[state.usuarios.ids[0]]?.id) || JSON.parse(localStorage.getItem("usuario"))?.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eventoSchema),
  });


  function checaEnvio(evento) {
    console.log(usuarioId);
    dispatch(addEvento({ ...evento, usuarioId }));

    navigate("/empresa/eventos");
  }

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Evento</h2>
        <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
          <label>
            Nome
            <input
              type="text"
              className={
                errors.nome?.message ? "input-box input-box-error" : "input-box"
              }
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
              {...register("endereco", { required: true })}
            />
            <span>{errors.endereco?.message}</span>
          </label>
          <label>
            Local
            <input
              type="text"
              placeholder="Maracanã"
              className={
                errors.local?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("local", { required: true })}
            />
            <span>{errors.local?.message}</span>
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
