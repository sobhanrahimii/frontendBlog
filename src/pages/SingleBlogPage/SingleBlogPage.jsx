import React, { useEffect } from "react";
import { useBlogsContext } from "../../context/blogsContext";
import { useParams } from "react-router-dom";
import SingleBlog from "../../components/SingleBlog/SingleBlog";
import Title from "../../components/Title/Title";
import banner_image from '../../assets/images/banner_image.png'
import { useUserContext } from "../../context/userContext";
import { useCommentsContext } from "../../context/commentsContext";
import { useTranslation } from "react-i18next";

const SingleBlogPage = () => {
  // translation
  const { t } = useTranslation("global")
  const { id } = useParams();
  const { fetchSingleData, singleBlog } = useBlogsContext();
  const { fetchSingleUser , singleUser } = useUserContext();
  const { fetchCommentsByPosts , commentsByPosts } = useCommentsContext()

  useEffect(() => {
    fetchSingleData(id);
    if(singleBlog.userId) fetchSingleUser(singleBlog.userId)
    if(singleBlog.id) fetchCommentsByPosts(singleBlog.id)
  }, [singleBlog.id,singleBlog.userId, id]);
  console.log(singleBlog);
  return (
    <div className="main-holder bg-light-blue">
      <header
        className="header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <div className="header-content text-center flex align-center justify-center flex-column text-white">
            <Title title={t('title.Blog Details')} color={`#fff`} />
          </div>
        </div>
      </header>
      <section className="section py-7">
        <div className="container">
          <div className="section-content bg-white">
            <SingleBlog
              blog={singleBlog}
              user= {singleUser}
              comments = {commentsByPosts}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPage;
