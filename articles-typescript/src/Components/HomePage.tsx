import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";
import { getArticleAction } from "../Redux/actions";
import { useEffect } from "react";

const HomePage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state: RootState) => state.articleState.data);
    const URL = "https://api.spaceflightnewsapi.net/v4/articles?offset=0&limit=20";

    const fetchArticles = async () => {
        try{
            const resp = await fetch(URL);
            if(resp.ok){
                const data = await resp.json();
                dispatch(articleReducer(data.results))
            }
        }
    }
    
    useEffect(() => {
        dispatch(getArticleAction(URL));
    });
    return (
        <div>
            <p>prova</p>
        </div>
    );
};
export default HomePage;
