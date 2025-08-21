import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import { themeSlice } from '../features/theme/themeSlice'
import { postsSlice } from '../features/posts/postsSlice';
import { loggerMiddleware } from './middleware';

const rootReducer = combineSlices(counterSlice, themeSlice, postsSlice);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware)
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']