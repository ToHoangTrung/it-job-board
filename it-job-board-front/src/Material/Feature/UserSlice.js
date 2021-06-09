import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import UserApi from "../Api/UserApi";

export const userLogin = createAsyncThunk(
    'user/signIn',
    async (params, thunkAPI) => {
        const response = await UserApi.login(params);
        const { access_token, token_type} = response;
        localStorage.setItem('token_type', token_type)
        localStorage.setItem('access_token', access_token);
    }
);

export const userGetMe = createAsyncThunk(
    'user/getMe',
    async (params) => UserApi.getMe(params)
);

export const userSignUp = createAsyncThunk('user/userSignUp', async (userInfo, {rejectWithValue}) => {
    try{
        const response = await axios.post(`/api/users/auth/signup`,
            {
                'username': userInfo.username,
                'password': userInfo.password,
                'email': userInfo.email,
                'role': [userInfo.role],
            })
        return response.data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
});

export const userSignIn = createAsyncThunk('user/userSignIn', async (userInfo, { rejectWithValue }) => {
    try{
        const response = await axios.post(`/api/users/auth/signin`,
            {
                'username': userInfo.username,
                'password': userInfo.password,
            })
        return response.data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
});

export const getMe = createAsyncThunk('user/getMe', async () => {
    const response = await axios.get(`/api/users/auth/me/`,{
        headers: {
            Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
        }
    })
    return response.data
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
    },
    reducers: {
        logOut: state => {
            state.currentUser = {}
            localStorage.setItem('access_token', '')
            localStorage.setItem('token_type', '')
        }
    },
    extraReducers: {
        [getMe.fulfilled]: (state, action) => {
            state.currentUser = action.payload || {};
        }
    }
})

export default userSlice.reducer

export const getCurrentUser = state => state.auth.currentUser

export const { logOut } = userSlice.actions
