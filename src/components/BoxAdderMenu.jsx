import { useState } from "react";
import { Input, Button } from "./ui";

const CATEGORIES = ["Мала", "Середня", "Велика", "XL"];

export default function BoxAdderMenu({ addBox }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addBox({
      name: name.trim(),
      price: Number(price) || 0,
      description: description.trim() || category,
      image:
        "https://shop.novaposhta.ua/img/p/3/5/8/6/3586-thickbox_default.jpg",
    });

    setName("");
    setPrice("");
    setCategory(CATEGORIES[0]);
    setDescription("");
  };

  return (
    <div className="box__menu">
      <form className="box__form" onSubmit={handleSubmit}>
        <h3 className="box-image__label">Нова коробка</h3>

        <Input
          label="Назва коробки *"
          placeholder="Введіть назву"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Опис коробки"
          placeholder="Введіть опис (необов'язково)"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="box-category__wrapper">
          <label htmlFor="box-category__select">Категорія</label>
          <select
            id="box-category__select"
            className="box-category__select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Ціна (грн)"
          placeholder="0"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button type="submit" variant="primary" size="md">
          Додати коробку
        </Button>
      </form>
    </div>
  );
}
