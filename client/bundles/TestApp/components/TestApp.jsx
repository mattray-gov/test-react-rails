import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../store/testAppStore"
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
        <Provider store={store}>
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
        </Provider>
    )
}

export default TestApp;