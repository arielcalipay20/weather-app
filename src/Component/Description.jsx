import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';


const Description = (props) => {
    const getDescription = (e) => {
        if (props.description.includes('cloud')) {
            return <FontAwesomeIcon icon={faCloud} />
        } else if (props.description.includes('clear')) {
            return <FontAwesomeIcon icon={faSun} />
        } else if (props.description.includes('rain')) {
            return <FontAwesomeIcon icon={faCloudRain} />
        } else if (props.description.includes('thunderstorm')) {
            return <FontAwesomeIcon icon={faCloudBolt} />
        } else if (props.description.includes('snow')) {
            return <FontAwesomeIcon icon={faSnowflake} />
        } else if (props.description.includes('mist') || props.description.includes('fog')) {
            return <FontAwesomeIcon icon={faSmog} />
        } else {
            return <FontAwesomeIcon icon={faCloud} />
        }

    }
    return (
        <div className='icons-container'>
            {getDescription()}
        </div>
    );
}

export default Description;