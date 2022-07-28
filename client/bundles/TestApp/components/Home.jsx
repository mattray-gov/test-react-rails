import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { getBanners } from "../utils/API";

const Home = () => {
    const [banners, setBanners] = useState(useSelector((state) => state.banners))

   

    return (
        <React.Fragment >
            {banners &&
                 Object.keys(banners).map((service, i) => {
                      if (banners[service].isOn) {
                          return (
                              <Banner key={i} message={banners[service].message} />
                          )
                      }
                 })
                
                }
            
            <h1>Test App</h1>
            <div>
                Welcome to the test app
            </div>
            <Link to="admin">Admin page</Link>
        </React.Fragment>
    )
}

export default Home;