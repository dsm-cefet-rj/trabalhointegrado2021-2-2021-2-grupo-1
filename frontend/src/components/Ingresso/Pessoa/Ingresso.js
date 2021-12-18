import "../ingresso.css";

import Botoes from "../../Botoes/Botoes";

function Ingresso({ botoes }) {
  return (
    <div className="ingresso-container">
      <h2 className="subtitulo evento-nome">Jogo das Estrelas - 2021</h2>
      <img
        src="https://www.lance.com.br/files/article_main/uploads/2020/06/21/5eefd5243192a.jpeg"
        alt="imagem do ingresso"
        className="ingresso-imagem"
      />
      <div className="ingresso-detalhe">
        <ul>
          <li className="ingresso-detalhe-item">Cadeira Leste - Lugar 430</li>
          <li className="ingresso-detalhe-item">
            Av. Pres. Castelo Branco, Maracanã, Rio de Janeiro - RJ, 20271-130
          </li>
          <li className="ingresso-detalhe-item">10/12/2021</li>
          <li className="ingresso-detalhe-item">R$ 100,00</li>
        </ul>
      </div>
      {botoes ? <Botoes botoes={botoes} /> : null}
    </div>
  );
}

export default Ingresso;
