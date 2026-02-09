export default function BoxItem({ box }) {
  return (
    <li className="box__item">
      <img className="box__image" src={box.image} alt={box.name} />
      <h3 className="box__name">{box.name}</h3>
      <p className="box__description">{box.description}</p>
      <p className="box__price">{box.price} грн</p>
      <button
        className="box__edit-button"
        type="button"
        aria-label={`Edit ${box.name}`}
      >
        Edit
      </button>
      <button
        className="box__delete-button"
        type="button"
        aria-label={`Delete ${box.name}`}
      >
        Delete
      </button>
    </li>
  );
}
