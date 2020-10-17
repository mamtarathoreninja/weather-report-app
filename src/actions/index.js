
import { getWeatherReport } from '../service/index';


export const UPDATE_CITY = 'UPDATE_CITY';
export const GET_WEATHER_REPORT = 'GET_WEATHER_REPORT'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'

export const getWeatherReportService = (value, dispatch)  => {
  dispatch({ type: SET_LOADING, payload: true })
  return getWeatherReport(value).then(({ data }) => {
    dispatch({ type: GET_WEATHER_REPORT, payload: data })
  }).catch(() => {
    dispatch({ type: SET_ERROR, payload: 'City Not Found...' })
  })
}
