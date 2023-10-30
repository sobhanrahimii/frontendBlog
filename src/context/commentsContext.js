import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/commentsReducer'
import { COMMENT_BY_POST_URL, GET_COMMENTS_BY_POST_BEGIN, GET_COMMENTS_BY_POST_ERROR, GET_COMMENTS_BY_POST_SUCCESS } from "../utils/actions";
import axios from "../api/axios";

// create contex
const CommentsContext = createContext({})

// initialstate
const initialstate = {
    commentsByPostsLoading : false,
    commentsByPosts : [],
    commentsByPostsError : false
}



export const CommentsProvider = ({children}) => {
    // Reducer
    const [state,dispatch] = useReducer(reducer,initialstate)

    const fetchCommentsByPosts = async(id) => {
        dispatch({type : GET_COMMENTS_BY_POST_BEGIN})
        try{
            const res = await axios.get(`${COMMENT_BY_POST_URL}/${id}`)
            dispatch({type : GET_COMMENTS_BY_POST_SUCCESS , payload : res.data.comments})
        }catch(error){
            console.log(error)
            dispatch({type : GET_COMMENTS_BY_POST_ERROR})
        }
    }
    return(
        <CommentsContext.Provider value={{ ...state,fetchCommentsByPosts }}>
            {children}
        </CommentsContext.Provider>
    )
}


export const useCommentsContext = () => {
    return useContext(CommentsContext)
}