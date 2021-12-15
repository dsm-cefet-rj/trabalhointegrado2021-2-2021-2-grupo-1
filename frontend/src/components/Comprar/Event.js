import './Event.css';

function Event(){
return(
<>
<body>
  <div className="car">
    <h2>Meu Carrinho</h2>
    <span>1</span>
  </div>
  <div className="evento">
  <h2 className="eventoname">Jogo das Estrelas - 2021</h2>
  <img src="https://www.lance.com.br/files/article_main/uploads/2020/06/21/5eefd5243192a.jpeg"
  alt="imagem do evento"
  className="eventoimg"
  />
<p>Total a pagar: R$ 100,00</p>
</div>
</body>
</>
);
}

export default Event;