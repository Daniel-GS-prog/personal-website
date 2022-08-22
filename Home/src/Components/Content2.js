import React from "react";
import './Content2.css';
import Content3 from './Content3';
import Content4 from "./Content4";


const Content2 = (props) => {
    return(
        <div className="content2-display">
        {props.children}
        </div>
    );
}

export default Content2;