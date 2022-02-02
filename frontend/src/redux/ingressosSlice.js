import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const ingressosAdapter = createEntityAdapter();

const initialState = ingressosAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchIngressos = createAsyncThunk(
  "ingressos/fetchIngressos",
  async () => {
    const res = await axios.get("http://localhost:3001/ingressos");
    return res.data;
  }
);

export const addIngresso = createAsyncThunk(
  "ingressos/addIngresso",
  async (ingresso, { rejectWithValue }) => {
    try {
      const res = await axios.post(`http://localhost:3001/ingressos/`, ingresso);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

export const deleteIngresso = createAsyncThunk(
  "ingressos/deleteIngresso",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/ingressos/${id}`);
      return id;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

export const updateIngresso = createAsyncThunk(
  "ingressos/updateIngresso",
  async (ingresso, { rejectWithValue }) => {
    try {
      const res = await axios.put(`http://localhost:3001/ingressos/${ingresso.id}`, ingresso);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

const ingressosSlice = createSlice({
  name: "ingressos",
  initialState,
  extraReducers: {
    [fetchIngressos.fulfilled]: (state, action) => {
      state.status = "loaded";
      ingressosAdapter.setAll(state, action.payload);
    },
    [fetchIngressos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchIngressos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar ingressos: " + action.error.message;
    },
    [addIngresso.fulfilled]: (state, action) => {
      state.status = "saved";
      ingressosAdapter.addOne(state, action.payload);
    },
    [addIngresso.pending]: (state, action) => {
      state.status = "loading";
    },
    [addIngresso.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [updateIngresso.fulfilled]: (state, action) => {
      state.status = "saved";
      ingressosAdapter.upsertOne(state, action.payload);
    },
    [updateIngresso.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateIngresso.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [deleteIngresso.fulfilled]: (state, action) => {
      state.status = "saved";
      ingressosAdapter.removeOne(state, action.payload);
    },
    [deleteIngresso.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteIngresso.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllIngressos,
  selectById: selectIngressoById,
  selectIds: selectIngressosIds,
} = ingressosAdapter.getSelectors((state) => state.ingressos);

export default ingressosSlice.reducer;
