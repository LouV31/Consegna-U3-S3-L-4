import { Article } from "../../Interfaces/ArticlesInterface";
import { PayloadAction } from "@reduxjs/toolkit";
import { GET_ARTICLES } from "../actions";
const initialState = {
    data: [] as Article[],
};

const articleReducer = (state = initialState, action: PayloadAction<Article[]>) => {
    switch (action.type) {
        case GET_ARTICLES: {
            return {
                ...state,
                data: action.payload,
            };
        }
        default:
            return state;
    }
};

export default articleReducer;
