import {
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const apiRequest = (state, tipo) => createAsyncThunk(
  state,
  async (payload, { getState, rejectWithValue }) => {
    const entitie = state.split("/")[0];
    const url = `http://localhost:3001/${entitie}/`;
    const { token, tipo: usuarioTipo, id: usuarioId } = JSON.parse(localStorage.getItem("usuario")) || getState().usuarios.entities[getState().usuarios.ids[0]];
    const headerAuthentication = { headers: { "Authorization": `Bearer ${token}` } };

    if (tipo === "get") {
      const res = await axios.get(url, headerAuthentication);

      if (res.data.length > 0) {
        if ((usuarioTipo === "empresa") || (usuarioTipo === "cliente" && entitie === "compras")) {  
          return res.data.filter(data => data.usuarioId === usuarioId);
        } else {
          return res.data;
        }
      } else return res.data
    } else if (tipo === "post") {
      try {
        const res = await axios.post(url, payload, headerAuthentication);
        return res.data;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data.error)
      }
    } else if (tipo === "delete") {
      try {
        await axios.delete(`${url}${payload}`, headerAuthentication);
        return payload;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data.error)
      }
    } else if (tipo === "put") {
      try {
        const res = await axios.put(`${url}${payload.id}`, payload, headerAuthentication);
        return res.data;
      } catch (err) {
        if (!err.response) {
          throw err;
        }
        return rejectWithValue(err.response.data.error)
      }
    }

  }
)

export default apiRequest;