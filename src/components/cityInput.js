import React from 'react';
import { getWeatherReportService, UPDATE_CITY } from '../actions';
import { useDispatch, useSelector } from 'react-redux'
import './index.css';


const CityInput = () => {

    const cityName = useSelector(state => state.weather.cityName);
    const Error = useSelector(state => state.weather.error);
    const dispatch = useDispatch();

    const handleCityChange = (e) => {
        dispatch({ type: UPDATE_CITY, payload: e.target.value })
        if (e.target.value.length > 1) {
            getWeatherReportService(e.target.value, dispatch)
        }
    }
    return <div>
        <div className="label">Enter the City Name &nbsp;
            <input className="text-input" type="text" value={cityName} onChange={handleCityChange} /></div>
        <br />
        <div style={{ color: 'red' }}> {Error && <div>{Error}</div>} </div>
    </div>
}

export default CityInput;