import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CityInput from './components/cityInput';
import './App.css';
import WeatherInfoBlock from './components/weatherInfoBlock';
import rootReducer from './reducers';

function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <div className="city-weather-block">
          <CityInput/>
          <WeatherInfoBlock/>
        </div>
        </Provider>
      </header>
    </div>
  );
}

export default App;
