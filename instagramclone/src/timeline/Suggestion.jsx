import React from "react";
import "./suggestion.css";
import Avatar from "react-avatar";

const suggestion = () => {
  return (
    <div className="suggestions">
      <div className="story-profile">
        <Avatar name="bharathi" size={50} round={true} />
        &nbsp;&nbsp;
        <span>bharathi_0511</span>
        <button className="switch">Switch</button>
      </div>
      &nbsp;&nbsp;
      <div className="suggestion-title">Suggestions for you</div>
      <div className="suggestions-usernames">
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar name="B" size="50" round={true} />
            </span>
            <div className="username-info">
              <span className="username">Santhosh</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar name="B" size="50" round={true} />
            </span>
            <div className="username-info">
              <span className="username">Iniyan</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar name="B" size="50" round={true} />
            </span>
            <div className="username-info">
              <span className="username">Venba</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar name="B" size="50" round={true} />
            </span>
            <div className="username-info">
              <span className="username">Nivethitha</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar name="B" size="50" round={true} />
            </span>
            <div className="username-info">
              <span className="username">Mohan</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default suggestion;
