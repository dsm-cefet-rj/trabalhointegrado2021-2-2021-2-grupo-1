import {
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import apiRequest from "../utils/apiRequest";

const chatAdapter = createEntityAdapter();

const initialState = chatAdapter.getInitialState({
  status: "not_loaded",
  Mensagem:[]
});

export const fetchchat = apiRequest("chat/fetchchat", "get");

export const addchat = apiRequest("chat/addchat", "post");

export const deletechat = apiRequest("chat/deletechat", "delete");

export const deletechat = apiRequest("chat/updatechat", "put");

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMensagem: (state, action) => {
      return {
        ...state,
        Mensagem: [...state.Mensagem, action.payload],
      };
    },
    removeItemMensagem: (state, action) => {
      return {
        ...state,
        Mensagem: state.Mensagem.filter(e => e.id !== action.payload),
      }
    },
    removeTudoMensagem: (state, action) => {
      return {
        ...state,
        Mensagem: [],
      };
    },
  },
  extraReducers: {
    [fetchchat.fulfilled]: (state, action) => {
      state.status = "loaded";
      chatAdapter.setAll(state, action.payload);
    },
    [fetchchat.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchchat.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao buscar mensagens: " + action.error.message;
    },
    [addchat.fulfilled]: (state, action) => {
      state.status = "saved";
      chatAdapter.addOne(state, action.payload);
    },
    [addchat.pending]: (state, action) => {
      state.status = "loading";
    },
    [addchat.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao enviar mensagem: " + action.error.message;
    },
    [updatechat.fulfilled]: (state, action) => {
      state.status = "saved";
      chatAdapter.upsertOne(state, action.payload);
    },
    [updatechat.pending]: (state, action) => {
      state.status = "loading";
    },
    [updatechat.rejected]: (state, action) => {
      state.status = "failed";
      state.error = "Falha ao editar mensagem: " + action.error.message;
    },
    [deletechat.fulfilled]: (state, action) => {
      state.status = "saved";
      chatAdapter.removeOne(state, action.payload);
    },
    [deletechat.pending]: (state, action) => {
      state.status = "loading";
    },
    [deletechat.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  addMensagem,
  removeItemMensagem,
  removeTudoMensagem,
} = chatSlice.actions;

export const {
  selectAll: selectAllchat,
  selectById: selectchatById,
  selectIds: selectchatIds,
} = chatAdapter.getSelectors((state) => state.compras);

export default chatSlice.reducer;
