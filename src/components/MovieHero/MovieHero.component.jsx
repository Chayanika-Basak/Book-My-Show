import React, {useContext} from 'react'
import { MovieContext } from '../../context/Movie.context'
import MovieInfo from './MovieInfo.component'
import poster from "./zack-snyder-s-justice-league-poster.jpg"
import posterlg from "./zack-snyder-s-justice-league-posterlg.jpg"

const MovieHero = () => {
    return (
        <>
            <div>
                {/* Mobile Screen */}
                <div className="relative md:hidden w-full" 
                style={{height: "calc(180vw)"}}>

                    <div className="absolute z-20 bottom-10">
                        <MovieInfo />
                    </div>

                    <div 
                    className="w-full h-56 bg-opacity-70 absolute bg-black z-10 bottom-0" 
                    />

                    <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="Poster"
                    className="w-full h-full"
                    />

                </div>

                {/* Tablet Screen */}
                <div className="relative hidden md:block lg:hidden"
                 style={{height: "calc(96vw)"}}>
                    <div className="w-full h-56 bg-opacity-70 absolute bg-black z-10 bottom-0" />
                    <div className="absolute z-20 bottom-4">
                        <MovieInfo />
                    </div>
                    <img
                        src={poster}
                        alt="Poster"
                        className="w-full h-full"
                    />
                    
                </div>

                {/* Laptop Screen */}
                <div className="relative hidden lg:block" 
                style={{height: "30rem"}}>

                    
                    <div className="absolute z-10 w-full h-full" 
                    style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    
                    <div className="absolute z-30 left-24 top-10 flex items-center">
                    <div className=" w-64 h-96 ">
                        <img
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="poster"
                        className="w-full h-full rounded-xl"
                        />
                    </div>
                    <div>
                        <MovieInfo />
                    </div>
                    </div>
                    <img
                        src={posterlg}
                        alt="Poster"
                        className="w-full h-full"
                        />
                </div>
            </div>
        </>
    )
}

export default MovieHero;
