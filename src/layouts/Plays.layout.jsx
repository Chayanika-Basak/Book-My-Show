import React from "react";
import PlaysNavbar from "../components/Navbar/playsNavbar.component";

const PlaysLayout = (props) => {
    return (
    <>
        <PlaysNavbar />
        {props.children}
    </>
    );
}

export default PlaysLayout;