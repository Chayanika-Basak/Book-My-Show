import React from "react";
import Slider from "react-slick";
import { PremierImages } from "../../config/Poster.config";
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import Poster from "../Poster/poster.component";

export const Premiere = () =>
{
    return (
        <>
        <div className="flex flex-col items-start justify-between py-6 px-4">
            <h3 className="text-white text-xl font-bold">Premieres</h3>
            <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
            <Slider {...PosterCarouselSettings}>
            {PremierImages.map((image) => (
                <Poster {...image} isDark />
            ))}
            </Slider>
        </>
    )
}

export default Premiere;