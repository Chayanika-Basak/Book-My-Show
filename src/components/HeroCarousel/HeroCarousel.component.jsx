import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component"

const HeroCarousel = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {

        const requestNowPlayingMovies = async () => {
        const getImages = await axios.get("/movie/now_playing");
        setImages(getImages.data.results);
        };

        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    // const images = [
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630951639039_chokhihavelitheurbanvillageexperience_webshowcase_1240x300_6sep.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1630993174880_rannutsavpromotionalbanners_webshowcase_1240x300.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1631003837980_gauravkapoorlivestandupcomedyshow_webshowcase_1240x300_7sep.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    //     "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg"
    // ]

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-48 md:w-full md:h-96 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousel;