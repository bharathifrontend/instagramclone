import React from "react";
import Avatar from "react-avatar";
import { IoIosMore } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import "./Post.css";

const post = ({ user, postImage, likes, timestamp }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-headerauthor">
          <Avatar
            name={user.charAt(0).toUpperCase()} // Name to generate initials
            size="50" // Size of the avatar in pixels
            round={true} // Make the avatar circular
          />
          {user}.<span>{timestamp}</span>
        </div>
        <IoIosMore />
      </div>
      <div className="post-image">
        <img src={postImage} alt="" />
      </div>
      <div className="post-footer">
        <div className="post-footericons">
          <div className="post-iconsmain">
            <MdFavoriteBorder className="posticon" />
            <MdChatBubbleOutline className="posticon" />
            <FaTelegramPlane className="posticon" />
          </div>
          <div className="post-save-icon">
            <FaRegBookmark className="posticon" />
          </div>
        </div>
        Liked by {likes} people
      </div>
    </div>
  );
};

export default post;
