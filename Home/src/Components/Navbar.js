import React from "react";
import './Navbar.css';
import LinkedIn from '../images/linkedIn.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';


const Navbar = () => {
    return(
        <div className="navbar-display">

            <ul className="ul-navbar">
                <li className="name">Daniel Gonzalez</li>
                <li className="software">Software developer</li>
                <li className='icon'><a href="https://www.linkedin.com/in/daniel-g-s/" target="_blank"><img src={LinkedIn}/></a> </li>
                <li className='icon'><a href="https://twitter.com/MrHeldenberg" target="_blank"><img src={twitter}/></a></li>
                <li className='icon'><a href="https://github.com/Daniel-GS-prog" target="_blank"><img src={github}/></a></li>
            </ul>
        </div>
    );
}

export default Navbar;