import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import "../ingresso.css";
import "../../Botoes/botoes.css";

import { selectIngressoById } from "../../../redux/ingressosSlice";
import { selectEventoById } from "../../../redux/eventosSlice";
import {
  addMeuCarrinho,
  removeItemMeuCarrinho,
  deleteCompra,
} from "../../../redux/comprasSlice";
import { selectVendaById, addVenda } from "../../../redux/vendasSlice";

function Ingresso({ tipo, vendaMeuCarrinhoOuCompra }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usuarioId = useSelector(state => state.usuarios.entities[state.usuarios.ids[0]]?.id) || JSON.parse(localStorage.getItem("usuario"))?.id;
  const state = useSelector((state) => {
    if (vendaMeuCarrinhoOuCompra === "venda" || vendaMeuCarrinhoOuCompra === "revenda" ||
      vendaMeuCarrinhoOuCompra === "carrinho") {
      const ingresso = selectIngressoById(state, tipo.ingressoId);
      const evento = selectEventoById(state, ingresso.eventoId);

      return {
        ingresso,
        evento,
      };
    } else if (vendaMeuCarrinhoOuCompra === "compra") {
      const venda = selectVendaById(state, tipo.vendaId);
      const ingresso = selectIngressoById(state, venda.ingressoId);
      const evento = selectEventoById(state, ingresso.eventoId);

      return {
        venda,
        ingresso,
        evento,
      };
    }
  });

  function colocaIngressoNoCarrinho() {
    navigate("/carrinho");
    dispatch(addMeuCarrinho(tipo));
  }

  function tirarIngressoDoCarrinho() {
    dispatch(removeItemMeuCarrinho(tipo.id));
  }

  function revender() {
    dispatch(
      addVenda({
        usuarioId,
        ingressoId: state.venda.ingressoId,
        valor: state.venda.valor - 20,
        revenda: true,
        quantidade: 1,
      })
    );

    dispatch(deleteCompra(tipo.id));
  }

  return (
    <div>
      <h2 className="subtitulo evento-nome">{state.ingresso.nome}</h2>
      <div className="ingresso-detalhe">
        <ul>
          <li><span>Endereço:</span> {state.evento.endereco}</li>
          <li><span>Local:</span> {state.evento.local}</li>
          <li><span>Data:</span> {state.ingresso.data}</li>
          <li>
          <span>Horário:</span> {state.ingresso.horario}
          </li>
          {(vendaMeuCarrinhoOuCompra === "venda" || vendaMeuCarrinhoOuCompra === "revenda") && (
            <li><span>Preço:</span> R$ {tipo.valor}</li>
          )}
          {vendaMeuCarrinhoOuCompra === "venda" && (
            <>
              <li>
                {tipo.quantidade} ingressos restantes
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="botoes-container">
        {vendaMeuCarrinhoOuCompra === "venda" ||
          vendaMeuCarrinhoOuCompra === "revenda" ? (
          <button
            className="botao"
            type="button"
            onClick={colocaIngressoNoCarrinho}
          >
            Comprar
          </button>
        ) : vendaMeuCarrinhoOuCompra === "compra" ? (
          <>
            <Link to={`/meu-ingresso/${tipo.id}`} className="botao">
              Editar
            </Link>
            <Link to={`/comprovante/${tipo.id}`} className="botao">
              Gerar
            </Link>
            <Link to={`/revendas`} className="botao" onClick={revender}>
              Revender
            </Link>
          </>
        ) : (
          vendaMeuCarrinhoOuCompra === "carrinho" && (
            <button
              type="button"
              onClick={tirarIngressoDoCarrinho}
              className="botao botao-perigo"
            >
              Remover
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Ingresso;
