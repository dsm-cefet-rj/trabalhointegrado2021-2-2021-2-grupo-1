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

function App() {
  const dispatch = useDispatch();

  const usuarioLogin = useSelector(state => state.usuarios);
  const usuarioLogadoTipo = usuarioLogin.entities[usuarioLogin.ids[0]]?.user.tipo;

  useEffect(() => {
    if (usuarioLogin.status === "login") {
      dispatch(fetchEventos());
      dispatch(fetchVendas());
      dispatch(fetchCompras());
      dispatch(fetchIngressos());
    }
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeLogin />} />

        <Route path="/home" element={usuarioLogadoTipo === "cliente" ? <Home /> : <RotaBloqueada />} />

        <Route path="/empresa/eventos" element={usuarioLogadoTipo === "empresa" ? <ListarEventos /> : <RotaBloqueada />} />
        <Route path="/empresa/evento/:id" element={usuarioLogadoTipo === "empresa" ? <EditarEvento /> : <RotaBloqueada />} />
        <Route path="/empresa/criar-evento" element={usuarioLogadoTipo === "empresa" ? <CriarEvento /> : <RotaBloqueada />} />

        <Route path="/empresa/ingressos" element={usuarioLogadoTipo === "empresa" ? <ListarIngressosEmpresa /> : <RotaBloqueada />} />
        <Route path="/empresa/ingresso/:id" element={usuarioLogadoTipo === "empresa" ? <EditarIngresso /> : <RotaBloqueada />} />
        <Route path="/empresa/criar-ingresso" element={usuarioLogadoTipo === "empresa" ? <CriarIngresso /> : <RotaBloqueada />} />

        <Route path="/empresa/vendas" element={usuarioLogadoTipo === "empresa" ? <ListarVendas /> : <RotaBloqueada />} />
        <Route path="/empresa/venda/:id" element={usuarioLogadoTipo === "empresa" ? <EditarVenda /> : <RotaBloqueada />} />
        <Route path="/empresa/criar-venda" element={usuarioLogadoTipo === "empresa" ? <CriarVenda /> : <RotaBloqueada />} />

        <Route path="/carrinho" element={usuarioLogadoTipo === "cliente" ? <Comprar /> : <RotaBloqueada />} />
        <Route path="/meus-ingressos" element={usuarioLogadoTipo === "cliente" ? <IngressosComprados /> : <RotaBloqueada />} />
        <Route path="/meu-ingresso/:id" element={usuarioLogadoTipo === "cliente" ? <EditarCompra /> : <RotaBloqueada />} />

        <Route path="/comprovante/:id" element={usuarioLogadoTipo === "cliente" ? <Comprovante /> : <RotaBloqueada />} />

        <Route
          path="/esporte"
          element={usuarioLogadoTipo === "cliente" ? <ListarIngressosPessoa genero={"esporte"} /> : <RotaBloqueada />}
        />
        <Route
          path="/musica"
          element={usuarioLogadoTipo === "cliente" ? <ListarIngressosPessoa genero={"musica"} /> : <RotaBloqueada />}
        />
        <Route
          path="/familia"
          element={usuarioLogadoTipo === "cliente" ? <ListarIngressosPessoa genero={"familia"} /> : <RotaBloqueada />}
        />
        <Route path="/revendas" element={usuarioLogadoTipo === "cliente" ? <ListarIngressosRevendidos /> : <RotaBloqueada />} />
        <Route path="/ingressos/:name" element={usuarioLogadoTipo === "cliente" ? <ListarPesquisa /> : <RotaBloqueada />} />
      </Routes>
    </Router>
  );
}

export default App;
