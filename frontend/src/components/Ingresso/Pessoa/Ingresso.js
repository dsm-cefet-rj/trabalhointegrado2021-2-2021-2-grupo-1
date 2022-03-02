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
import { useState, useEffect } from "react";
import axios from "axios";

function Ingresso({ tipo, vendaMeuCarrinhoOuCompra }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [vendedorNome, setVendedorNome] = useState("")
  const usuario = useSelector(state => state.usuarios.entities[state.usuarios.ids[0]]) || JSON.parse(localStorage.getItem("usuario"));
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
        usuarioId: usuario.id,
        ingressoId: state.venda.ingressoId,
        valor: state.venda.valor - 20,
        revenda: true,
        quantidade: 1,
      })
    );

    dispatch(deleteCompra(tipo.id));
  }

  useEffect(() => {
    async function pegueNomeDoVendedor() {
      const url = `http://localhost:3001/usuarios/${tipo.usuarioId}`
      const response = await axios.get(url);
      const data = await response.data;

      setVendedorNome(data);
    }

    pegueNomeDoVendedor();
  }, [tipo])

  return (
    <div>
      {vendedorNome && (
        <>
          <h2 className="subtitulo evento-nome">{state.ingresso.nome}</h2>
          <div className="ingresso-detalhe">
            <ul>
              <li>
                {!["compra", "carrinho"].includes(vendaMeuCarrinhoOuCompra) && (
                  <>
                    <span>{vendaMeuCarrinhoOuCompra === "venda" ? "Vendido" : (
                      vendaMeuCarrinhoOuCompra === "revenda" && "Revendido")} por: </span>
                    {vendedorNome}
                  </>
                )}
              </li>
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
              {vendaMeuCarrinhoOuCompra === "compra" && (
                <>
                  <li>
                    <span>CPF:</span> {tipo.cpf}
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
        </>
      )}
    </div>
  );
}

export default Ingresso;
