import { createSlice } from "@reduxjs/toolkit";

export const bannersSlice = createSlice({
    name: "banners",
    initialState: {
        vbms: {
            message: "VBMS is down",
            isOn: false
        },
        bgs: {
            message: "BGS is down",
            isOn: false
        },
        vacols: {
            message: "VACOLS is down",
            isOn: false
        },
    },
    reducers: {
        switchVBMS: (state) => {
            state.vbms.isOn = !state.vbms.isOn 
        },
        switchBGS: (state) => {
            state.bgs.isOn = !state.bgs.isOn 
        },
        switchVACOLS: (state) => {
            state.vacols.isOn = !state.vacols.isOn 
        },
    },
})

export const { switchVBMS, switchBGS, switchVACOLS } = bannersSlice.actions

export default bannersSlice.reducer