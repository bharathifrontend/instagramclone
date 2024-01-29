import React from "react";
import Timeline from "./timeline/Timeline";
import Sidenav from "./navigation/Sidenav";
import "./Homepage.css";

const Homepage = () => {
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

export default Homepage;
