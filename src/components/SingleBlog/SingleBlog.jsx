import React from 'react';
import "./SingleBlog.scss";
import {BiUser, BiCommentDots} from 'react-icons/bi';
import {MdOutlineAddReaction} from "react-icons/md";
import author from "../../assets/images/author.png";
import { useBlogsContext } from '../../context/blogsContext';
import {Link} from "react-router-dom";
import Loader from '../Loader/Loader';
import Comments from '../Comment/Comments';
import { useTranslation } from 'react-i18next';

const SingleBlog = ({blog,user,comments}) => {
  const {t} = useTranslation("global")
  const {blogs, singleBlogLoading} = useBlogsContext();

  if(singleBlogLoading){
    return(<Loader />);
  } 


  return (
    <div className='blog-single grid'>
        <div className='blog-single-l'>
          <div className='blog-details'>
            <div className='blog-info flex align-center'>
              <div className='blog-info-item flex align-center'>
                <BiUser className='text-mid-blue' />
                <span className='blog-info-item-text font-rubik fw-5'>{user.firstName}  {user.lastName}</span>
              </div>
              <div className='blog-info-item flex align-center'>
                <BiCommentDots className='text-mid-blue' />
                <span className='blog-info-item-text font-rubik fw-5'>{comments.length} {t('Blog.comments')}</span>
              </div>
              <div className='blog-info-item flex align-center'>
                <MdOutlineAddReaction className='text-mid-blue' />
                <span className='blog-info-item-text font-rubik fw-5'>{blog?.reactions}</span>
              </div>
            </div>

            <h2 className='blog-title text-dark-blue'>{t(`Blog.blogList${blog.id}title`)}</h2>
            <p className='blog-text'>{t(`Blog.blogList${blog.id}body`)}</p>
            <div className='blog-tags flex align-item my-4'>
              <span className='blog-tags-title'>{t('Blog.PopularTags')}:</span>
              <div className='blog-tags-list flex align-center'>
                {
                  blog?.tags?.map((tag, idx) => (
                    <span className='blog-tags-item fs-13 font-rubik text-uppercase text-white ls-1' key = {idx}>{tag}</span>
                  ))
                }
              </div>
            </div>
          </div>
          
          <div className='blog-author my-5'>
            <div className='blog-author-l'>
              <img src = {author} alt = "" />
            </div>
            <div className='blog-author-r'>
              <div className='fs-16 fw-3 author-name'>{user.firstName}  {user.lastName}</div>
              <div className='fs-16 fw-3 author-email'>{t('sidebar.Email')}: {user.email}</div>
              <div className='fs-16 fw-3 author-username'>{t('sidebar.Username')}: {user.username}</div>
              <div className='fs-16 fw-3 author-address'>{t('sidebar.Address')}: {user?.address?.address} , {user?.address?.city}</div>
            </div>
          </div>
          <div className='blog-comments'>
            <h2 className='font-rubik my-3 fw-6'>{t('Blog.comments')}</h2>
              <div className='blog-comments-list grid'>
                {
                  comments.map((comment) => (
                    <Comments comment={comment} key={comment.id}/>
                  ))
                }
              </div>
          </div>
        </div>

        <div className='blog-single-r'>
          <div className='recent-blogs'>
            <h2 className='font-rubik my-3 fw-6'>{t('Blog.Recent News')}</h2>
            <div className='recent-blogs-list grid'>
              {
                blogs.slice(0, 5).map(blog => {
                  return (
                    <div className='recent-blogs-item' key = {blog.id}>
                      <Link to = {`blogs/${blog.id}`}>
                        <h3>{blog?.title}</h3>
                      </Link>
                      <div className='flex align-center'>
                        <MdOutlineAddReaction /> &nbsp; 
                        <span>{blog?.reactions}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleBlog