import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

interface TestState {
  value: number;
}

const increment = createAction("test/increment");
const initialState = { value: 0 } as TestState;

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.value++;
  });
});

export const store = configureStore({
  reducer: counterReducer,
});
