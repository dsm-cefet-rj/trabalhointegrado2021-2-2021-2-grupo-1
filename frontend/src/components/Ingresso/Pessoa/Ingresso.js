import "../ingresso.css";

import Botoes from "../../Botoes/Botoes";
import { useNavigate } from "react-router-dom";
import "../../Botoes/botoes.css";

function Ingresso({ botoes, comprar, ingressos, meuCarrinho, setMeuCarrinho }) {
  const navigate = useNavigate();

  function colocaIngressoNoCarrinho() {
    setMeuCarrinho([...meuCarrinho, ingressos]);
    navigate("/carrinho");
  }

  return (
    <div className="ingresso-container">
      <h2 className="subtitulo evento-nome">{ingressos.nomeEvento}</h2>
      <img
        src="https://www.lance.com.br/files/article_main/uploads/2020/06/21/5eefd5243192a.jpeg"
        alt="imagem do ingresso"
        className="ingresso-imagem"
      />
      <div className="ingresso-detalhe">
        <ul>
          <li className="ingresso-detalhe-item">{ingressos.lugarIngresso}</li>
          <li className="ingresso-detalhe-item">
            Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ, 20271-130
          </li>
          <li className="ingresso-detalhe-item">10/12/2021</li>
          <li className="ingresso-detalhe-item">
            R$ {ingressos.precoIngresso}
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Ingresso;
