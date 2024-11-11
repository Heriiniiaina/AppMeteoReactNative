import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Définir un type pour les données météo et la ville
interface WeatherDataType {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
  };
  daily: {
    sunrise: string[];
    sunset: string[];
  };
}

interface State {
  weather: WeatherDataType | null;
  city: string | null;
}

const initialState: State = {
  weather: null,
  city: null,
};

// Définir une action avec un payload pour `weather` et `city`
export const forecast = createAction<{ weather: WeatherDataType; city: string }>("forecast");

// Créer un réducteur avec `createReducer`
const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(forecast, (state, action) => {
    state.weather = action.payload.weather;
    state.city = action.payload.city;
  });
});

// Configurer le store Redux
export const store = configureStore({
  reducer: {
    data: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
