import React from 'react';
import MovieHero from '../components/MovieHero/MovieHero.component';
import Rupay from "../layouts/Rupay.jpg"
import FilmyPass from "../layouts/FilmyPass.jpg"
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { RecommendedImages} from "../config/Poster.config";

const MoviesPage = () => {

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

    return (
        <>
            <MovieHero />
        <div className="container lg:ml-16 px-4 lg:w-3/4">
                <h2 className="text-gray-800 font-bold text-2xl mt-6 mb-2 mx-6">
                    About the Movie
                </h2>
                <p className="text-gray-700 text-md px-6">
                Bruce Wayne and Diana Prince try to bring the metahumans of Earth together 
                after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth 
                with an army to subjugate humans.
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
                <div className="flex flex-wrap items-center mx-4 gap-8">
                    <Cast 
                    image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
                    name="Ben Affleck"
                    role="Batman/ Bruce Wayne"
                    />

                    <Cast 
                    image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
                    name="Henry Cavill"
                    role="Superman/ Clark Kent"
                    />

                    <Cast
                    image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                    name="Gal Gadot"
                    role="Wonder Woman/ Diana Prince"
                    />

                    <Cast
                    image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
                    name="Ray Fisher"
                    role="Cyborg/ Victor Stone"
                    />
                </div>
                </div>

                <div className="my-10">
                        <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                    config={settings}
                    images={RecommendedImages}
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
                    images={RecommendedImages}
                    title="BMS Xclusive"
                    isDark={false}
                    />
                </div>
        </div>
        </>
    );
}


export default MoviesPage;