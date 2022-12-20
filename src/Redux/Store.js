import { configureStore } from '@reduxjs/toolkit';

import { shazamCoreApi } from './Services/ShazamCore';
import playerReducer from './Features/PlayerSlice';

export const Store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
