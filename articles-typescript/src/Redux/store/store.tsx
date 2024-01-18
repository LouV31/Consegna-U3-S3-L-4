import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articleReducer from "../reducers/articleReducer";

export interface RootState {
    articleState: ReturnType<typeof articleReducer>;
}

const rootReducer = combineReducers({
    articleState: articleReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
