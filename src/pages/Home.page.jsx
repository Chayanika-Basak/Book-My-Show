import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { RecommendedImages, PremierImages, OnlineStreamingImages } from "../config/Poster.config";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="container mx-auto py-6 px-4">
                    <PosterSlider
                    images={RecommendedImages}
                    title="Recommended Movies"
                    isDark={false}
                    />
                </div>
            </div>
            <div className="container mx-auto px-4">
                    <div className="py-8 mx-6">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
                            alt="Stream Banner"
                        />
                    </div>
            </div>
            <div className="container mx-auto px-4"> 
                <h1 className="text-2xl font-bold text-gray-800 mx-2 lg:mx-8 py-2">
                    Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>
                    <div className="bg-blueGrey-700">
                        <div className="hidden md:flex">
                                <img 
                                    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                    alt="Premiere"
                                    className="w-full h-full px-4"
                                />
                        </div>

                        <div className="w-full px-4">                   
                            <PosterSlider 
                            images={PremierImages} 
                            title="Premieres" 
                            subtitle="Brand new releases every Friday" 
                            isDark={true}
                            />
                        </div>

                    </div>
                
            

            <div className="container mx-auto px-8 py-6">
                <PosterSlider
                images={OnlineStreamingImages}
                title="Online Streaming Events"
                isDark={false}
                />
            </div>

            <div className="container mx-auto px-8 py-6">
                <PosterSlider
                images={OnlineStreamingImages}
                title="Outdoor Events"
                isDark={false}
                />
            </div>

            <div className="container mx-auto px-8 py-6">
                <PosterSlider
                images={OnlineStreamingImages}
                title="Laughter Therapy"
                isDark={false}
                />
            </div>

            <div className="container mx-auto px-8 py-6">
                <PosterSlider
                images={OnlineStreamingImages}
                title="Popular Events"
                isDark={false}
                />
            </div>

            <div className="container mx-auto px-8 py-6">
                <PosterSlider
                images={OnlineStreamingImages}
                title="Top Games and Sports Events"
                isDark={false}
                />
            </div>
        </>
    )
}

export default HomePage;