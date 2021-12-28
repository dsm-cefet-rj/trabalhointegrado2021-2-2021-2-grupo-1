import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import ListarEventos from "./components/Evento/ListarEventos";
import EditarEvento from "./components/Evento/EditarEvento";
import CriarEvento from "./components/Evento/CriarEvento";
import { fetchEventos } from "./redux/eventosSlice";

import Comprar from "./components/Comprar/Comprar";
import EditarCompra from "./components/Comprar/EditarCompra";
import IngressosComprados from "./components/Comprar/ListarCompras";

import ListarIngressosPessoa from "./components/Ingresso/Pessoa/ListarIngressos";
import CriarIngresso from "./components/Ingresso/Empresa/CriarIngresso";
import EditarIngresso from "./components/Ingresso/Empresa/EditarIngresso";
import ListarIngressosEmpresa from "./components/Ingresso/Empresa/ListarIngresso";

import CriarVenda from "./components/Venda/CriarVenda";
import EditarVenda from "./components/Venda/EditarVenda";
import ListarVendas from "./components/Venda/ListarVendas";
import { fetchVendas } from "./redux/vendasSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventos());
  }, []);
  
  useEffect(() => {
    dispatch(fetchVendas());
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/empresa/eventos" element={<ListarEventos />} />
        <Route path="/empresa/evento/:id" element={<EditarEvento />} />
        <Route path="/empresa/criar-evento" element={<CriarEvento />} />

        {/* 
          <Route
            path="/ingressos"
            element={<ListarIngressosEmpresa ingressos={ingressos} />}
          />
          <Route
            path="/criar-ingresso"
            element={
              <CriarIngresso
                ingressos={ingressos}
                setIngressos={setIngressos}
              />
            }
          />
          */}
          
        <Route path="/empresa/vendas" element={<ListarVendas />} />
        <Route path="/empresa/venda/:id" element={<EditarVenda />} />
        <Route path="/empresa/criar-venda" element={<CriarVenda />} />

          {/*
          <Route
            path="/carrinho"
            element={
              <Comprar
                meuCarrinho={meuCarrinho}
                setMeuCarrinho={setMeuCarrinho}
                ingressosComprados={ingressosComprados}
                setIngressosComprados={setIngressosComprados}
              />
            }
          />
          

          <Route
            path="/meus-ingressos"
            element={
              <IngressosComprados ingressosComprados={ingressosComprados} />
            }
          />
          
          
          <Route path="/editar-compra" element={<EditarCompra />} />

          <Route
            path="/esportes"
            element={
              <ListarIngressosPessoa
                genero={"Esportes"}
                ingressos={ingressosPessoa}
                meuCarrinho={meuCarrinho}
                setMeuCarrinho={setMeuCarrinho}
              />
            }
          />
          <Route
            path="/shows"
            element={
              <ListarIngressosPessoa
                genero={"Shows"}
                ingressos={ingressosPessoa}
                meuCarrinho={meuCarrinho}
                setMeuCarrinho={setMeuCarrinho}
              />
            }
          />
          <Route
            path="/familia"
            element={
              <ListarIngressosPessoa
                genero={"Famílias"}
                ingressos={ingressosPessoa}
                meuCarrinho={meuCarrinho}
                setMeuCarrinho={setMeuCarrinho}
              />
            }
          /> */}
      </Routes>
    </Router>
  );
}

export default App;
