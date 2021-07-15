import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from "./Material/Feature/CatalogSlice";
import recruitmentReducer from "./Material/Feature/RecruitmentSlice";
import authReducer from "./Material/Feature/AuthSlice";

export default configureStore({
    reducer: {
        catalog: catalogReducer,
        recruitment: recruitmentReducer,
        auth: authReducer,
    },
})
