import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { getBanners } from "../utils/API";

const TestApp = () => {
    const [banners, setBanners] = useState()

    useEffect(() => {
        if (!banners) {
            getBanners(setBanners)
        }
    })

    return (
        <React.Fragment>
            {banners &&
                banners.map((banner, i) => {
                    if (banner.isOn) {
                        return (
                            <Banner key={i} message={banner.message} />
                        )
                    }
                })}
            
            <h1>Test App</h1>
            <div>
                Welcome to the test app
            </div>
        </React.Fragment>
    )
}

export default TestApp;