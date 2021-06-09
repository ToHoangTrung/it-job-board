import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from "./Material/Feature/CatalogSlice";
import recruitmentReducer from "./Material/Feature/RecruitmentSlice";

export default configureStore({
    reducer: {
        catalog: catalogReducer,
        recruitment: recruitmentReducer,
    },
})
