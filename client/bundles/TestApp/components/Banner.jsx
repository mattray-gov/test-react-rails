import React from "react";

const Banner = ({ Banners }) => {

    const generateMessages = (arr) => {
        return arr.map((banner) => {
            if (banner.isOn){
            return <p>{banner.message}</p>
            }
        })
    }

    console.log(generateMessages(Banners));
    return (
        <div style={{ backgroundColor: "rgba(255, 0, 0, 0.5)", padding: "5px" }}>

            {Banners &&
                generateMessages(Banners)}
        </div>
    )
}

export default Banner;