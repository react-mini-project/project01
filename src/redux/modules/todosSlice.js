import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.timeout = 3000;

const initialState = {
  todos: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {

    try {
      const data = await axios.get("https://shrouded-badlands-79466.herokuapp.com/todos", { timeout: 30000 });
      return thunkAPI.fulfillWithValue(data.data);

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }

  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("https://shrouded-badlands-79466.herokuapp.com/todos", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`https://shrouded-badlands-79466.herokuapp.com/todos/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodo: (state, action) => {
      state.isSuccess = true;
    },
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false
      state.todos = action.payload;

      // 네트워크 요청이 끝났으니, false로 변경합니다.
      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__addTodo.pending]: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    },
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.todos = [...state.todos, action.payload];
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

