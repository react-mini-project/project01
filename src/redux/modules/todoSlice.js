import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: {},
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getTodo = createAsyncThunk(
  "todo/getTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/todos/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __patchTodo = createAsyncThunk(
  "todos/patchTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todo = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__patchTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = { ...state.todo, content: action.payload.content };
    },
    [__patchTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
