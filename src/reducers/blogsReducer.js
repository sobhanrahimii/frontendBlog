import {
  GET_BLOGS_BEGIN,
  GET_BLOGS_ERROR,
  GET_BLOGS_SUCCESS,
  GET_BLOG_BY_SEARCHTERM_BEGIN,
  GET_BLOG_BY_SEARCHTERM_ERROR,
  GET_BLOG_BY_SEARCHTERM_SUCCESS,
  GET_SINGLE_BLOG_BEGIN,
  GET_SINGLE_BLOG_ERROR,
  GET_SINGLE_BLOG_SUCCESS,
  SET_SEARCH_TERM,
} from "../utils/actions";

const BlogsReducer = (state, action) => {
  switch (action.type) {
    case GET_BLOGS_BEGIN:
      return {
        ...state,
        blogsLoading: true,
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        blogsLoading: false,
        blogs: action.payload,
        tempBlogs: action.payload,
      };
    case GET_BLOGS_ERROR:
      return {
        ...state,
        blogsError: true,
        blogsLoading: false,
      };
    case GET_SINGLE_BLOG_BEGIN:
      return {
        ...state,
        blogsLoading: false,
      };
    case GET_SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        SingleblogsLoading: false,
        singleBlog: action.payload,
      };
    case GET_SINGLE_BLOG_ERROR:
      return {
        ...state,
        SingleBlogError: true,
        SingleblogsLoading: false,
      };
    case GET_BLOG_BY_SEARCHTERM_BEGIN:
      return {
        ...state,
        searchBlogsLoading: true,
      };
    case GET_BLOG_BY_SEARCHTERM_SUCCESS:
      return {
        ...state,
        searchBlogsLoading: false,
        blogs: action.payload,
      };
    case GET_BLOG_BY_SEARCHTERM_ERROR:
      return {
        ...state,
        searchBlogsError: true,
        searchBlogsLoading: false,
      };
    case SET_SEARCH_TERM:
        return{
            ...state , searchTerms : action.payload
        }
      default:
        return state;
  }
};



export default BlogsReducer;