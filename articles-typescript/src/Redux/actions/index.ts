import { Dispatch } from "redux";
import { Article, Articles } from "../../Interfaces/ArticlesInterface";
export const GET_ARTICLES: string = "GET_ARTICLE";

const setArticles = (articles) => {
    type: "SET_ARTICLES";
    payload: articles;
};

/* interface getArticlesAction {
    type: string;
    payload: Article[];
}

const obj: getArticlesAction = {
    type: "",
    payload: [],
};
 */
/* export const getArticleAction = (url: string) => {
    return async (dispatch: Dispatch<getArticlesAction>) => {
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const data: Articles = await resp.json();
                obj.type = GET_ARTICLES;
                obj.payload = data.results;
                dispatch(obj);
            } else {
                dispatch({
                    type: "",
                    payload: [],
                });
                throw new Error("Error while getting data");
            }
        } catch (err) {
            console.log(err);
        }
    };
}; */
