import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

export default function BoxItem({ box, liked, onToggleLike }) {
  return (
    <li className="box__item">
      <img className="box__image" src={box.image} alt={box.name} />
      <h3 className="box__name">{box.name}</h3>
      <p className="box__description">{box.description}</p>
      <p className="box__price">{box.price} грн</p>
      <div className="box__actions">
        <Link to={`/box/${box.id}`} className="box__detail-button">
          Детальніше →
        </Link>
        <LikeButton
          className="box__like-button"
          liked={liked}
          onToggle={() => onToggleLike(box.id)}
        />
      </div>
      <button className="box__delete-button" type="button">
        Delete
      </button>
    </li>
  );
}
