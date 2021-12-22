import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ListarEventos from "./components/Evento/ListarEventos";
import EditarEvento from "./components/Evento/EditarEvento";
import CriarEvento from "./components/Evento/CriarEvento";
import Comprar from "./components/Comprar/Comprar";
import ListarIngressosPessoa from "./components/Ingresso/Pessoa/ListarIngressos";
import IngressosComprados from "./components/Comprar/ListarCompras";
import EditarCompra from "./components/Comprar/EditarCompra";
import CriarIngresso from "./components/Ingresso/Empresa/CriarIngresso";
import EditarIngresso from "./components/Ingresso/Empresa/EditarIngresso";
import ListarIngressosEmpresa from "./components/Ingresso/Empresa/ListarIngresso";
import CriarVenda from "./components/Venda/CriarVenda";
import EditarVenda from "./components/Venda/EditarVenda";
import ListarVendas from "./components/Venda/ListarVendas";

function App() {
  const [eventos, setEventos] = useState([
    {
      nome: "Rock in Rio 2021",
      genero: "Musica",
      cep: "01001000",
      dataInicio: "2021-12-24T20:00",
      dataFim: "2021-12-24T20:00",
    },
    {
      nome: "Rock in Rio 2021",
      genero: "Musica",
      cep: "01001000",
      dataInicio: "2021-12-25T20:00",
      dataFim: "2021-12-25T20:00",
    },
  ]);
  
  const [ingressos, setIngressos] = useState([
    {
      evento: "Rock in Rio",
      nome: "Rock in Rio - Dia 3",
      dados: "Show de musica",
    },
    {
      evento: "Rock in Rio",
      nome: "Rock in Rio - Dia 4",
      dados: "Show de musica",
    },
  ]);
  
  const [venda, setVenda] = useState([
    {
      nomeEvento: "Rock in Rio 2021",
      idIngresso: "Rock in Rio - Dia 3",
      genero: "Musica",
      valor: "100",
      quantidade: "5",
    },
    {
      nomeEvento: "Rock in Rio 2021",
      idIngresso: "Rock in Rio - Dia 4",
      genero: "Musica",
      valor: "200",
      quantidade: "3",
    }
  ]);
  
    const [MeuCarrinho, IngressosComprados] = useState([
    {
      nomeEvento: "Jogo das Estrelas - 2021",
      eventoCEP: "20271-130",
      lugarIngresso: "Leste-430",
      dataEvento: "2021-12-10t16:00",
      preçoIngresso: "100",
    } 
    ]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route
          path="/eventos"
          element={<ListarEventos eventos={eventos} />}
        ></Route>
        <Route
          path="/criar-evento"
          element={<CriarEvento eventos={eventos} setEventos={setEventos} />}
        ></Route>
        <Route path="/editar-evento" element={<EditarEvento />}></Route>

         <Route
          path="/ingressos"
          element = {<ListarIngressosEmpresa ingressos = {ingressos} />}
        ></Route>
        <Route
          path="/criar-ingresso"
          element = {<CriarIngresso ingressos = {ingressos}
          setIngressos = {setIngressos} />}
        ></Route>
        <Route path = "/editar-ingresso" element = {<EditarIngresso />}></Route>

        <Route 
          path="/vendas" element={<ListarVendas vendas={vendas} />}
        ></Route>
        <Route 
          path="/criar-venda" element={<CriarVenda vendas={vendas} setVendas={setVendas} />}
        ></Route>
        <Route 
          path="/editar-venda" element={<EditarVenda />}
        ></Route>

        <Route path="/carrinho" element={<Comprar />}></Route>
        <Route path="/meus-ingressos" element={<IngressosComprados />}></Route>
        <Route path="/editar-compra" element={<EditarCompra />}></Route>

        <Route
          path="/esportes"
          element={<ListarIngressosPessoa genero={"Esportes"} />}
        ></Route>
        <Route
          path="/shows"
          element={<ListarIngressosPessoa genero={"Shows"} />}
        ></Route>
        <Route
          path="/familia"
          element={<ListarIngressosPessoa genero={"Famílias"} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
