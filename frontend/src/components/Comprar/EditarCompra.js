import Cabecalho from "../Cabecalho/Cabecalho";
import Botao from "../Botoes/Botoes";

function EditarCompra() {
  const botao = [
    {
      nome: "Editar",
      url: "/editar-compra",
    },
  ];

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
          />
          <Botoes botoes={botao} />
        </form>
      </main>
    </>
  );
}

export default EditarCompra;
