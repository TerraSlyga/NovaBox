import BoxItem from "./BoxItem";

export default function BoxList({ boxes, filter, likedBoxes, toggleLike }) {
  const visibleBoxes =
    filter === "liked" ? boxes.filter((box) => likedBoxes.has(box.id)) : boxes;

  return (
    <ul className="box__list">
      {visibleBoxes.length === 0 ? (
        <p className="box__empty">Немає улюблених коробок 🤍</p>
      ) : (
        visibleBoxes.map((box) => (
          <BoxItem
            key={box.id}
            box={box}
            liked={likedBoxes.has(box.id)}
            onToggleLike={toggleLike}
          />
        ))
      )}
    </ul>
  );
}
