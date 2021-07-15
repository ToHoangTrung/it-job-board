import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosClient from "../../axiosClient";

export const fetchRecruiterById = createAsyncThunk('recruitment/fetchRecruiterById', async (id) => {
    try{
        const response = await axiosClient.get(`/api/recruiter/get-one/${id}`);
        const recruiter = response.data;
        fetch(process.env.PUBLIC_URL + `/assets/recruiter/overview/${recruiter.overviewContentUrl}`)
                .then((r) => r.text())
                .then(text  => recruiter.overview = text);
        return recruiter;
    }catch(err){
        throw new Object(err.response.data);
    }
});

const recruiterSlice = createSlice({
    name: 'recruiter',
    initialState: {
    },
    reducers: {
    },
})

const { reducer: recruiterReducer } = recruiterSlice;
export default recruiterReducer;

