import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editIngresso, deleteIngresso } from "../../../redux/ingressosSlice";

import "../ingresso.css";
import Cabecalho from "../../Cabecalho/Cabecalho";

function EditarIngresso() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const ingresso = useSelector((state) => state.ingressos.find((e) => e.id === id));

  const [ingressoEditado, setIngressoEditado] = useState({
    id: ingresso.id,
    nomeEvento: ingresso.nomeEvento,
    nome: ingresso.nome,
    descricao: ingresso.descricao,
  });

  function checaMudanca(e) {
    setIngressoEditado({
      ...ingressoEditado,
      [e.target.name]: e.target.value,
    });
  }

  function checaEnvio(e) {
    dispatch(editIngresso(ingressoEditado));
    e.preventDefault();
    navigate("/empresa/ingressos");
  }

  function deletaIngresso(e) {
    dispatch(deleteIngresso(ingresso.id));
    e.preventDefault();
    navigate("/empresa/ingressos");
  }

  return (
    <>
      <Cabecalho usuario = {"empresa"} />
      <main className = "centralizar-xy centralizar-y">
        <h2 className = "subtitulo"> Editar Ingresso </h2>
        <form className = "formulario" onSubmit = {checaEnvio}>
          <label> Selecione um Evento </label>
          <select className = "input-box" name = "nomeEvento"
            defaultValue = {ingresso.nomeEvento} onChange = {checaMudanca} required>
            <option> Evento1 </option>
            <option> Evento2 </option>
          </select>
          <label> Nome do Ingresso </label>
          <input
            type = "text"
            className = "input-box"
            name = "nome"
            defaultValue = {ingresso.nome}
            onChange = {checaMudanca}
          />
          <label> Dados Adicionais </label>
          <input
            type = "text"
            className = "input-box"
            name = "nome"
            defaultValue = {ingresso.nome}
            onChange = {checaMudanca}
          />
          <div className="botoes-container">
            <input type = "submit" value = "Editar" className = "botao" />
            <input
              type = "button"
              value = "Deletar"
              className = "botao botao-perigo"
              onClick = {deletaIngresso}
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default EditarIngresso;
