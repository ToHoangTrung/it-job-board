import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const fetchRecruitmentByCriteria = createAsyncThunk('recruitment/fetchRecruitmentByCriteria', async (keyword) => {
    try{
        const response = await axiosClient.get(`/api/recruitment/search?${keyword}`);
        return response.data.content;
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchRecruitmentDetailById = createAsyncThunk('recruitment/fetchRecruitmentDetailById', async (id) => {
    try{
        const response = await axiosClient.get(`/api/recruitment/search?keyword=id:${id}&page=1`);
        return response.data.content[0];
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchAllRecruitmentPosition = createAsyncThunk('recruitment/fetchAllRecruitmentPosition', async () => {
    try{
        const response = await axiosClient.get(`/api/recruitment/get-all-position-filter`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchAllRecruitmentCity = createAsyncThunk('recruitment/fetchAllRecruitmentCity', async () => {
    try{
        const response = await axiosClient.get(`/api/recruitment/get-all-city-filter`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchAllRecruitmentExperience = createAsyncThunk('recruitment/fetchAllRecruitmentExperience', async () => {
    try{
        const response = await axiosClient.get(`/api/recruitment/get-all-experience-filter`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const fetchAllApplyOrFavoriteRecruitmentOfCandidate = createAsyncThunk('recruitment/fetchAllApplyOrFavoriteRecruitmentOfCandidate', async () => {
    try{
        const response = await axiosClient.get(`/api/candidate/get-all/apply-or-favorite/current-user/saved-recruitment`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

export const createNewRecruitment = createAsyncThunk('recruitment/createNewRecruitment', async (params) => {
    try {
        return await axiosClient.post('/api/recruitment/create-new', params);
    } catch (err){
        throw new Object(err.response.data)
    }
})

const recruitmentSlice = createSlice({
    name: 'recruitment',
    initialState: {
        recruitments: [],
        positions: [],
        cities: [],
        experiences: [],
    },
    reducers: {
    },
    extraReducers: {
        [fetchRecruitmentByCriteria.fulfilled]: (state, action) => {
            state.recruitments = action.payload || [];
        },
        [fetchAllRecruitmentPosition.fulfilled]: (state, action) => {
            state.positions = action.payload || [];
        },
        [fetchAllRecruitmentCity.fulfilled]: (state, action) => {
            state.cities = action.payload || [];
        },
        [fetchAllRecruitmentExperience.fulfilled]: (state, action) => {
            state.experiences = action.payload || [];
        },
        [fetchAllApplyOrFavoriteRecruitmentOfCandidate.fulfilled]: (state, action) => {
            state.recruitments = action.payload || [];
        },
    }
})

const { reducer: recruitmentReducer } = recruitmentSlice;
export default recruitmentReducer;

export const selectAllRecruitment  = (state) => state.recruitment.recruitments;
export const selectAllRecruitmentPosition = (state) => state.recruitment.positions;
export const selectAllRecruitmentCity = (state) => state.recruitment.cities;
export const selectAllRecruitmentExperience = (state) => state.recruitment.experiences;
