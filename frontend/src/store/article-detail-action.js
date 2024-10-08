import { artticleDetialActions } from "./artcile-detail-reducer";
import axios from "axios";

const getArtticleDetailFromServer = (id) => {
    return async (dispatch) => {
        const fetchArticleDetail = async () => {
            const request = await axios.get(`/api/articles/${id}/`);
            return request.data
        }

        try{
            const data = await fetchArticleDetail();
            dispatch(artticleDetialActions.getArticleDetail(data));
        }
        catch(error)
        {
            console.log(error);
        }
    }
}

export default getArtticleDetailFromServer;