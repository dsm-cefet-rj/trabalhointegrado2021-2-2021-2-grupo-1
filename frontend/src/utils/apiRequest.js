import {
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const apiRequest = (state, tipo) => createAsyncThunk(
  state,
  async (payload, { getState, rejectWithValue }) => {
    const entitie = state.split("/")[0];
    const url = `http://localhost:3001/${entitie}/`;
    const token = getState().usuarios.entities[getState().usuarios.ids[0]].token;
    const headerAuthentication = { headers: { "Authorization": `Bearer ${token}` } };

    if (tipo === "get") {
      const res = await axios.get(url, headerAuthentication);
      return res.data;
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