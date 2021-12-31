import { useSelector } from "react-redux";

import "../ingresso.css";
import "../../Botoes/botoes.css";

import { useDispatch } from "react-redux";

import { addMeuCarrinho } from "../../../redux/comprarSlice";
import { useNavigate } from "react-router-dom";

function Ingresso({ venda }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ingresso = useSelector((state) =>
    state.ingressos.find((ingresso) => ingresso.id === venda.ingressoId)
  );
  const evento = useSelector((state) =>
    state.eventos.find((evento) => evento.id === ingresso.eventoId)
  );

  function colocaIngressoNoCarrinho() {
    navigate("/carrinho");
    dispatch(addMeuCarrinho(venda));
  }

  return (
    <div className="ingresso-container">
      <h2 className="subtitulo evento-nome">{evento.nome}</h2>
      <img
        src="https://www.lance.com.br/files/article_main/uploads/2020/06/21/5eefd5243192a.jpeg"
        alt="imagem do ingresso"
        className="ingresso-imagem"
      />
      <div className="ingresso-detalhe">
        <ul>
          <li className="ingresso-detalhe-item">{ingresso.nome}</li>
          <li className="ingresso-detalhe-item">{evento.cep}</li>
          <li className="ingresso-detalhe-item">{evento.dataInicio}</li>
          <li className="ingresso-detalhe-item">R$ {venda.valor}</li>
        </ul>
      </div>
      <div className="botoes-container">
        <button
          className="botao"
          type="button"
          onClick={colocaIngressoNoCarrinho}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Ingresso;
