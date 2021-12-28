import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./redux/eventosSlice";
import vendasSlice from "./redux/vendasSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
    vendas: vendasSlicer,
  },
});

export default store;
