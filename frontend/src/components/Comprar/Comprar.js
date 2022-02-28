import "./comprar.css";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { compraSchema } from "./CompraSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { addCompra, removeTudoMeuCarrinho } from "../../redux/comprasSlice";
import { updateVenda } from "../../redux/vendasSlice";

import Cabecalho from "../Cabecalho/Cabecalho";
import Ingresso from "../Ingresso/Pessoa/Ingresso";

function Comprar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const meuCarrinho = useSelector((state) => state.compras.meuCarrinho);
  const usuarioId = useSelector(state => state.usuarios.entities[state.usuarios.ids[0]]?.id) || JSON.parse(localStorage.getItem("usuario"))?.id;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(compraSchema),
  });

  const valorTotalCarrinho = meuCarrinho.reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue.valor;
    },
    0
  );

  function checaEnvio(compra) {
    meuCarrinho.forEach((e) => {
      dispatch(
        addCompra({
          cpf: compra.cpf,
          vendaId: e.id,
          revenda: false,
          usuarioId
        })
      );
      dispatch(
        updateVenda({
          ...e,
          quantidade: e.quantidade - 1,
        })
      );
    });
    navigate("/meus-ingressos");
    dispatch(removeTudoMeuCarrinho());
  }

  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <>
          <h2 className="subtitulo">
            Meu carrinho <span>{meuCarrinho.length > 0 && meuCarrinho.length}</span>
          </h2>
          {meuCarrinho.length > 0 ? (
            <div className="listagem-container">
              {meuCarrinho.map((carrinho) => (
                <Ingresso
                  tipo={carrinho}
                  vendaMeuCarrinhoOuCompra="carrinho"
                  key={carrinho.id}
                />
              ))}             
            </div>
          ) : (
            <p>Seu carrinho está vazio! :(</p>
          )}
          {meuCarrinho.length > 0 ? <p style={{marginTop: "30px"}}>Total: R$  {valorTotalCarrinho}</p> : null}
        </>
        {meuCarrinho.length > 0 && (
          <>
            <h2 className="subtitulo">Finalizar Compra</h2>
            <form className="formulario" onSubmit={handleSubmit(checaEnvio)}>
              <label>CPF
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className={
                    errors.cpf?.message ? "input-box input-box-error" : "input-box"
                  }
                  {...register("cpf", { required: true })}
                />
                <span>{errors.cpf?.message}</span>
              </label>
              <label>
                Nome do Cartão de Crédito
                <input
                  type="text"
                  placeholder="Alfredo Alberto de Souza"
                  className={
                    errors.nome_do_cartao?.message ? "input-box input-box-error" : "input-box"
                  }
                  {...register("nome_do_cartao", { required: true })}
                />
                <span>{errors.nome_do_cartao?.message}</span>
              </label>
              <label>
                Número do Cartão de Crédito
                <input
                  type="number"
                  placeholder="3287888787382188"
                  className={
                    errors.numero_do_cartao?.message ? "input-box input-box-error" : "input-box"
                  }
                  {...register("numero_do_cartao", { required: true })}
                />
                <span>{errors.numero_do_cartao?.message}</span>
              </label>
              <label>
                Data de Validade
                <input
                  type="text"
                  placeholder="mm/aa"
                  className={
                    errors.data_de_validade?.message ? "input-box input-box-error" : "input-box"
                  }
                  {...register("data_de_validade", { required: true })}
                />
                <span>{errors.data_de_validade?.message}</span>
              </label>
              <label>
                Código de Segurança
                <input
                  type="number"
                  placeholder="000"
                  className={
                    errors.codigo_de_seguranca?.message ? "input-box input-box-error" : "input-box"
                  }
                  {...register("codigo_de_seguranca", { required: true })}
                />
                <span>{errors.codigo_de_seguranca?.message}</span>
              </label>
              <div className="botoes-container">
                <input type="submit" value="Comprar" className="botao" />
              </div>
            </form>
          </>
        )}
      </main>
    </>
  );
}

export default Comprar;
