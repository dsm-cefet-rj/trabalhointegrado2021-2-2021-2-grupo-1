import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./modal.css";

function Modal() {
  const [tipoModal, setTipoModal] = useState("");
  const [modalAtivo, setModalAtivo] = useState(false);
  const ref = useRef(null);

  function monitoraClique(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setModalAtivo(false);
    } else if (
      e.target.id === "possui-conta" ||
      e.target.id === "nao-possui-conta"
    ) {
      if (e.target.id === "possui-conta") {
        setTipoModal("possui-conta");
      } else if (e.target.id === "nao-possui-conta") {
        setTipoModal("nao-possui-conta");
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

  return (
    <>
      {modalAtivo && (
        <div className="modal">
          <div className="conteudo-do-modal" ref={ref}>
            <span className="fechar-modal" onClick={ativaModal}>
              &times;
            </span>
            <div className="entradas-container">
              {tipoModal === "possui-conta" ? (
                <>
                  <div>
                    <h2 className="subtitulo">Entre como Empresa</h2>
                    <form className="formulario">
                      <label>
                        CNPJ
                        <input type="text" className="input-box" />
                      </label>
                      <label>
                        Senha
                        <input type="text" className="input-box" />
                      </label>
                      <div className="botoes-container">
                        <Link to={"/empresa/eventos"} className="botao">Entre</Link>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h2 className="subtitulo">Entre como Cliente</h2>
                    <form className="formulario">
                      <label>
                        CPF
                        <input type="text" className="input-box" />
                      </label>
                      <label>
                        Senha
                        <input type="text" className="input-box" />
                      </label>
                      <div className="botoes-container">
                        <Link to={"/home"} className="botao">Entre</Link>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                tipoModal === "nao-possui-conta" && (
                  <>
                    <div>
                      <h2 className="subtitulo">Crie Conta de Empresa</h2>
                      <form className="formulario">
                        <label>
                          CNPJ
                          <input type="text" className="input-box" />
                        </label>
                        <label>
                          Email
                          <input type="text" className="input-box" />
                        </label>
                        <label>
                          Senha
                          <input type="text" className="input-box" />
                        </label>
                        <div className="botoes-container">
                          <button className="botao">Entre</button>
                        </div>
                      </form>
                    </div>
                    <div>
                      <h2 className="subtitulo">Crie Conta de Cliente</h2>
                      <form className="formulario">
                        <label>
                          CPF
                          <input type="text" className="input-box" />
                        </label>
                        <label>
                          Email
                          <input type="text" className="input-box" />
                        </label>
                        <label>
                          Senha
                          <input type="text" className="input-box" />
                        </label>
                        <div className="botoes-container">
                          <button className="botao">Entre</button>
                        </div>
                      </form>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
