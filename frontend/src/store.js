import { configureStore } from "@reduxjs/toolkit";

import eventosSlice from "./redux/eventosSlice";

const store = configureStore({
  reducer: {
    eventos: eventosSlice,
  },
});

export default store;
