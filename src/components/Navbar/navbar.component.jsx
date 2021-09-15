import React from "react";
import { BiChevronRight, BiMenu } from "react-icons/bi";
import { MdArrowDropDown, MdMovieCreation } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-2xl">
                        It All Starts Here!
                    </h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        NCR <BiChevronRight />
                    </span>
                </div>
                <div className="w-5 h-5">
                    <BsSearch className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

const NavMd = () => {
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BsSearch />
            <input type="search" 
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
            />
        </div>
    );
}

const NavLg = () => {
    return(
        <>
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    {/* logo */}
                    <div className="w-15 h-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3IQriNpgCko1xpMDPwqA7HrlzbeRC42Xxgn9CHbZqnyZ4n1UCdjy8bieAv-BVL-4Lg&usqp=CAU"
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

const NavSm2 = () => {
    return (
        <>
            {/* <div className="container mx-auto px-4 py-1">
                <div className="text-gray-300 text-sm flex items-center gap-14">
                    <RiMovie2Line />
                    <MdMovieCreation />
                </div>
                <div className="text-gray-300 text-sm flex items-center gap-4">
                    <h1>Movies</h1>
                    <h1>Stream</h1>
                    <h1>Events</h1>
                    <h1>Plays</h1>
                    <h1>Sports</h1>
                    <h1>Activities</h1>
                    <h1>Buzz</h1>
                </div>
            </div> */}
        </>
    )
}

const NavMd2 = () => {
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

const Navbar = () => {
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
            <nav className="bg-darkGrey-800 p-2">
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <NavSm2 />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/*Tablet Screen*/}
                    <NavMd2 />
                </div>
                <div className="hidden lg:flex">
                    {/*Laptop/TV Screen*/}
                    <NavLg2 />
                </div>
            </nav>
        </>
    );
}

export default Navbar;