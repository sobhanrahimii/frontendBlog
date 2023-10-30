import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { USER_URL } from "../../utils/actions";
import "./Comment.scss";

const Comments = ({ comment }) => {
  const [postUser, setPostUser] = useState({});

  useEffect(() => {
    const fetchPostsByUser = async (id) => {
      const res = await axios.get(`${USER_URL}/${id}`);
      setPostUser(res.data);
    };
    fetchPostsByUser(comment.user.id);
  });
  return (
    <div className="blog-comments-item grid align-center" key={comment.id}>
      <div className="comment-img">
        <img src={postUser?.image} alt="" />
      </div>
      <div className="comment-info">
        <span className="comment-info-name fw-7 text-dark-blue fs-18">
          {comment?.user?.username}
        </span>
        <p className="my-1 fs-15">{comment?.body}</p>
      </div>
    </div>
  );
};

export default Comments;
