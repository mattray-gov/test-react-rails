import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchVBMS, switchBGS, switchVACOLS } from "../reducers/testAppReducer";

const AdminPage = () => {
    const dispatch = useDispatch()
    var bannerData = useSelector((state) => state.banners)

    return (
        <div>
            <h1>Admin Page</h1>
            <button
                onClick={() => dispatch(switchVBMS())}
            > VBMS</button>
            <button
                onClick={() => dispatch(switchBGS())}
            > BGS</button>
            <button
                onClick={() => dispatch(switchVACOLS())}
            > VACOLS</button>
            <Link to="/">Go home</Link>
        </div>

    )
}

export default AdminPage;