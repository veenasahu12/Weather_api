import axios from "axios";
import {
  FETCH_WEATHERAPI_DATA_REQUEST,
  FETCH_WEATHERAPI_DATA_SUCCESS,
  FETCH_WEATHERAPI_DATA_FAILURE,
} from "./actionType";

export const weatherdata = (payload) => (dispatch) => {
  // console.log(payload)
  dispatch({ type: FETCH_WEATHERAPI_DATA_REQUEST });
  return axios
    .get(`https://api.weatherapi.com/v1/${payload.weather}.json?key=8ea75bc179354827816151925222710&q=${payload.city}&days=1&aqi=no&alerts=no`)
    .then((r) => {
      // console.log(r);
      dispatch({ type: FETCH_WEATHERAPI_DATA_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: FETCH_WEATHERAPI_DATA_FAILURE });
    });
};
