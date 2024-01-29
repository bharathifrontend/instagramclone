import React, { useState } from "react";
import "./Timeline.css";
import Suggestion from "./Suggestion";
import Post from "./Posts/post";
import Story from "./Story";
function Timeline() {
  const [stories] = useState([
    {
      user: "dhiya",
      avatar:
        "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      user: "niralya",
      avatar:
        "https://images.unsplash.com/photo-1579176647030-bd86f6fd4e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      user: "abi",
      avatar:
        "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    },
    {
      user: "jes",
      avatar:
        "https://images.unsplash.com/photo-1699594165148-0eb85ec79666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Qm4tRGpyY0Jyd298fGVufDB8fHx8fA%3D%3D",
    },
    {
      user: "neha",
      avatar:
        "https://images.unsplash.com/photo-1699148689335-16a572d22c22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      user: "nila",
      avatar:
        "https://images.unsplash.com/photo-1674864176821-3aa89b6fa9ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D",
    },
    {
      user: "Ammu",
      avatar:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww",
    },
    {
      user: "sandy",
      avatar:
        "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpdGh1YiUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    },
    {
      user: "Figma",
      avatar:
        "https://images.unsplash.com/photo-1660806982611-0a41c0527966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmlnbWElMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      user: "Github",
      avatar:
        "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHViJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      user: "David",
      avatar:
        "https://images.unsplash.com/photo-1481567758055-3e8a6e89ca58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGxvZ298ZW58MHx8MHx8fDA%3D",
    },
  ]);

  const [post, setPost] = useState([
    {
      user: "bharathi",
      postImage:
        "https://c4.wallpaperflare.com/wallpaper/26/26/373/full-size-hd-nature-1920x1200-wallpaper-preview.jpg",
      likes: 915,
      timestamp: "5hr",
    },
    {
      user: "neha",
      postImage:
        "https://c4.wallpaperflare.com/wallpaper/856/564/920/nature-full-size-desktop-7680x4320-wallpaper-preview.jpg",
      likes: 560,
      timestamp: "3d",
    },
    {
      user: "santhosh",
      postImage:
        "https://c4.wallpaperflare.com/wallpaper/2/795/821/bird-full-size-wallpaper-preview.jpg",
      likes: 234,
      timestamp: "12hr",
    },
    {
      user: "dhiya",
      postImage:
        "https://c4.wallpaperflare.com/wallpaper/970/744/55/nature-new-full-size-desktop-1920x1200-wallpaper-preview.jpg",
      likes: 679,
      timestamp: "5d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline-left">
        <Story stories={stories} />
        <div className="timeline-posts">
          {post.map((post) => (
            <Post
              key={post.id}
              {...post}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline-right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
