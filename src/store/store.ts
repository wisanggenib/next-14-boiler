import { configureStore, combineReducers, Tuple } from '@reduxjs/toolkit'
import storage from './storage'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist'
import authReducer from './slices/authSlice'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  //   middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
