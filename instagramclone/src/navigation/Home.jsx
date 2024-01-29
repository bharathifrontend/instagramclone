import React from "react";
import Sidenav from "./Sidenav";
import Timeline from "C:/Users/SANTHOSH/React/instagramclone/src/timeline/Timeline.jsx";
import "C:/Users/SANTHOSH/React/instagramclone/src/Homepage.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage-nav">
        <Sidenav />
      </div>
      <div className="homepage-timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
