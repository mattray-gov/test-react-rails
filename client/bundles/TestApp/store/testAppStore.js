import { configureStore } from "@reduxjs/toolkit";
import bannersReducer from "../reducers/testAppReducer"

export default configureStore({
    reducer: {
        banners: bannersReducer,
    },
})