import React from 'react';
import Description from './Description';

const DisplayUI = (props) => {
    return (
        <div className={props.location === 'Bagong Pagasa' ? 'main-container' : props.location === 'City of Meycauayan' ? 'main-container1' : props.location === 'Parada' ? 'main-container3' : props.location === 'Santa Cruz' ? 'main-container2' : 'main-container'}>


            <div className='location-container'>
                {props.location === 'Bagong Pagasa' ? 'Quezon City' : props.location === 'City of Meycauayan' ? 'Caloocan City' : props.location === 'Parada' ? 'Valenzuela City' : props.location === 'Santa Cruz' ? 'Manila' : props.location}
            </div>
            <div className='second-container'>

                <div className='temperature-container'>
                    <div>
                        <Description description={props.weatherStatus} />
                    </div>
                    <div className='temperature-txt'>
                        {props.temperature}°C
                    </div>
                </div>

                <div className='weather-container'>
                    <div>
                        {props.weatherStatus.toUpperCase()}
                    </div>
                    <div>
                        Feels Like: {props.feels_like}°
                    </div>
                </div>

                <div className='sub-second-container'>
                    <div>
                        Wind: <span>{props.windSpeed} km/h</span>
                    </div>
                    <div>
                        Humidity: <span>{props.humidity}%</span>
                    </div>
                    <div>
                        Visibility: <span>{props.visibility} km</span>
                    </div>
                    <div>
                        Pressure: <span>{props.pressure} mb</span>
                    </div>
                    {/* <div>
                        Sunrise: <span>{props.sunrise}</span>
                    </div> */}
                </div>

            </div>

        </div>
    );
}

export default DisplayUI;