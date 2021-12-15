import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ListarEventos from "./components/Eventos/ListarEventos";
import EditarEvento from "./components/Eventos/EditarEvento";
import CriarEvento from "./components/Eventos/CriarEvento";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/listar-eventos" element={<ListarEventos />}></Route>
        <Route path="/criar-eventos" element={<CriarEvento />}></Route>
        <Route path="/editar-eventos" element={<EditarEvento />}></Route>
        <Route path="/dashboard"></Route>
      </Routes> 
    </Router>
  );
}

export default App;
