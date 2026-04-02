import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Button } from "./ui";
import LikeButton from "./LikeButton";

export default function BoxItem({ box, liked, onToggleLike }) {
  return (
    <li className="box__item">
      <Card>
        <img className="box__image" src={box.image} alt={box.name} />
        <CardBody>
          <h3 className="box__name">{box.name}</h3>
          <p className="box__description">{box.description}</p>
          <p className="box__price">{box.price} грн</p>
        </CardBody>
        <CardFooter>
          <Link to={`/box/${box.id}`} className="box__detail-link">
            <Button variant="primary" size="sm">
              Детальніше →
            </Button>
          </Link>
          <LikeButton
            className="box__like-button"
            liked={liked}
            onToggle={() => onToggleLike(box.id)}
          />
          <Button variant="danger" size="sm" type="button">
            Delete
          </Button>
        </CardFooter>
      </Card>
    </li>
  );
}
