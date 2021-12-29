import { useNavigate,useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";

import { editCompra, deleteComprar } from "../../redux/comprarSlice";

import Cabecalho from "../Cabecalho/Cabecalho";
function EditarCompra() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const compra = useSelector((state) => state.comprar.find((e) => e.id === id));
  
  const [ compraEditada, setcompraEditada ] = useState({
    cpfCompra : compra.cpf,
    idCompra : compra.id,
  });
  
  function checaMudanca(e) {
    setcompraEditada({
      ...compraEditada,
      [e.target.name]: e.target.value,
    });
  }
  
  function checaEnvio(e){
    dispatch(editCompra(compraEditada));
    e.preventDefault();
    navigate("/meus-ingressos");
  }
  
  function deletaCompra(e){
    dispatch(deleteComprar(compra.id));
    e.preventDefault();
    navigate("meus-ingressos");
  }
 
  return (
    <>
      <Cabecalho usuario={"pessoa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Compra</h2>
        <form className="formulario">
          <label>CPF do Ingresso</label>
          <input
            type="number"
            className="input-box"
            placeholder="13713799737"
            name: "cpfCompra"
            onChange={checaMudanca}
          />
            <div className=""botoes-container>
            <input
              type = "submit",
              value = "Editar",
              className = "botao botao-sucesso",
            />
            <div/>
        </form>
      </main>
    </>
  );
}

export default EditarCompra;
