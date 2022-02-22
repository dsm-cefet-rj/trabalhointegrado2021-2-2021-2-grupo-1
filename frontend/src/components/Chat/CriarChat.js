import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chatSchema } from "./chatSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import "../Botoes/botoes.css";

import { addchat } from "../../redux/chatSlice";

import Cabecalho from "../Cabecalho/Cabecalho";

function CriarChat() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(chatSchema),
  });


  function checaEnvio(chat) {
    dispatch(addEvento(chat));

    navigate("/empresa/chat");
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

export default CriarChat;
