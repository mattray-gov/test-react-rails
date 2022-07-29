import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchVBMS, switchBGS, switchVACOLS } from "../reducers/testAppReducer";

const AdminPage = () => {
    const dispatch = useDispatch()
    var {vbms, bgs, vacols} = useSelector((state) => state.banners)

    return (
        <div>
            <h1>Admin Page</h1>
            <button
                onClick={() => dispatch(switchVBMS())}
            > VBMS is <span>{vbms.isOn ? "on" : "off"}</span></button>
            <button
                onClick={() => dispatch(switchBGS())}
            > BGS is <span>{bgs.isOn ? "on" : "off"}</span></button>
            <button
                onClick={() => dispatch(switchVACOLS())}
            > VACOLS is <span>{vacols.isOn ? "on" : "off"}</span></button>
            <Link to="/">Go home</Link>
        </div>

    )
}

export default AdminPage;