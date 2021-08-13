import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const removeCurrentUserFavoriteRecruitment = createAsyncThunk('candidate/removeCurrentUserFavoriteRecruitment', async (recruitmentId) => {
    try{
        console.log(recruitmentId)
        const response = await axiosClient.delete(`/api/candidate/remove/favorite/current-user/saved-recruitment`, {
            data: recruitmentId
        });
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const candidateSlice = createSlice({
    name: 'candidate',
    initialState: {
    },
    reducers: {
    },
})

const { reducer: candidateReducer } = candidateSlice;
export default candidateReducer;

