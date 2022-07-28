import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
    Switch
} from "react-router-dom";
import store from "../store/testAppStore"
import AdminPage from "./AdminPage";
import Home from "./Home";



const TestApp = () => {


    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default TestApp;