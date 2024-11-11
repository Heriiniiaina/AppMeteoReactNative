import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";


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


export const forecast = createAction<{ weather: WeatherDataType; city: string }>("forecast");


const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(forecast, (state, action) => {
    state.weather = action.payload.weather;
    state.city = action.payload.city;
  });
});


export const store = configureStore({
  reducer: {
    data: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
