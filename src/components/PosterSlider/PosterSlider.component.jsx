import React from 'react';
import Slider from 'react-slick';
import PosterCarouselSettings from '../../config/PosterCarousel.config';
import Poster from '../Poster/poster.component';

const PosterSlider = (props) => {

    const sliderConfig = props.config? props.config : PosterCarouselSettings;

    return (
        <>
        <div className="flex flex-col items-start justify-between py-2 px-4">
            <h3 className={`text-2xl font-bold 
            ${props.isDark ? "text-white" : "text-gray-800"}`}>
                {props.title}
            </h3>
            <p className={`text-sm 
            ${props.isDark ? "text-white" : "text-gray-800"}`}>
                {props.subtitle}
            </p>
        </div>
            <Slider {...sliderConfig}>
            {props.images.map((image) => (
                <Poster {...image} isDark={props.isDark} />
            ))}
            </Slider>
        </>
    )
}

export default PosterSlider;
