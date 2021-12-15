import './Comprar.css';
import Evento from "./Event";
import Botao from "./Botoes/BotComprar";
import Menu from "./Menu/MenuPessoa";
import Cabecalho from "./Cabecalho/CabecalhoPessoa"

function Comprar() {
  return (
   <>
   <body>
    <header>
      <Cabecalho/>
      <Menu/>
    </header>
    <div>
      <Evento/>
    </div>
    <div className="centro">
      <h2 className="titulo">Finalizar Compra</h2>
      <form className="checkout">
        <p className="subt">Nome do Cartão de Crédito</p>
        <input type="text" className="CartaoCompra"/>
        <p className="subt">Número do Cartão de Crédito</p>
        <input type="number" className="NumeroCartao"/>
        <p className="subt">Data de Validade</p>
        <input type="month" className="DtvCartao"/>
        <p className="subt">Código de Segurança</p>
        <input type="number"className="CodCartao"/>
        <p></p>
      </form>
      <form className="butao">
        <Botao/>
      </form>
    </div>
  </body>
  </>
  );
}

export default Comprar;