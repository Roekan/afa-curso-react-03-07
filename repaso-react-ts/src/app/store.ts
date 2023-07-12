
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/userSlice';
import detailSlice from '../pages/detailSlice';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import thunk from 'redux-thunk';
import searchSlice from '../pages/searchSlice';

const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
    search: searchSlice
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});