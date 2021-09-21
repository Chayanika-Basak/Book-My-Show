import React, {useContext} from "react";
import { BiMenu, BiShareAlt } from "react-icons/bi";
import { MdArrowDropDown} from "react-icons/md";
import { BsSearch } from "react-icons/bs";
// import { RiMovie2Line } from "react-icons/ri";  MdMovieCreation
import logo from "./bookmyshowlogocropped.jpg"
import { MovieContext } from "../../context/Movie.context";


const NavSm = () => {

    const {movie} = useContext(MovieContext);
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl md:text-3xl font-bold">
                        {movie.original_title}
                    </h3>
                </div>

                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full"/>
                </div>
                
            </div>
        </>
    )
}

const NavLg = () => {
    return(
        <>
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center w-3/5 gap-3">
                    {/* logo */}
                    <div className="w-44 h-10">
                        <img src={ logo }
                        alt="logo"
                        className="w-full h-full"
                        />
                    </div>

                    {/* Search Bar */}

                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BsSearch />
                    <input type="search" 
                    className="w-30 bg-transparent border-none focus:outline-none"
                    placeholder="Search for movies, events, plays, sports and activities"
                    />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-200 text-sm flex items-center hover:text-white cursor-pointer">
                        NCR <MdArrowDropDown />
                    </span>
                    <div className="flex items-center justify-center">
                    <button className="w-20 h-7 bg-coral-300 text-white text-sm px-2 py-1 rounded">
                        Sign in
                    </button>
                    </div>
                    <div className="text-white text-3xl cursor-pointer">
                        <BiMenu />
                    </div>
                </div>
            </div>
        </>
    )
}


 const NavLg2 = () => {
     return (
         <>
             <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                 <div className="text-gray-300 text-sm w-3/5 flex items-center gap-4">
                     <h1>Movies</h1>
                     <h1>Stream</h1>
                     <h1>Events</h1>
                     <h1>Plays</h1>
                     <h1>Sports</h1>
                     <h1>Activities</h1>
                     <h1>Buzz</h1>
                 </div>
                 <div className="text-gray-300 text-sm flex items-center gap-4">
                     <h1>ListYourShow</h1>
                     <h1>Coorporates</h1>
                     <h1>Offers</h1>
                     <h1>Gift Cards</h1>
                 </div>
             </div>
         </>
     )
 }

const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-coolGrey-700 p-4">
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <NavSm />
                </div>
                <div className="hidden md:block lg:hidden">
                    {/*Tablet Screen*/}
                    <NavSm />
                </div>
                <div className="hidden w-full lg:flex">
                    {/*Laptop/TV Screen*/}
                    <NavLg />
                </div>
            </nav>
            <nav className="bg-darkGrey-800 p-2">
                <div className="hidden w-full lg:flex">
                        {/* Laptop/TV Screen */}
                    <NavLg2 />
                </div>
            </nav> 
        </>
    );
}

export default MovieNavbar;