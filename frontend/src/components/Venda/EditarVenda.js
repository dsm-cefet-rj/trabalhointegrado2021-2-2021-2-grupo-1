import Cabecalho from "../Cabecalho/Cabecalho";
import Botoes from "../Botoes/Botoes";

function EditarVenda() {
  const botoes = [
    {
      nome: "Editar",
      url: "/editar-venda",
    },
    {
      nome: "Remover",
      url: "/",
    },
  ];

  return (
    <>
      <Cabecalho usuario={"empresa"} />
      <main className="centralizar-xy centralizar-y">
        <h2 className="subtitulo">Editar Venda</h2>
        <form className="formulario">
          <label>
            Valor do Ingresso
            <input type="number" placeholder="100" className="input-box" />
          </label>
          <label>
            Quantidade de Ingressos
            <input type="number" placeholder="2" className="input-box" />
          </label>
          <Botoes botoes={botoes} />
        </form>
      </main>
    </>
  );
}

export default EditarVenda;
