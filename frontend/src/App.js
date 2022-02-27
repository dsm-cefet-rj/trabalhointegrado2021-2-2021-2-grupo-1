import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import HomeLogin from "./components/Home/HomeLogin";

import RotaBloqueada from "./components/RotaBloqueada/RotaBloqueada";

import ListarEventos from "./components/Evento/ListarEventos";
import EditarEvento from "./components/Evento/EditarEvento";
import CriarEvento from "./components/Evento/CriarEvento";
import { fetchEventos } from "./redux/eventosSlice";

import Comprar from "./components/Comprar/Comprar";
import EditarCompra from "./components/Comprar/EditarCompra";
import IngressosComprados from "./components/Comprar/ListarCompras";
import { fetchCompras } from "./redux/comprasSlice";

import ListarIngressosPessoa from "./components/Ingresso/Pessoa/ListarIngressos";
import ListarIngressosRevendidos from "./components/Ingresso/Pessoa/ListarRevendas";
import ListarPesquisa from "./components/Ingresso/Pessoa/ListarPesquisa";
import ListarIngressosEmpresa from "./components/Ingresso/Empresa/ListarIngresso";
import CriarIngresso from "./components/Ingresso/Empresa/CriarIngresso";
import EditarIngresso from "./components/Ingresso/Empresa/EditarIngresso";
import { fetchIngressos } from "./redux/ingressosSlice";

import Comprovante from "./components/Comprovante/Comprovante";

import CriarVenda from "./components/Venda/CriarVenda";
import EditarVenda from "./components/Venda/EditarVenda";
import ListarVendas from "./components/Venda/ListarVendas";
import { fetchVendas } from "./redux/vendasSlice";

// import Listarchat from "./components/Chat/ListarChat";
// import Editarchat from "./components/Chat/EditarChat";
// import Criarchat from "./components/Chat/CriarChat";
// import { fetchchat } from "./redux/chatSlice";

function App() {
  const dispatch = useDispatch();

  const usuarioLogin = useSelector(state => state.usuarios);
  const usuarioLogadoTipo = JSON.parse(localStorage.getItem("usuario"))?.tipo || usuarioLogin.entities[usuarioLogin.ids[0]]?.user.tipo;

  useEffect(() => {
    if (usuarioLogin.status === "login" || usuarioLogadoTipo) {
      if (usuarioLogadoTipo === "cliente") {
        dispatch(fetchCompras());
      }
      dispatch(fetchEventos());
      dispatch(fetchVendas());
      dispatch(fetchIngressos());
    }
  });

  function redirectPageUnauthorized(tipo, componente) {
    if (usuarioLogadoTipo === tipo) {
      return componente;
    } else return <RotaBloqueada />;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeLogin />} />

        <Route path="/home" element={redirectPageUnauthorized("cliente", <Home />)} />

        <Route path="/empresa/eventos" element={redirectPageUnauthorized("empresa", <ListarEventos />)} />
        <Route path="/empresa/evento/:id" element={redirectPageUnauthorized("empresa", <EditarEvento />)} />
        <Route path="/empresa/criar-evento" element={redirectPageUnauthorized("empresa", <CriarEvento />)} />

        <Route path="/empresa/ingressos" element={redirectPageUnauthorized("empresa", <ListarIngressosEmpresa />)} />
        <Route path="/empresa/ingresso/:id" element={redirectPageUnauthorized("empresa", <EditarIngresso />)} />
        <Route path="/empresa/criar-ingresso" element={redirectPageUnauthorized("empresa", <CriarIngresso />)} />

        <Route path="/empresa/vendas" element={redirectPageUnauthorized("empresa", <ListarVendas />)} />
        <Route path="/empresa/venda/:id" element={redirectPageUnauthorized("empresa", <EditarVenda />)} />
        <Route path="/empresa/criar-venda" element={redirectPageUnauthorized("empresa", <CriarVenda />)} />

        <Route path="/carrinho" element={redirectPageUnauthorized("cliente", <Comprar />)} />
        <Route path="/meus-ingressos" element={redirectPageUnauthorized("cliente", <IngressosComprados />)} />
        <Route path="/meu-ingresso/:id" element={redirectPageUnauthorized("cliente", <EditarCompra />)} />

        <Route path="/comprovante/:id" element={redirectPageUnauthorized("cliente", <Comprovante />)} />

        <Route
          path="/esporte"
          element={redirectPageUnauthorized("cliente", <ListarIngressosPessoa genero="esporte" />)} />
        <Route
          path="/musica"
          element={redirectPageUnauthorized("cliente", <ListarIngressosPessoa genero="musica" />)} />
        <Route
          path="/familia"
          element={redirectPageUnauthorized("cliente", <ListarIngressosPessoa genero="familia" />)} />

        <Route path="/revendas" element={redirectPageUnauthorized("cliente", <ListarIngressosRevendidos />)} />
        <Route path="/ingressos/:name" element={redirectPageUnauthorized("cliente", <ListarPesquisa />)} />
      </Routes>
    </Router>
  );
}

export default App;
