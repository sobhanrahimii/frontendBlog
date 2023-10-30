import React, { useState } from "react";
import "./BlogsList.scss";
import { MdAddReaction } from "react-icons/md";
import { useBlogsContext } from "../../context/blogsContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination/Pagination ";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const BlogsList = ({ blogs }) => {
  // translation
  const { t } = useTranslation("global")
  const { searchBlogsLoading, blogsLoading } = useBlogsContext();
  // pagination
  
  const [paginate, setPaginate] = useState(6);
  const paginationHandler = (value) => setPaginate(value * 6);
  // set Loader
  if (blogsLoading || searchBlogsLoading) {
    return <Loader />;
  }
  return (
    <>
      <div dir="auto" className="blog-items grid my-6">
        {blogs.slice(paginate - 6, paginate).map((blog) => (
          <div className="blog-item" key={blog.id}>
            <div className="blog-item-title fw-5 fs-18 font-rubik">
            {t(`Blog.blogList${blog.id}title`)}
            </div>
            <div className="blog-item-text">
              {/* {blog.body.substring(0, 100)}... */}
              {t(`Blog.blogList${blog.id}body`).substring(0, 100)}

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
                to={`blogs/${blog.id}`}
                className="read-more-btn font-rubik fw-4"
              >
                {t('Blog.ReadMoreBtn')}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        paginationHandler={paginationHandler}
        noOfBlogs={blogs.length}
      />
    </>
  );
};

export default BlogsList;
