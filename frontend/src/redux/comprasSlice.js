import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { httpDelete, httpGet, httpPut, httpPost } from "../utils";

const comprasAdapter = createEntityAdapter();

const initialState = comprasAdapter.getInitialState({
  status: "not_loaded",
  meuCarrinho: [],
});

export const fetchCompras = createAsyncThunk(
  "compras/fetchCompras",
  async () => {
    return await httpGet("http://localhost:3001/compras");
  }
);

export const addCompra = createAsyncThunk(
  "compras/addCompra",
  async (compra) => {
    return await httpPost("http://localhost:3001/compras", compra);
  }
);

export const deleteCompra = createAsyncThunk(
  "compras/deleteCompra",
  async (id) => {
    await httpDelete(`http://localhost:3001/compras/${id}`);
    return id;
  }
);

export const updateCompra = createAsyncThunk(
  "compras/updateCompra",
  async (compra) => {
    return await httpPut(`http://localhost:3001/compras/${compra.id}`, compra);
  }
);

const comprasSlice = createSlice({
  name: "compras",
  initialState,
  reducers: {
    addMeuCarrinho: (state, action) => {
      return {
        ...state,
        meuCarrinho: [...state.meuCarrinho, action.payload],
      };
    },
    removeItemMeuCarrinho: (state, action) => {
      return {
        ...state,
        meuCarrinho: state.meuCarrinho.filter(e => e.id !== action.payload),
      }
    },
    removeTudoMeuCarrinho: (state, action) => {
      return {
        ...state,
        meuCarrinho: [],
      };
    },
  },
  extraReducers: {
    [fetchCompras.fulfilled]: (state, action) => {
      state.status = "loaded";
      comprasAdapter.setAll(state, action.payload);
    },
    [fetchCompras.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCompras.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar compras: " + action.error.message;
    },
    [addCompra.fulfilled]: (state, action) => {
      state.status = "saved";
      comprasAdapter.addOne(state, action.payload);
    },
    [addCompra.pending]: (state, action) => {
      state.status = "loading";
    },
    [addCompra.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao adicionar compra: " + action.error.message;
    },
    [updateCompra.fulfilled]: (state, action) => {
      state.status = "saved";
      comprasAdapter.upsertOne(state, action.payload);
    },
    [updateCompra.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateCompra.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao editar compra: " + action.error.message;
    },
    [deleteCompra.fulfilled]: (state, action) => {
      state.status = "saved";
      comprasAdapter.removeOne(state, action.payload);
    },
    [deleteCompra.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteCompra.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao deletar compra: " + action.error.message;
    }
  },
});

export const {
  addMeuCarrinho,
  removeItemMeuCarrinho,
  removeTudoMeuCarrinho,
} = comprasSlice.actions;

export const {
  selectAll: selectAllCompras,
  selectById: selectCompraById,
  selectIds: selectComprasIds,
} = comprasAdapter.getSelectors((state) => state.compras);

export default comprasSlice.reducer;
