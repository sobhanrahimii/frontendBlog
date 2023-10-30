import { GET_COMMENTS_BY_POST_BEGIN, GET_COMMENTS_BY_POST_ERROR, GET_COMMENTS_BY_POST_SUCCESS } from "../utils/actions";

const CommentsReducer = (state,action) => {
    switch(action.type){
        case GET_COMMENTS_BY_POST_BEGIN:
            return{
                ...state , commentsByPostsLoading : true
            }
        case GET_COMMENTS_BY_POST_SUCCESS:
            return{
                ...state , commentsByPostsLoading : false , commentsByPosts : action.payload
            }
        case GET_COMMENTS_BY_POST_ERROR:
            return{
                ...state , commentsByPostsLoading : false , commentsByPostsError : true
            }
        default:
            return state;
    }
}

export default CommentsReducer