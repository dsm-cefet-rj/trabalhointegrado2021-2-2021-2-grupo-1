import "./comprar.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";
import Botao from "../Botoes/Botoes";

function Comprar() {
  const botao = [
    {
      nome: "Comprar",
      url: "/",
    }
  ]

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <>
          <h2 className="subtitulo">
            Meu carrinho <span>1</span>
          </h2>
          <Ingresso />
          <p className="total-compra">Total: R$ 100,00</p>
        </>
        <h2 className="subtitulo">Finalizar Compra</h2>
        <form className="formulario">
          CPF
          <input
            type="number"
            placeholder="32878887873"
            className="input-box"
          />
          <label>
            Nome do Cartão de Crédito
            <input
              type="text"
              placeholder="Alfredo Alberto de Souza"
              className="input-box"
            />
          </label>
          <label>
            Número do Cartão de Crédito
            <input
              type="number"
              placeholder="3287888787382188"
              className="input-box"
            />
          </label>
          <label>
            Data de Validade
            <input
              type="month"
              placeholder="março de 2024"
              className="input-box"
            />
          </label>
          <label>
            Código de Segurança
            <input type="number" placeholder="999" className="input-box" />
          </label>
          <Botao botoes={botao} />
        </form>
      </main>
    </>
  );
}

export default Comprar;
