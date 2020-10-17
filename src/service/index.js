import axios from 'axios';

export const getWeatherReport = async(city) => {
    return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e403a5a5f562cc6e20d38fb329ee4738`);
}