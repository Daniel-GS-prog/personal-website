import React from "react";

const DisplayFlex = (props) => {
    return (
        <div className="d-flex border border-primary h-50">
        {props.children}
    </div>
    );
    
}

export default DisplayFlex;