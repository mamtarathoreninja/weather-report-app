import {
  GET_WEATHER_REPORT,
  UPDATE_CITY,
  SET_ERROR,
  SET_LOADING
} from '../actions/index';

const initialState = {
  cityName: "",
  loading: false,
  weatherDetails: {},
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REPORT:
      return { ...state, weatherDetails: action.payload, error: "", loading: false };
    case UPDATE_CITY:
      return { ...state, cityName: action.payload, error: "", weatherDetails: {}, loading: false };
    case SET_ERROR:
      return { ...state, error: action.payload, weatherDetails: {}, loading: false };
    case SET_LOADING:
      return { ...state, error: '', weatherDetails: {}, loading: action.payload };
    default:/*  */
      return state;
  }
};
