import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FlightState {
  data?: any;
  query?: any;
  orderDetail? : any;
  orderPayment?: any;
  [key: string]: any;
}

const initialState: FlightState = {
    data: {},
    query: {},
    orderDetail: {},
    orderPayment: {},
};

export const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    orderData: (state, actions) => {
        state.data = {
          flights: actions.payload.data,
        };
        state.isDomestic = actions.payload.isDomestic;
        state.query = actions.payload.query;
    },
    checkoutData: (state, actions) => {
        state.orderDetail = actions.payload.orderDetail;
    },
    resetDataFlight: (state) => {
        state.data = {};
        state.query = {};
        state.orderDetail = {};
        state.orderPayment = {};
    },
  },
});

export const { orderData, checkoutData, resetDataFlight } = flightSlice.actions;

export const selectClientKey = (state: { flight: FlightState }) => state.flight.ClientKey;
export const selectAccessToken = (state: { flight: FlightState }) => state.flight.accessToken;

const flightReducer = flightSlice.reducer;
export default flightReducer;
