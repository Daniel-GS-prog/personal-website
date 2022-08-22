import React from "react";
import './Navbar.css';


const Navbar = () => {
    return(
        <div className="navbar-display">

            <ul className="ul-navbar">
                <li><h1 className="name">Daniel Gonzalez</h1></li>
                <li className="software">Software developer</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Github</li>
            </ul>
        </div>
    );
}

export default Navbar;