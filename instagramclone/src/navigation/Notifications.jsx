import React from "react";
import "./Notification.css";
import Sidenav from "./Sidenav";

const Notifications = () => {
  return (
    <div className="notification-container">
      <div>
        <Sidenav />
      </div>
      <div className="content-container">
        <div className="card">
          <div className="card-content">
            <h2>
              Dhiya <button>Follow</button>{" "}
            </h2>
            <p>Following you </p>
            <hr></hr>

            <h2>
              Abinaya <button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
            <hr></hr>

            <h2>
              Kavi<button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
            <hr></hr>

            <h2>
              _Mithra <button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
            <hr></hr>
            <h2>
              _Sandy <button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
            <hr></hr>
            <h2>
              yogi_ <button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
            <hr></hr>
            <h2>
              rockey_03 <button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
            <hr></hr>

            <h2>
              Gayu_fav <button>Follow</button>{" "}
            </h2>
            <p>Following you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
