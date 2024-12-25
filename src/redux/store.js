import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { trucksReducer } from './slice';
import { filterReducer } from './filters/slice';

const authPersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    filters: persistReducer(authPersistConfig, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
