import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WeatherCall from './WeatherCall';

//Carousel UI
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

    // const letters = ['W', 'E', 'A', 'T', 'H', 'E', 'R'];
    // const letters1 = ['S', 'T', 'A', 'T', 'U', 'S'];
    return (

        <div className='carousel-container'>
            {/* <div className='title-txt-container'>
                <div className="waviy">
                    {letters.map((letter, index) => (
                        <span key={index} style={{ '--i': index + 1 }}>
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="waviy">
                    {letters1.map((letter, index) => (
                        <span key={index} style={{ '--i': index + 1 }}>
                            {letter}
                        </span>
                    ))}
                </div>
            </div> */}

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

export default WeatherUI;