import React from "react";
import { Link } from "react-router-dom";
import  Avatar  from "../Images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>

      <div className="post_author-details">
        <h5>By: Ernest Archiver</h5>
        <small>just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
