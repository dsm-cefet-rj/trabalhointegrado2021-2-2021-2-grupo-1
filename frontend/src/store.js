import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./redux/eventosSlice";
import vendasSlice from "./redux/vendasSlice";
import ComprarSlice from "./redux/ComprarSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
    vendas: vendasSlice,
    comprar: ComprarSlice,
  },
});

export default store;
