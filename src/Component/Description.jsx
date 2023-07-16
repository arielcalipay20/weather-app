import React from 'react';
import Sun from '../icons/sun.png';
import Cloud from '../icons/cloud_icon.png';
import Fog from '../icons/fog_icon.png';
import Rain from '../icons/rain_icon.png';
import Snow from '../icons/snow_icon.png';
import Thunder from '../icons/thunderstorm_icon.png';


const Description = (props) => {

    const getDescription = (e) => {
        if (props.description.includes('cloud')) {
            return <img className='img-container' src={Cloud} alt={''} />
        } else if (props.description.includes('clear')) {
            return <img className='img-container' src={Sun} alt={''} />
        } else if (props.description.includes('rain')) {
            return <img className='img-container' src={Rain} alt={''} />
        } else if (props.description.includes('thunderstorm')) {
            return <img className='img-container' src={Thunder} alt={''} />
        } else if (props.description.includes('snow')) {
            return <img className='img-container' src={Snow} alt={''} />
        } else if (props.description.includes('mist') || props.description.includes('fog')) {
            return <img className='img-container' src={Fog} alt={''} />
        } else {
            return <img className='img-container' src={Cloud} alt={''} />
        }
    }

    return (
        <div className='icons-container'>
            {getDescription()}
        </div>
    );
}

export default Description;