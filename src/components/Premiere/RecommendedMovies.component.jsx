import React from "react";
import Slider from "react-slick";
import { RecommendedImages } from "../../config/Poster.config";
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import Poster from "../Poster/poster.component";

export const RecommendedMovies = () =>
{
    return (
        <>
            <Slider {...PosterCarouselSettings}>
            {RecommendedImages.map((image) => (
                <Poster {...image}/>
            ))}
            </Slider>
        </>
    )
}

export default RecommendedMovies;