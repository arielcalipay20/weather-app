import React, { useState } from 'react';
import WeatherCall from './WeatherCall';

const WeatherUI = () => {
    const [name, setName] = useState('');
    const [cities, setCities] = useState([]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const getWeather = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            setCities([name]);
            setName('');
        }
    }

    return (
        <div className='carousel-container'>

            <form className='input-container' onSubmit={getWeather}>
                <input type='text' placeholder='Location Name....' value={name} onChange={handleChange} required />
                <button type='submit'>Get Weather</button>
            </form>

            {cities.map((city, index) => (
                <div key={index}>
                    <WeatherCall city={city} key={city} />
                </div>
            ))}

        </div>
    );
}

export default WeatherUI;
