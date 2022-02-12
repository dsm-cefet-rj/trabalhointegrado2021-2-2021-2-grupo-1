import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./eventosSlice";
import vendasSlice from "./vendasSlice";
import comprasSlice from "./comprasSlice";
import ingressosSlice from "./ingressosSlice";
import usuariosSlice from "./usuariosSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
    vendas: vendasSlice,
    compras: comprasSlice,
    ingressos: ingressosSlice,
    usuarios: usuariosSlice,
  },
});

export default store;
