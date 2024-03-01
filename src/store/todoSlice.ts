import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

interface TodoItem {
  id: string;
  content: string;
  complete: boolean;
}

interface TodoState {
  todoList: TodoItem[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList = [
        ...state.todoList,
        {
          id: v4(),
          content: action.payload,
          complete: false,
        },
      ];
    },
    updateTodo: (state, action: PayloadAction<{ id: string; status: boolean }>) => {
      const { id, status } = action.payload;
      state.todoList = state.todoList.map((item) => (item.id === id ? { ...item, complete: status } : item));
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
