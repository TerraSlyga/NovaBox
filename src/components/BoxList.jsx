import BoxItem from "./BoxItem";

export default function BoxList(boxes) {
  return (
    <ul className="box__list">
      {boxes.map((box) => (
        <BoxItem key={box.id} box={box} />
      ))}
    </ul>
  );
}
