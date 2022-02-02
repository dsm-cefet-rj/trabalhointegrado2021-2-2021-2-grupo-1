import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const eventosAdapter = createEntityAdapter();

const initialState = eventosAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchEventos = createAsyncThunk(
  "eventos/fetchEventos",
  async () => {
    const res = await axios.get("http://localhost:3001/eventos");
    return res.data;
  }
);

export const addEvento = createAsyncThunk(
  "eventos/addEvento",
  async (evento, { rejectWithValue }) => {
    try {
      const res = await axios.post(`http://localhost:3001/eventos/`, evento);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

export const deleteEvento = createAsyncThunk(
  "eventos/deleteEvento",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/eventos/${id}`);
      return id;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

export const updateEvento = createAsyncThunk(
  "eventos/updateEvento",
  async (evento, { rejectWithValue }) => {
    try {
      const res = await axios.put(`http://localhost:3001/eventos/${evento.id}`, evento);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
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
      state.error = action.payload;
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
      state.error = action.payload;
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
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllEventos,
  selectById: selectEventoById,
  selectIds: selectEventosIds,
} = eventosAdapter.getSelectors((state) => state.eventos);

export default eventosSlice.reducer;
