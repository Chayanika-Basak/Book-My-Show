import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 mx-2 lg:mx-8 my-8">
                    Best of Entertainment
                </h1>
                <EntertainmentCardSlider />
            </div>
        </>
    )
}

export default HomePage;