import React from "react";
import { useState } from "react";

export default function LikeButton({ className }) {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <button
      className={`${className} ${liked ? "box__like-button_liked" : ""}`}
      onClick={handleClick}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
