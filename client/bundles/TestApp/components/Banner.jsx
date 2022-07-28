import React from "react";

const Banner = ({message}) => {
    
return (
    <div style={{backgroundColor: "rgba(255, 0, 0, 0.5)", padding: "5px"}}>
        <p>{message}</p>
    </div>
)
}

export default Banner;