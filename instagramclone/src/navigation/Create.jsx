import React from "react";
import "./Create.css";
import Sidenav from "./Sidenav";

const Create = () => {
  return (
    <div className="create-container">
      <div>
        <Sidenav />
      </div>
      <div className="create-card">
        <div className="create-card-header">
          <span>Edit profile</span>
          <button type="submit">edit</button>
        </div>
        <div className="create-card1">
          <span>Create New Post</span>
          <hr />
          <p>Drag Photo and Videos here</p>
          <button>Select From Computer</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
