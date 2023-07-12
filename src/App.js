import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  return (
    <>
      <WeatherUI />
    </>
  );

}

const WeatherUI = () => {

  const city = {
    caloocan: "lat=14.758311574488463&lon=121.0427752809748",
    quezonCity: "lat=14.673588136931114&lon=121.04911413454475",
    valenzuela: "lat=14.701827743211217&lon=120.98234027150606",
    manila: "lat=14.599318727430738&lon=120.98179029128475"
  }

  return (

    <div className='main-container'>
      <div className='bg-img'>
        <div className='status-container'>
          <WeatherCall city={city.quezonCity} />
        </div>
        <div className='location-container'>

        </div>
      </div>
    </div>
  );

}

const WeatherCall = (props) => {

  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherStatus, setWeatherStatus] = useState('');
  const [feels_like, setFeelsLike] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [pressure, setPressure] = useState('');
  const [sunrise, setSunrise] = useState('');

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?${props.city}&appid=d2c01417fe717d5dd97b99f62896b7c3`;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();

        setLocation(jsonData.name);

        const mainTemp = (jsonData.main.temp - 273.15);
        setTemperature(mainTemp.toFixed(2));

        setWeatherStatus(jsonData.weather[0].description)

        const feelsLike = (jsonData.main.feels_like - 273.15);
        setFeelsLike(feelsLike.toFixed(0));

        const windSpeed = (jsonData.wind.speed * 3.6);
        setWindSpeed(windSpeed.toFixed(2));

        setHumidity(jsonData.main.humidity);

        const visibility = (jsonData.visibility / 1000);
        setVisibility(visibility.toFixed(0));

        setPressure(jsonData.main.pressure);

        const sunriseTimestamp = jsonData.sys.sunrise;
        const sunriseDate = new Date(sunriseTimestamp * 1000);
        const sunriseTimeString = sunriseDate.toLocaleTimeString();
        setSunrise(sunriseTimeString);

      } catch (error) {
        console.log('Error', error);
      }
    }

    fetchData();
  }, [API_URL]);

  return (
    <div>
      <div>
        Location: {location}
      </div>
      <div>
        Temperature: {temperature}°C
      </div>
      <div>
        Weather: {weatherStatus}
      </div>
      <div>
        Feels Like: {feels_like}°C
      </div>
      <div>
        Wind: {windSpeed} km/h
      </div>
      <div>
        Humidity: {humidity}%
      </div>
      <div>
        Visibility: {visibility} km
      </div>
      <div>
        Pressure: {pressure} mb
      </div>
      <div>
        Sunrise: {sunrise}
      </div>
    </div>
  );

}



export default App;
