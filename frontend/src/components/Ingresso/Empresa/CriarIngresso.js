import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ingressoSchema from "./IngressoSchema"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addIngresso } from "../../../redux/ingressosSlice";

import { selectAllEventos } from "../../../redux/eventosSlice";
import Cabecalho from "../../Cabecalho/Cabecalho";
import "../../Botoes/botoes.css";

function CriarIngresso() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const eventos = useSelector(selectAllEventos);
  const [ingressoForm] = useState(ingressoSchema.cast({}));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ingressoSchema),
  
  });

  function checaEnvio(ingresso) {
    dispatch(addIngresso(ingresso));
    navigate("/empresa/ingressos");
  }
  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Criar Ingresso</h2>
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

export default CriarIngresso;
