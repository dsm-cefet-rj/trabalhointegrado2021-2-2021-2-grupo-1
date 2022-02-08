import { useState, useEffect, useRef } from "react";
import { entrarUsuarioSchema, criarUsuarioSchema } from "./ModalSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./modal.css";

function Modal() {
  const [tipoModal, setTipoModal] = useState("");
  const [modalAtivo, setModalAtivo] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const entrarUsuario = useForm({
    resolver: yupResolver(entrarUsuarioSchema),
  });
  const criarUsuario = useForm({
    resolver: yupResolver(criarUsuarioSchema),
  });

  function monitoraClique(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setTipoModal("");
      setModalAtivo(false);
    } else if (
      e.target.id === "entrar-empresa" ||
      e.target.id === "entrar-cliente" ||
      e.target.id === "criar-empresa" ||
      e.target.id === "criar-cliente"
    ) {
      if (e.target.id === "entrar-empresa") {
        setTipoModal("entrar-empresa");
      } else if (e.target.id === "entrar-cliente") {
        setTipoModal("entrar-cliente");
      } else if (e.target.id === "criar-empresa") {
        setTipoModal("criar-empresa");
      } else if (e.target.id === "criar-empresa") {
        setTipoModal("criar-empresa");
      } else if (e.target.id === "criar-cliente") {
        setTipoModal("criar-cliente");
      }
      setModalAtivo(true);
    }
  }

  useEffect(() => {
    document.addEventListener("click", monitoraClique);
    return () => {
      document.removeEventListener("click", monitoraClique);
    };
  });

  function ativaModal() {
    setModalAtivo(!modalAtivo);
  }

  function login(user) {
    const userLogin = {
      username: user.email,
      password: user.password,
    }

    const url = "http://localhost:3001/usuarios/login";
    axios.post(url, userLogin).then(() => {
      navigate("/empresa/eventos");
    }).catch(err => console.log(err));
  }

  function signup(user) {
    const userSignup = {
      ...user,
      tipo: "empresa"
    }

    const url = "http://localhost:3001/usuarios/signup";
    axios.post(url, userSignup).then(() => {
      ativaModal();
    }).catch(err => console.log(err));
  }

  return (
    <>
      {modalAtivo && (
        <div className="modal">
          <div className="conteudo-do-modal" ref={ref}>
            <span className="fechar-modal" onClick={ativaModal}>
              &times;
            </span>
            <div className="entradas-container">
              {tipoModal === "entrar-empresa" ? (
                <div className="centralizar-xy centralizar-y">
                  <h2 className="subtitulo">Entrar Empresa</h2>
                  <form className="formulario" onSubmit={entrarUsuario.handleSubmit(login)}>
                    <label>
                      Email
                      <input
                        type="text"
                        {...entrarUsuario.register("email", { required: true })}
                      />
                      <span>{entrarUsuario.formState.errors.email?.message}</span>
                    </label>
                    <label>
                      Senha
                      <input
                        type="text"
                        {...entrarUsuario.register("password", { required: true })}
                      />
                      <span>{entrarUsuario.formState.errors.password?.message}</span>
                    </label>
                    <div className="botoes-container">
                      <input
                        type="submit"
                        value="Entrar"
                        className="botao botao-sucesso"
                      />
                    </div>
                  </form>
                </div>
              ) : (tipoModal === "entrar-cliente") ? (
                <div>entrar-cliente</div>
              )
                : (tipoModal === "criar-empresa") ? (
                  <div className="centralizar-xy centralizar-y">
                    <h2 className="subtitulo">Criar Empresa</h2>
                    <form className="formulario" onSubmit={criarUsuario.handleSubmit(signup)}>
                      <label>
                        Nome
                        <input
                          type="text"
                          {...criarUsuario.register("username", { required: true })}
                        />
                        <span>{criarUsuario.formState.errors.username?.message}</span>
                      </label>
                      <label>
                        Email
                        <input
                          type="text"
                          {...criarUsuario.register("email", { required: true })}
                        />
                        <span>{criarUsuario.formState.errors.email?.message}</span>
                      </label>
                      <label>
                        Senha
                        <input
                          type="text"
                          {...criarUsuario.register("password", { required: true })}
                        />
                        <span>{criarUsuario.formState.errors.password?.message}</span>
                      </label>
                      <div className="botoes-container">
                        <input
                          type="submit"
                          value="Criar"
                          className="botao botao-sucesso"
                        />
                      </div>
                    </form>
                  </div>
                ) :
                  (tipoModal === "criar-cliente") && (
                    <div>criar-cliente</div>
                  )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
