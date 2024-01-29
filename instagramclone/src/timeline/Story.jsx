import React from "react";
import Avatar from "react-avatar";
import "./Story.css";

const Story = ({ stories }) => {
  return (
    <div className="story_avatars">
      {stories.map((story, index) => (
        <div key={index} className="story_avatar">
          <Avatar
            src={story.avatar}
            alt={`Story ${index + 1}`}
            size={50}
            round={true}
          />
          <span>{story.user}</span>
        </div>
      ))}
      {/* <div className="story-profile">
        <Avatar name="bharathi" size={50} round={true} />
      </div> */}
    </div>
  );
};

export default Story;
