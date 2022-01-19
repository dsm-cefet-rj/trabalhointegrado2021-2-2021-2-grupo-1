import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./redux/eventosSlice";
import vendasSlice from "./redux/vendasSlice";
import comprasSlice from "./redux/comprasSlice";
import ingressosSlice from "./redux/ingressosSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
    vendas: vendasSlice,
    compras: comprasSlice,
    ingressos: ingressosSlice,
  },
});

export default store;
