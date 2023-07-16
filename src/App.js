import './App.css';
import { useState, useEffect } from 'react';
import DisplayUI from './Component/DisplayUI';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Main Component
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <div className='carousel-container'>
      <Slider {...settings}>

        <div>
          <WeatherCall city={city.caloocan} />
        </div>

        <div>
          <WeatherCall city={city.quezonCity} />
        </div>

        <div>
          <WeatherCall city={city.valenzuela} />
        </div>

        <div>
          <WeatherCall city={city.manila} />
        </div>

      </Slider>
    </div>

  );

}


//Functionality and API call
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
    <>
      <DisplayUI location={location} temperature={temperature} weatherStatus={weatherStatus} feels_like={feels_like} windSpeed={windSpeed} humidity={humidity} visibility={visibility} pressure={pressure} sunrise={sunrise} />
    </>
  );

}



export default App;
