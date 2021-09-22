import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Slider from 'react-slick';

//Component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//context
import { MovieContext } from '../context/Movie.context';

//images
import Rupay from "../layouts/Rupay.jpg"
import FilmyPass from "../layouts/FilmyPass.jpg"


const MoviesPage = () => {

    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
        const getCast = await axios.get(`/movie/${id}/credits`);
        setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
        const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
        setSimilarMovies(getSimilarMovies.data.results);
        };

        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async () => {
        const getRecommendedMovies = await axios.get(
            `/movie/${id}/recommendations`
        );
        setRecommended(getRecommendedMovies.data.results);
        };

        requestRecommendedMovies();
    }, [id]);

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        ],
    };
    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        ],
    };

    return (
        <>
            <MovieHero />
        <div className="container lg:ml-16 px-4 lg:w-3/4">
                <h2 className="text-gray-800 font-bold text-2xl mt-6 mb-2 mx-6">
                    About the Movie
                </h2>
                <p className="text-gray-700 text-md px-6">
                {movie.overview}
                </p>
                <div className="my-10">
                    <hr />
                </div>

                <div className="my-10">
                    <h1 className="text-gray-800 font-bold text-2xl my-6 mx-6">
                        Applicable Offers
                    </h1>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        {/* RuPay */}
                        <div className="flex items-start w-full mb-6 gap-2 p-2 border-lightYellow-400 border-dashed border-2 w-1/2 rounded-lg bg-lightYellow-50">
                            <div className="m-2 w-10 h-8">
                                <img
                                src={Rupay}
                                alt="RuPay"
                                className="w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-start mx-4">
                            <h3 className="text-gray-700 font-bold text-lg">RuPay Stream Offer</h3>
                            <p className="text-gray-600">
                                Get 50% off upto INR 150 on all RuPay cards 
                                on BookMyShow Stream
                            </p>
                            </div>
                        </div>

                        {/* Filmy Pass */}
                        <div className="flex items-start w-full mb-6 gap-2 p-2 border-lightYellow-400 border-dashed border-2 w-1/2 rounded-lg bg-lightYellow-50">
                            <div className="m-2 w-12 h-8">
                                <img
                                src={FilmyPass}
                                alt="Filmy Pass"
                                className="w-full h-full"
                                />
                            </div>
                            <div className="flex flex-col items-start mx-4">
                            <h3 className="text-gray-700 font-bold text-lg">Filmy Pass</h3>
                            <p className="text-gray-600">
                                Get Rs 75 off on 3 movies you buy/rent on Stream Filmy
                                Pass @Rs 99
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="my-10">
                        <hr />
                    </div>
                    <h2 className="text-gray-800 font-bold text-2xl my-6 mx-6">
                        Cast and Crew
                    </h2>
                

                    <Slider {...settingsCast}>
                        {cast.map((castdata) => (
                            <Cast
                                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                                name={castdata.original_name}
                                role={castdata.character}
                            />
                        ))}
                    </Slider>
                
                </div>

                <div className="my-10">
                        <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                    config={settings}
                    images={similarMovies}
                    title="You might also like"
                    isDark={false}
                    />
                </div>

                <div className="my-10">
                        <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                    config={settings}
                    images={recommended}
                    title="BMS Xclusive"
                    isDark={false}
                    />
                </div>
        </div>
        </>
    );
}


export default MoviesPage;