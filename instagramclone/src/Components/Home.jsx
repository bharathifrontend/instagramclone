import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="app">
      <div className="app-header d-flex justify-content-between align-item-center">
        <img
          className="app-headerImage"
          src="https://freepngimg.com/thumb/logo/69662-instagram-media-brand-social-logo-photography.png"
          alt="logo"
          width={180}
          height={80}
        />

        <div className="d-flex align-items-center">
          <Button className="mr-3">Sign In</Button>
          &nbsp;&nbsp;
          <Button className="mr-2 ">Sign Up</Button>
          &nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default Home;
