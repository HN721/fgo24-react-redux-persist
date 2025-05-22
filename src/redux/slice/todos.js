import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.data = state.data.filter((Task) => Task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.data.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...action.payload,
        };
      }
    },
    toggleTask: (state, action) => {
      const index = state.data.findIndex((Task) => Task.id === action.payload);
      if (index !== -1) {
        state.data[index].packed = !state.data[index].packed;
      }
    },
    clearTasks: (state) => {
      state.data = [];
    },
  },
});

export const { addTask, deleteTask, updateTask, toggleTask, clearTasks } =
  TodoSlice.actions;
const TodoReducer = TodoSlice.reducer;
export default TodoReducer;
