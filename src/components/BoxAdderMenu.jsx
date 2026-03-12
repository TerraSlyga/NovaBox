import { useState } from "react";

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
        <label htmlFor="box-name__input" className="box-image__label">
          Нова коробка
        </label>

        <input
          className="box-name__input"
          id="box-name__input"
          type="text"
          placeholder="Назва коробки *"
          aria-label="Box name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="box-description__input"
          type="text"
          placeholder="Опис коробки"
          aria-label="Box description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="box-category__select"
          aria-label="Box category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          className="box-price__input"
          type="number"
          placeholder="Ціна (грн)"
          aria-label="Box price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="box-add__button" type="submit" aria-label="Add box">
          Додати коробку
        </button>
      </form>
    </div>
  );
}
