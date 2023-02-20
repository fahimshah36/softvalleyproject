import {configureStore} from "@reduxjs/toolkit";
import {api} from "./baseReq";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (defaulMiddleware) =>
    defaulMiddleware({serializableCheck: false}).concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
