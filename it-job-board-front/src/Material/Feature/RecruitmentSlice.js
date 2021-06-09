import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const searchRecruitments = createAsyncThunk('recruitment/searchRecruitment', async (keyword) => {
    try{
        // const url = "/api/catalog/sub";
        // await axiosClient.get(url, payload);
        const response = await axiosClient.get(`/api/recruitment/search`, keyword);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const recruitmentSlice = createSlice({
    name: 'recruitment',
    initialState: {
        recruitments: [],
    },
    reducers: {
    },
    extraReducers: {
        [searchRecruitments.fulfilled]: (state, action) => {
            state.recruitments = action.payload || [];
        }
    }
})

const { reducer: recruitmentReducer } = recruitmentSlice;
export default recruitmentReducer;

export const selectAllRecruitment  = (state) => state.recruitment.recruitments;
