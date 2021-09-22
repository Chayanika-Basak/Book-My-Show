import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/Movie.context";

const Poster = (props) => {
    const {movie} = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(", ");

    return (
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-40 md:h-80">
                    <img src ={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} 
                    className="w-full h-full rounded-md md:rounded-xl" />
                </div>
                <h3 className={`text-lg font-bold 
                ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {props.original_title}
                </h3>
                <p className={`text-sm 
                ${props.isDark ? "text-white" : "text-gray-700"}`}>
                    {genres}
                </p>
            </div>
        </Link>
    )
}

export default Poster;