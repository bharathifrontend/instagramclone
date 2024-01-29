import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import "./App.css";
import Authendication from "./Authendication/Authendication";
import { auth } from "./firebase";
import Home from "./navigation/Home";
import Reels from "./navigation/Reels";
import Messages from "./navigation/Messages";
import Notifications from "./navigation/Notifications";
import More from "./navigation/More";
import Search from "./navigation/Search";
import Explore from "./navigation/Explore";
import Create from "./navigation/Create";
function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <Homepage user={user} />
                ) : (
                  <Authendication Signup={false} />
                )
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create" element={<Create />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reels" element={<Reels />} />
        </Routes>
      </BrowserRouter> */
// <Reels />

/* <Route path="/Home" element={<Home />} /> */
