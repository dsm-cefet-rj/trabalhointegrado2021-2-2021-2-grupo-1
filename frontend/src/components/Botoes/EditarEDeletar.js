import "./botoes.css";

function EditarEDeletar() {
  return (
    <div className="botoes-container">
      <button className="botao">Editar</button>
      <button className="botao botao-perigo">Deletar</button>
    </div>
  );
}

export default EditarEDeletar;
