
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const usuarioId = useSelector(state => state.usuarios.entities[state.usuarios.ids[0]]?.id) || JSON.parse(localStorage.getItem("usuario"))?.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ingressoSchema),
  });

  function checaEnvio(ingresso) {
    dispatch(addIngresso({ ...ingresso, usuarioId }));
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
              className="input-box"
              defaultValue={"1"}
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
              {...register("nome", { required: true })}
            />
            <span>{errors.nome?.message}</span>
          </label>
          <label>
            Horário
            <input
              type="text"
              placeholder="hh:mm"
              className={
                errors.horario?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("horario", { required: true })}
            />
            <span>{errors.horario?.message}</span>
          </label>
          <label>
            Data
            <input
              type="text"
              placeholder="dd/mm/aa"
              className={
                errors.data?.message ? "input-box input-box-error" : "input-box"
              }
              {...register("data", { required: true })}
            />
            <span>{errors.data?.message}</span>
          </label>
          <label>
            Dados Adicionais
            <input
              type="text"
              placeholder="Coloque alguma informação sobre o ingresso"
              className={
                errors.descricao?.message ? "input-box input-box-error" : "input-box"
              }
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
