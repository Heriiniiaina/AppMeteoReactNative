import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Définir l'action
export const forecast = createAction<any>("forecast");

interface State {
  data: any | null;
}

const initialState: State = {
  data: null,
};

// Créer un réducteur avec `createReducer`
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(forecast, (state, action) => {
    state.data = action.payload;
  });
});

export const store = configureStore({
  reducer: {
    data: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
