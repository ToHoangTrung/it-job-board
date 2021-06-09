import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import axiosClient from "../../axiosClient";

export const fetchAllSubCatalog = createAsyncThunk('catalog/fetchAllSubCatalog', async () => {
    try{
        // const url = "/api/catalog/sub";
        // await axiosClient.get(url, payload);
        const response = await axiosClient.get(`/api/catalog/sub`);
        return response.data
    }catch(err){
        throw new Object(err.response.data);
    }
});

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        catalogs: [],
        subCatalogs: [],
    },
    reducers: {
    },
    extraReducers: {
        [fetchAllSubCatalog.fulfilled]: (state, action) => {
            state.subCatalogs = action.payload || [];
        }
    }
})

const { reducer: catalogReducer } = catalogSlice;
export default catalogReducer;

export const selectAllSubCatalog  = (state) => state.catalog.subCatalogs;
