import React from "react";
import ReactPlayer from "react-player";
import "./Reels.css";
import Sidenav from "./Sidenav.jsx";
// import Reel from "./Reelsvideo/reel2.mp4";
import Reel3 from "./Reelsvideo/reel3.mp4";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Reels = () => {
  const videoUrls = [
    "https://www.youtube.com/shorts/zViiAuf172A?feature=share",
    "https://www.youtube.com/shorts/G742FOPI66w?feature=share",
    "https://youtu.be/LD-DwB9YUog",
    "https://www.youtube.com/shorts/a4jZUYU86H8?feature=share",
    "https://www.youtube.com/shorts/04RtIB9zcpg?feature=share",
  ];

  return (
    <div className="reels-container">
      <div>
        <Sidenav />
      </div>
      <div className="reels-header">
        <span>Loading....</span>
        <div className="video-header">
          <video src={Reel3} height="700px" width="20%" controls></video>
          <iframe
            width="20%"
            height="700px"
            src="https://www.youtube.com/embed/QNYB7Tsb880"
            title="உருளைக் கிழங்கு செல்லக்குட்டி | Tamil Rhymes for Children | Infobells"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          {videoUrls.map((url, index) => (
            <ReactPlayer
              key={index}
              controls={true}
              url={url}
              height="700px"
              width="20%"
            />
          ))}
          <div className="video-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
{
  /* {videoUrls.map((url, index) => (
          <iframe
            key={index}
            width="1280"
            height="720"
            src={url}
            title={"Video" + { index }}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ))} */
  /* <MdChatBubbleOutline />
          <FaTelegramPlane />
          <FaRegBookmark /> */
  // <MdChatBubbleOutline />
  // <FaTelegramPlane />
  // <FaRegBookmark />
}
