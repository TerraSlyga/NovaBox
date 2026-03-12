export default function LikeButton({ className, liked, onToggle }) {
  return (
    <button
      className={`${className} ${liked ? "box__like-button_liked" : ""}`}
      onClick={onToggle}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
