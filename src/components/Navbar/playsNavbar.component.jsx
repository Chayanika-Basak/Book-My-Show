import React from "react";
import { BiMenu} from "react-icons/bi";
import { MdArrowDropDown} from "react-icons/md";
import { BsSearch, BsChevronLeft } from "react-icons/bs";
// import { RiMovie2Line } from "react-icons/ri";  MdMovieCreation
import logo from "./bookmyshowlogocropped.jpg"

const NavSm = () => {

    return (
        <>
            <div className="w-full flex items-center gap-3 text-white">
                <BsChevronLeft className="h-6 w-6"/>
                <div className="flex flex-col">
                <h1 className="text-md">Plays</h1>
                <h2 className="text-xs">National Capital Region (NCR) | 11 Events</h2>
                </div>
                <BsSearch className="ml-14 w-4 h-4"/>
            </div>
        </>
    )
}

const NavSm2 = () => {
    return (
        <>
            <div className="flex flex-wrap items-center">
                <button className="text-md text-coral-400 rounded-full px-4 m-1 border-coolGrey-100 border-2">
                    Today
                </button>
                <button className="text-md text-coral-400 rounded-full px-4 m-1 border-coolGrey-100 border-2">
                    Tomorrow
                </button>
                <button className="text-md text-coral-400 rounded-full px-6 m-1 border-coolGrey-100 border-2">
                    This Weekend
                </button>
                <button className="text-md text-coral-400 rounded-full px-4 m-1 border-coolGrey-100 border-2">
                    Theatre
                </button>
                <button className="text-md text-coral-400 rounded-full px-4 m-1 border-coolGrey-100 border-2">
                    StoryTelling
                </button>
            </div>
        </>
    )
}

const NavMd = () => {
    return(
        <div className="w-full flex items-center gap-3 text-white px-3">
                <BsChevronLeft className="h-6 w-6"/>
                <div className="flex flex-col">
                <h1 className="text-lg">Plays</h1>
                <h2 className="text-sm">National Capital Region (NCR) | 11 Events</h2>
                </div>
            <BsSearch className="w-4 h-4"/>
        </div>
    );
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

const PlaysNavbar = () => {
    return (
        <>
            <nav className="bg-coolGrey-700 p-2">
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/*Tablet Screen*/}
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    {/*Laptop/TV Screen*/}
                    <NavLg />
                </div>
            </nav>
            <nav>
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <NavSm2 />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/*Tablet Screen*/}
                    <NavSm2 />
                </div>
                <div className="hidden lg:flex bg-darkGrey-800 p-2">
                    {/*Laptop/TV Screen*/}
                    <NavLg2 />
                </div>
            </nav>
        </>
    );
}

export default PlaysNavbar;