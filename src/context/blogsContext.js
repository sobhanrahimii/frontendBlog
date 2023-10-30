import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/blogsReducer";
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
import { BLOG_URL  } from '../utils/actions'
import { SEARCH_URL } from '../utils/actions'
import axios from "../api/axios";

// create Context
const BlogsContext = createContext();

// initialstate
const initialstate = {
  blogs: [],
  blogsLoading: false,
  tempBlogs: [],
  blogsError: false,
  SingleblogsLoading: false,
  singleBlog: [],
  SingleBlogError: false,
  searchBlogsLoading: false,
  searchBlogsError: false,
  searchTerms: "",
};

export const BlogsProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(reducer, initialstate);
  // fetch all data
  const fetchData = async () => {
    dispatch({ type: GET_BLOGS_BEGIN });
    // api call
    try {
      const res = await axios.get(BLOG_URL, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Alow-Origin": "*",
        },
      });
      dispatch({ type: GET_BLOGS_SUCCESS, payload: res.data.posts });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_BLOGS_ERROR });
    }
  };

  // fetch single data
  const fetchSingleData = async (id) => {
    dispatch({ type: GET_SINGLE_BLOG_BEGIN });
    try {
      const res = await axios.get(`${BLOG_URL}/${id}`);
      dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_BLOG_ERROR });
    }
  };

  // fetch data by search term
  const fetchBlogsFromSearch = async (searchTerms) => {
    dispatch({ type: GET_BLOG_BY_SEARCHTERM_BEGIN });
    try {
      const res = await axios.get(`${SEARCH_URL}${searchTerms}`);
      dispatch({
        type: GET_BLOG_BY_SEARCHTERM_SUCCESS,
        payload: res.data.posts,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_BLOG_BY_SEARCHTERM_ERROR });
    }
  };

  // Get All Data with Search
  const setSearchTerm = async (searchTerms) => {
    dispatch({ type: SET_SEARCH_TERM, payload: searchTerms });
  };

  // render fetchData for each mounted components
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <BlogsContext.Provider
      value={{ ...state, fetchSingleData, fetchBlogsFromSearch, setSearchTerm }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogsContext = () => {
  return useContext(BlogsContext);
};
