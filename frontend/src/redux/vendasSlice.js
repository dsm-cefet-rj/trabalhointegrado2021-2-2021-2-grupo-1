import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const vendasAdapter = createEntityAdapter();

const initialState = vendasAdapter.getInitialState({
  status: "not_loaded",
});

export const fetchVendas = createAsyncThunk(
  "vendas/fetchVendas",
  async () => {
    const res = await axios.get("http://localhost:3001/vendas");
    return res.data;
  }
);

export const addVenda = createAsyncThunk(
  "vendas/addVenda",
  async (venda, { rejectWithValue }) => {
    try {
      const res = await axios.post(`http://localhost:3001/vendas/`, venda);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

export const deleteVenda = createAsyncThunk(
  "vendas/deleteVenda",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/vendas/${id}`);
      return id;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

export const updateVenda = createAsyncThunk(
  "vendas/updateVenda",
  async (venda, { rejectWithValue }) => {
    try {
      const res = await axios.put(`http://localhost:3001/vendas/${venda.id}`, venda);
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data.error)
    }
  }
);

const vendasSlice = createSlice({
  name: "vendas",
  initialState,
  extraReducers: {
    [fetchVendas.fulfilled]: (state, action) => {
      state.status = "loaded";
      vendasAdapter.setAll(state, action.payload);
    },
    [fetchVendas.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchVendas.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar vendas: " + action.error.message;
    },
    [addVenda.fulfilled]: (state, action) => {
      state.status = "saved";
      vendasAdapter.addOne(state, action.payload);
    },
    [addVenda.pending]: (state, action) => {
      state.status = "loading";
    },
    [addVenda.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [updateVenda.fulfilled]: (state, action) => {
      state.status = "saved";
      vendasAdapter.upsertOne(state, action.payload);
    },
    [updateVenda.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateVenda.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [deleteVenda.fulfilled]: (state, action) => {
      state.status = "saved";
      vendasAdapter.removeOne(state, action.payload);
    },
    [deleteVenda.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteVenda.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  selectAll: selectAllVendas,
  selectById: selectVendaById,
  selectIds: selectVendasIds,
} = vendasAdapter.getSelectors((state) => state.vendas);

export default vendasSlice.reducer;
