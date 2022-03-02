import { useState, useEffect, useRef } from "react";
import { entrarUsuarioSchema, criarUsuarioSchema } from "./UsuarioSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUsuario } from "../../redux/usuariosSlice";

import "./usuario.css";

function Modal() {
  const [tipoModal, setTipoModal] = useState("");
  const [modalAtivo, setModalAtivo] = useState(false);
  const [signupErro, setSignupErro] = useState("");
  const usuarioLogin = useSelector(state => state.usuarios);

  const ref = useRef(null);
  const dispatch = useDispatch();
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
      e.target.id === "entrar" ||
      e.target.id === "criar-conta"
    ) {
      if (e.target.id === "entrar") {
        setTipoModal("entrar");
      } else if (e.target.id === "criar-conta") {
        setTipoModal("criar-conta");
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

  useEffect(() => {
    const usuarioLogadoTipo = usuarioLogin.entities[usuarioLogin.ids[0]]?.user.tipo;

    if (usuarioLogin.status === "login") {
      if (usuarioLogadoTipo === "empresa") {
        navigate("/empresa/eventos")
      } else if (usuarioLogadoTipo === "cliente") {
        navigate("/home")
      }
    }
  }, [navigate, usuarioLogin]);

  function ativaModal() {
    setModalAtivo(!modalAtivo);
  }

  const login = (user) => {
    dispatch(loginUsuario(user));
  }

  const signup = async (user) => {
    const url = "http://localhost:3001/usuarios/signup";

    try {
      await axios.post(url, user);
      login({
        username: user.username,
        password: user.password,
      })
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return setSignupErro(err.response.data.error)
    }
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
              {tipoModal === "entrar" ? (
                <div className="centralizar-xy centralizar-y">
                  <h2 className="subtitulo">Entrar</h2>
                  <form className="formulario" onSubmit={entrarUsuario.handleSubmit(login)}>
                    <label>
                      Username
                      <input
                        className={
                          entrarUsuario.formState.errors.username?.message ? "input-box input-box-error" : "input-box"
                        }
                        type="text"
                        {...entrarUsuario.register("username", { required: true })}
                      />
                      <span>{entrarUsuario.formState.errors.username?.message}</span>
                    </label>
                    <label>
                      Senha
                      <input
                        className={
                          entrarUsuario.formState.errors.password?.message ? "input-box input-box-error" : "input-box"
                        }
                        type="password"
                        {...entrarUsuario.register("password", { required: true })}
                      />
                      <span>{entrarUsuario.formState.errors.password?.message}</span>
                    </label>
                    <span style={{ color: "red", marginTop: "10px", fontSize: "0.8rem", textAlign: "center", display: "block" }}>{usuarioLogin.error && usuarioLogin.error}</span>
                    <div className="botoes-container">
                      <input
                        type="submit"
                        value="Entrar"
                        className="botao botao-sucesso"
                      />
                    </div>
                  </form>
                </div>
              ) : (tipoModal === "criar-conta") && (
                <div className="centralizar-xy centralizar-y">
                  <h2 className="subtitulo">Criar Conta</h2>
                  <form className="formulario" onSubmit={criarUsuario.handleSubmit(signup)}>
                    <label>
                      Username
                      <input
                        className={
                          criarUsuario.formState.errors.username?.message ? "input-box input-box-error" : "input-box"
                        }
                        type="text"
                        {...criarUsuario.register("username", { required: true })}
                      />
                      <span>{criarUsuario.formState.errors.username?.message}</span>
                    </label>
                    <label>
                      Senha
                      <input
                        className={
                          criarUsuario.formState.errors.password?.message ? "input-box input-box-error" : "input-box"
                        }
                        type="password"
                        {...criarUsuario.register("password", { required: true })}
                      />
                      <span>{criarUsuario.formState.errors.password?.message}</span>
                    </label>
                    <label>
                      Tipo de usuário
                      <select className={
                        criarUsuario.formState.errors.tipo?.message ? "input-box input-box-error" : "input-box"
                      } {...criarUsuario.register("tipo", { required: true })} >
                        <option value="cliente">Cliente</option>
                        <option value="empresa">Empresa</option>
                      </select>
                      <span>{criarUsuario.formState.errors.nome?.message}</span>
                    </label>
                    <span style={{ color: "red", marginTop: "10px", fontSize: "0.8rem", textAlign: "center", display: "block" }}>{signupErro && signupErro}</span>
                    <div className="botoes-container">
                      <input
                        type="submit"
                        value="Criar"
                        className="botao botao-sucesso"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
