import React from 'react';
import { useState, useEffect } from 'react';
import DisplayUI from './DisplayUI';

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

            } catch (error) {
                console.log('Error', error);
            }
        }

        fetchData();
    }, [API_URL]);


    return (
        <>
            <DisplayUI location={location} temperature={temperature} weatherStatus={weatherStatus} feels_like={feels_like} windSpeed={windSpeed} humidity={humidity} visibility={visibility} pressure={pressure} />
        </>
    );

}

export default WeatherCall;