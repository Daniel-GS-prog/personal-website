import React from "react";
import './Navbar.css';

const Narvbar = () => {
    return (
        <div className="display-flex"> 
            <div className="mx-5 text-center fs-2"> Daniel Gonzalez
            </div>
            <div className="mx-5 w-50 ">
                <ul className="d-flex justify-content-around align-items-center">
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Github</li>
                </ul>
                
            </div>
        </div>
    );

}

export default Narvbar;