// Sidebar Actions //////////////////////////////////////////////////////////////
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";

// Blogs Actions ///////////////////////////////////////////////////////////////////
export const GET_BLOGS_BEGIN = "GET_BLOGS_BEGIN";
export const GET_BLOGS_SUCCESS = "GET_BLOGS_SUCCESS";
export const GET_BLOGS_ERROR = "GET_BLOGS_ERROR";
export const GET_SINGLE_BLOG_BEGIN = "GET_SINGLE_BLOG_BEGIN";
export const GET_SINGLE_BLOG_SUCCESS = "GET_SINGLE_BLOG_SUCCESS";
export const GET_SINGLE_BLOG_ERROR = "GET_SINGLE_BLOG_ERROR";
export const GET_BLOG_BY_SEARCHTERM_BEGIN = "GET_BLOG_BY_SEARCHTERM_BEGIN";
export const GET_BLOG_BY_SEARCHTERM_SUCCESS = "GET_BLOG_BY_SEARCHTERM_SUCCESS";
export const GET_BLOG_BY_SEARCHTERM_ERROR = "GET_BLOG_BY_SEARCHTERM_ERROR";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

// User Actions //////////////////////////////////////////////////////////////////////////////
export const GET_SINGLE_USER_BEGIN = "GET_SINGLE_USER_BEGIN";
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS";
export const GET_SINGLE_USER_ERROR = "GET_SINGLE_USER_ERROR";

// comments by posts actions
export const GET_COMMENTS_BY_POST_BEGIN = "GET_COMMENTS_BY_POST_BEGIN";
export const GET_COMMENTS_BY_POST_SUCCESS = "GET_COMMENTS_BY_POST_SUCCESS";
export const GET_COMMENTS_BY_POST_ERROR = "GET_COMMENTS_BY_POST_ERROR";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";

export const BLOG_URL = "posts";
export const USER_URL = "users";
export const COMMENT_BY_POST_URL = "comments/post";
export const SEARCH_URL = 'posts/search?q=';