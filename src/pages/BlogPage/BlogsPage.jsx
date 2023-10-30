import React, { useEffect } from "react";
import "./BlogsPage.scss"
import { useBlogsContext } from "../../context/blogsContext";
import Loader from "../../components/Loader/Loader";
import { MdAddReaction } from 'react-icons/md'
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const { blogs, blogsLoading } = useBlogsContext();

  if (blogsLoading) {
    return <Loader />;
  }

  return (
    <div className="blog-items grid my-6">
      {blogs.map((blog, id) => (
        <>
          <div className="blog-item" key={blog.id}>
            <div className="blog-item-title fw-5 fs-18 font-rubik">
              {blog.title}
            </div>
            <div className="blog-item-text">
              {blog.body.substring(0,100)}...
            </div>

            <div className="blog-item-reaction flex align-center">
              <MdAddReaction />
              <span>{blog.reactions}</span>
            </div>


            <div className="blog-item-tags">
              {blog.tags.map((tag, id) => (
                <span
                  className="blog-item-tags-single fs-13 font-rubik text-uppercase"
                  key={id}
                >
                  {tag}
                </span>
              ))}
            </div>


            <div className="blog-item-btn">
              <Link
                to={`${blog.id}`}
                className="read-more-btn font-rubik fw-4"
              >
                Read More
              </Link>
            </div>

          </div>
        </>
      ))}
    </div>
  );
};

export default BlogsPage;
