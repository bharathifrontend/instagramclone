import React from "react";
import "./Search.css";
import Sidenav from "./Sidenav";
import Avatar from "react-avatar";
const Search = () => {
  return (
    <div className="search-container">
      <div>
        <Sidenav />
      </div>

      <div className="card-container">
        <div className="search-box">
          <span className="search">Search</span>
          <div className="search_header">
            <Avatar
              className="search-avatar"
              name="bharathi"
              size={50}
              round={true}
            />
            <span className="followers">bharathi_0820</span>
            <div>
              <button className="search_follow">Follower</button>
            </div>
            <Avatar
              className="search-avatar"
              name="niralya"
              size={50}
              round={true}
            />
            <span>niralya_0127</span>
            <div>
              <button className="search_follow">Follower</button>
            </div>
            <Avatar
              className="search-avatar"
              name="priya"
              size={50}
              round={true}
            />
            <span>priya_0410</span>
            <div>
              <button className="search_follow">Follower</button>
            </div>
          </div>
          <div className="search-image">
            <input type="text" placeholder="search image" />
            <span>upload image </span>
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <img
              src="https://images.unsplash.com/file-1636576776643-80d394b7be57image?dpr=2&w=416&auto=format&fit=crop&q=60"
              alt=""
            />
          </div>
          <div className="search-video">
            <input type="text" placeholder="search videos" />
            <span>upload video</span>
            <iframe
              width="470"
              height="835"
              src="https://www.youtube.com/embed/2ymihmLe1Ws"
              title="Siblings Fun😂Part-82🤣 Wait For Twist #shorts #trending #youtubeshorts #siblings #brother #sister"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
