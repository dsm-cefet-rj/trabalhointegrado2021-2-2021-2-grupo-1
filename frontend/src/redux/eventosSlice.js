import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { httpDelete, httpGet, httpPut, httpPost } from "../utils";

const eventosAdapter = createEntityAdapter();

const initialState = eventosAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchEventos = createAsyncThunk(
  "eventos/fetchEventos",
  async () => {
    return await httpGet("http://localhost:3001/eventos");
  }
);

export const addEvento = createAsyncThunk(
  "eventos/addEvento",
  async (evento) => {
    return await httpPost("http://localhost:3001/eventos", evento);
  }
);

export const deleteEvento = createAsyncThunk(
  "eventos/deleteEvento",
  async (id) => {
    await httpDelete(`http://localhost:3001/eventos/${id}`);
    return id;
  }
);

export const updateEvento = createAsyncThunk(
  "eventos/updateEvento",
  async (evento) => {
    return await httpPut(`http://localhost:3001/eventos/${evento.id}`, evento);
  }
);

const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  extraReducers: {
    [fetchEventos.fulfilled]: (state, action) => {
      state.status = "loaded";
      eventosAdapter.setAll(state, action.payload);
    },
    [fetchEventos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchEventos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar eventos: " + action.error.message;
    },
    [addEvento.fulfilled]: (state, action) => {
      state.status = "saved";
      eventosAdapter.addOne(state, action.payload);
    },
    [addEvento.pending]: (state, action) => {
      state.status = "loading";
    },
    [addEvento.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao adicionar evento: " + action.error.message;
    },
    [updateEvento.fulfilled]: (state, action) => {
      state.status = "saved";
      eventosAdapter.upsertOne(state, action.payload);
    },
    [updateEvento.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateEvento.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao editar evento: " + action.error.message;
    },
    [deleteEvento.fulfilled]: (state, action) => {
      state.status = "saved";
      eventosAdapter.removeOne(state, action.payload);
    },
    [deleteEvento.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteEvento.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao deletar evento: " + action.error.message;
    },
  },
});

export const {
  selectAll: selectAllEventos,
  selectById: selectEventoById,
  selectIds: selectEventosIds,
} = eventosAdapter.getSelectors((state) => state.eventos);

export default eventosSlice.reducer;
