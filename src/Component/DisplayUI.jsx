import React from 'react';
import Description from './Description';

//Displaying UI
const DisplayUI = (props) => {
    return (
        <>

            {props.cod === 200 ? <div className={'main-container'} >

                <div className='location-container'>
                    {props.location}
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
                        <div>
                        </div>
                    </div>

                </div>

            </div> : <h1 className='not-found-container'>Location Not Found !</h1>}

        </>



    );
}

export default DisplayUI;