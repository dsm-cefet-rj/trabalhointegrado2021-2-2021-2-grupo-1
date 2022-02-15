import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const usuariosAdapter = createEntityAdapter();

const initialState = usuariosAdapter.getInitialState({
  status: "not_login",
});

export const loginUsuario = createAsyncThunk(
  "usuarios/loginUsuario",
  async (usuario) => {
    if (initialState.status === "not_login") {
      const res = await axios.post("http://localhost:3001/usuarios/login", usuario);
      return res.data;
    }
  }
);

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    logoutUsuario: () => {
      return{
        status: "not_login",
        ids: [],
        entities: {},
      }
    }
  },
  extraReducers: {
    [loginUsuario.fulfilled]: (state, action) => {
      state.status = "login";
      usuariosAdapter.addOne(state, action.payload);
    },
    [loginUsuario.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao fazer login";
    }
  },
});

export const {
  logoutUsuario,
} = usuariosSlice.actions;

export const {
  selectAll: selectAllUsuarios,
  selectById: selectEventoById,
  selectIds: selectUsuariosIds,
} = usuariosAdapter.getSelectors((state) => state.usuarios);

export default usuariosSlice.reducer;
