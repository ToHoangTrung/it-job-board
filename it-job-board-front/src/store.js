import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from "./Material/Feature/CatalogSlice";
import recruitmentReducer from "./Material/Feature/RecruitmentSlice";
import userReducer from "./Material/Feature/UserSlice";

export default configureStore({
    reducer: {
        catalog: catalogReducer,
        recruitment: recruitmentReducer,
        user: userReducer,
    },
})
