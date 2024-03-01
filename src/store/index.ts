import { useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo'],
};

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);

export default store;
