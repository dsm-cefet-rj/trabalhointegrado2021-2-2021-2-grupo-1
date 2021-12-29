import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./redux/eventosSlice";
import vendasSlice from "./redux/vendasSlice";
import ComprarSlice from "./redux/comprarSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
    vendas: vendasSlice,
    comprar: ComprarSlice,
  },
});

export default store;
