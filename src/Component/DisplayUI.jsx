import React from 'react';
import Description from './Description';

const DisplayUI = (props) => {
    return (
        <div>
            <div>
                <Description description={props.weatherStatus} />
            </div>
            <div className='location-container'>
                {props.location === 'Bagong Pagasa' ? 'Quezon City' : props.location === 'City of Meycauayan' ? 'Caloocan City' : props.location === 'Parada' ? 'Valenzuela City' : props.location}
            </div>
            <div>
                Temperature: {props.temperature}°C
            </div>
            <div>
                Weather: {props.weatherStatus}
            </div>
            <div>
                Feels Like: {props.feels_like}°C
            </div>
            <div>
                Wind: {props.windSpeed} km/h
            </div>
            <div>
                Humidity: {props.humidity}%
            </div>
            <div>
                Visibility: {props.visibility} km
            </div>
            <div>
                Pressure: {props.pressure} mb
            </div>
            <div>
                Sunrise: {props.sunrise}
            </div>
        </div>
    );
}

export default DisplayUI;