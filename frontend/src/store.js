import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./redux/eventosSlice";
import vendasSlice from "./redux/vendasSlice";
import ComprarSlice from "./redux/comprarSlice";
import ingressos: fom "./redux/ingressosSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
    vendas: vendasSlice,
    comprar: ComprarSlice,
    ingressos: ingressosSlice,
  },
});

export default store;
