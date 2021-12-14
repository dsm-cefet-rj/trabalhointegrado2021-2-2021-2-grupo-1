import "./Venda.css";

function reVenda() {
  return (
    <>
    <header>
        <div className="centralize-content header-wrapper">
          <h1 className="title">Meu Ingresso</h1>
          <div className="usuario-section">
            <a href="#" className="ancora">Thales</a>
            <div className="carrinho-container">
              <a href="events-cart.html">
                <img src="../img/shopping-cart.png" className="img-cart"></img>
                <span>1</span>
              </a>
            </div>
          </div>
        </div>
        <nav className="menu-container">
          <ul className="centralize-content menu-content">
            <li>
              <a
                href="./sports.html"
                className="menu-item ancora">
                Esportes
              </a>
            </li>
            <li><a href="#" className="menu-item ancora">Shows</a></li>
            <li><a href="#" className="menu-item ancora">Família</a></li>
          </ul>
        </nav>
      </header>
    <main>
        <h1 className="titulo">Cadastre Seus Ingressos para Revenda</h1>
        <h2 className="subtitulo">Preencha com as Informações Necessárias</h2>
        <hr>
        <form className="checkout-form">
            <p>Nome do Ingresso</p>
            <select className="primary-content-input">
                <option>Fla x Flu (RJ)</option>
                <option>Lolapalooza Dia 2 (SP)</option>
                <option>Show Zeca Pagods (MG)</option>
                <option>Teatro Estadual (ES)</option>
            </select></p>
            <hr>
            <p>Quantidade de Ingressos</p>
            <input type="number" className="primary-content-input" placeholder="2">
            <hr>
            <p>Valor de Cada Ingresso</p>
            <p>
            <input type="number" placeholder="R$ 100" className="primary-content-input">
            </p>
        </form><br>
        <div className="submit container-botao">
          <button className = "botao">
            Cancelar
        </button>
        <button className = "botao">
            Finalizar
        </button>
        </div>
    </main>
    </>
  );
}

export default reVenda;