import React from 'react'

const MovieInfo = () => {
    return (
        <>
            <div>
                <div className="flex items-center px-6 gap-3">
                    <div className="w-24 h-5 mx-1 md:mx-4 my-2 lg:my-4 ">
                        <img
                        src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                        alt="Premiere"
                        className="w-full h-full"
                        />
                    </div>
                    <span className="bg-coolGrey-700 px-2 my-2 lg:my-4 text-white rounded-md text-xs">
                        Streaming Now
                    </span>
                </div>
                <h1 className="hidden lg:block lg:text-4xl text-white font-bold px-8">
                    Zack Snyder's Justice League
                </h1>
                <div className="flex flex-col-reverse lg:flex-col">
                
                <div className="flex items-center py-2 lg:py-4 px-8">
                    <h4 className="text-xs md:text-base text-white ">
                        English  &bull;  Languages:
                    </h4>
                    <h4 className="text-xs md:text-base text-coral-400 mx-2">
                        Audio(1), Subtitles(1)
                    </h4>
                </div>
                <h4 className=" text-xs md:text-base text-white py-2 lg:py-4 px-8">
                        4h 1m &bull; Action,Adventure,Fantasy &bull; 16+ &bull; 18 Mar 2021
                </h4>
                
                <div className="flex items-center md:w-screen lg:w-full gap-3">
                    <button className="bg-coral-500 w-full text-white font-bold my-2 mx:2 lg:mx-6 px-4 py-2 md:py-3 rounded-lg">
                        Rent ₹149
                    </button>
                    <button className="bg-coral-500 w-full text-white font-bold my-2 mx:2 lg:mx-6 px-4 py-2 md:py-3 rounded-lg">
                        Buy ₹689
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default MovieInfo;
