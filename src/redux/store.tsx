import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/CounterSlice";
import taskSlice from './features/task/taskSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: taskSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
