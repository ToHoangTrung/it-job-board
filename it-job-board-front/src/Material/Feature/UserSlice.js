import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosClient from "../../axiosClient";

export const userLogin = createAsyncThunk('user/login',
    async (params, {rejectWithValue}) => {
        try {
            const response = await axiosClient.post("/api/auth/login", params)
            const { token, type} = response.data;
            localStorage.setItem('token_type', type)
            localStorage.setItem('access_token', token);
        } catch (err) {
            throw new rejectWithValue(err.response.data);
        }
    }
);

export const userRegister = createAsyncThunk('user/register',
    async (params, {rejectWithValue}) => {
    try {
        const response = await axiosClient.post(`/api/auth/register`, params);
        return response.data;
    } catch (err) {
        throw new rejectWithValue(err.response.data);
    }
});

export const userGetInfo = createAsyncThunk('user/getInfo',
    async (params,{rejectWithValue}) => {
    try{
        const response = await axiosClient.get('/api/auth/getInfo');
        return response.data;
    } catch (err) {
        throw new rejectWithValue(err.response.data);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
    },
    reducers: {
        userLogOut: state => {
            state.currentUser = {}
            localStorage.setItem('access_token', '')
            localStorage.setItem('token_type', '')
        }
    },
    extraReducers: {
        [userGetInfo.fulfilled]: (state, action) => {
            state.currentUser = action.payload || {};
        }
    }
})

const { reducer: userReducer } = userSlice;
export default userReducer;

export const getCurrentUser = state => state.user.currentUser

export const { userLogOut } = userSlice.actions
