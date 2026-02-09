import { useState } from "react";

import BoxItem from "./BoxItem";

export default function BoxList() {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      name: "10 кг",
      price: 40,
      description: "Золотий стандарт",
      image:
        "https://shop.novaposhta.ua/img/p/3/5/8/6/3586-thickbox_default.jpg",
    },
    {
      id: 2,
      name: "20 кг",
      price: 80,
      description: "Влізе кавоварка",
      image:
        "https://shop.novaposhta.ua/img/p/3/5/9/4/3594-thickbox_default.jpg",
    },
  ]);

  return (
    <ul className="box__list">
      {boxes.map((box) => (
        <BoxItem key={box.id} box={box} />
      ))}
    </ul>
  );
}
