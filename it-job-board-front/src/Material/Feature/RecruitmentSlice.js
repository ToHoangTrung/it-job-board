import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const searchRecruitments = createAsyncThunk('recruitment/searchRecruitment', async (keyword) => {
    try{
        const response = await axiosClient.get(`/api/recruitment/search`, keyword);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchAllRecruitmentPosition = createAsyncThunk('recruitment/fetchAllRecruitmentPosition', async () => {
    try{
        const response = await axiosClient.get(`/api/recruitment/position`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const recruitmentSlice = createSlice({
    name: 'recruitment',
    initialState: {
        recruitments: [],
        positions: [],
    },
    reducers: {
    },
    extraReducers: {
        [searchRecruitments.fulfilled]: (state, action) => {
            state.recruitments = action.payload || [];
        },
        [fetchAllRecruitmentPosition.fulfilled]: (state, action) => {
            state.positions = action.payload || [];
        }
    }
})

const { reducer: recruitmentReducer } = recruitmentSlice;
export default recruitmentReducer;

export const selectAllRecruitment  = (state) => state.recruitment.recruitments;
export const selectAllRecruitmentPosition = (state) => state.recruitment.positions;