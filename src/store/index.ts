import { useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export type RootState = ReturnType<typeof rootReducer>;

export default store;
