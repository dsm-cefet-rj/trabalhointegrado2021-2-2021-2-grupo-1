import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/listar-eventos"></Route>
        <Route path="/criar-eventos"></Route>
        <Route path="/editar-eventos"></Route>
        <Route path="/dashboard"></Route>
      </Routes>
    </Router>
  );
}

export default App;
