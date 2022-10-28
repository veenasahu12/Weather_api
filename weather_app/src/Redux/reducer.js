import {
    FETCH_WEATHERAPI_DATA_REQUEST,
    FETCH_WEATHERAPI_DATA_SUCCESS,
    FETCH_WEATHERAPI_DATA_FAILURE,
} from "./actionType";

const initialState = {
  getweather: {
    loading: false,
    error: false,
    data: [],
  }
};

export const reducer = (store = initialState, { type, payload }) => {
  // console.log(payload , type)
  switch (type) {
    case FETCH_WEATHERAPI_DATA_REQUEST: {
      return {
        ...store,
        getweather: {
          ...store.getweather,
          loading: true,
        },
      };
    }
    case FETCH_WEATHERAPI_DATA_SUCCESS: {
      return {
        ...store,
        getweather: {
          ...store.getweather,
          loading: false,
          data: payload,
        },
      };
    }
    case FETCH_WEATHERAPI_DATA_FAILURE: {
      return {
        ...store,
        getweather: {
          ...store.getweather,
          loading: false,
          error: true,
        },
      };
    }
    default:
      return store;
  }
};
