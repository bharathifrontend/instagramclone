import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "C:/Users/SANTHOSH/React/instagramclone/src/navigation/Sidenav.css";
import { FaHome } from "react-icons/fa";
import { HiSearchCircle } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from "react-avatar";

import { auth } from "../firebase";

import { signOut } from "firebase/auth";

function Sidenav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
  };
  const handleHomeClick = () => {
    // Navigate to the 'homepage' page
    navigate("/Home");
  };
  const handleSearchClick = () => {
    // Navigate to the 'Search' page
    navigate("/search");
  };

  const handleExploreClick = () => {
    // Navigate to the 'Explore' page
    navigate("/explore");
  };

  const handleCreateClick = () => {
    // Navigate to the 'Create' page
    navigate("/create");
  };
  const handleReelsClick = () => {
    navigate("/reels");
  };
  const handleMessagesClick = () => {
    // Navigate to the 'Messages' page
    navigate("/messages");
  };

  const handleNotificationsClick = () => {
    // Navigate to the 'Notifications' page
    navigate("/notifications");
  };

  const handleMoreClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidenav">
      <img
        className="sidenav-image"
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png"
        alt="logo"
      />
      <div className="sidenav-buttons">
        <button className="side-nav-button" onClick={handleHomeClick}>
          <FaHome />
          <span>Home</span>
        </button>

        <button className="side-nav-button" onClick={handleSearchClick}>
          <HiSearchCircle />
          <span>Search</span>
        </button>

        <button className="side-nav-button" onClick={handleExploreClick}>
          <MdExplore />
          <span>Explore</span>
        </button>
        <button className="side-nav-button" onClick={handleCreateClick}>
          <IoMdAddCircle />

          <span>Create</span>
        </button>
        {/* <Link to="/Reels" className="side-nav-button"> */}
        <button className="side-nav-button" onClick={handleReelsClick}>
          <BsCameraReelsFill />
          <span>Reels</span>
          {/* </Link> */}
        </button>

        <button className="side-nav-button" onClick={handleMessagesClick}>
          <SiGooglemessages />
          <span>Messages</span>
        </button>

        <button className="side-nav-button" onClick={handleNotificationsClick}>
          <IoNotificationsCircleSharp />
          <span>Notification</span>
        </button>
        <button className="side-nav-button">
          <Avatar
            name={auth.currentUser?.displayName.charAt(0).toUpperCase()} // Name to generate initials
            size="50" // Size of the avatar in pixels
            round={true} // Make the avatar circular
          />
          <span>
            {auth.currentUser?.displayName}
            <button onClick={handleLogout} className="logout">
              Log Out
            </button>
          </span>
        </button>
      </div>
      <div className="sidenav-more">
        <button className="side-nav-button" onClick={handleMoreClick}>
          <CgMenuGridR />
          <span>More</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {/* <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item> */}
            <button>Your activity</button>
            <button>Saved</button>
            <button>Switch appearance</button>
            <button>Report a problem</button>
            <button>Threads</button>

            <button onClick={handleMoreClick}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidenav;
// onClick={navigateToReels}
