import { useParams, Link } from "react-router-dom";

export default function BoxDetail({ boxes, likedBoxes, toggleLike }) {
  const { id } = useParams();
  const box = boxes.find((b) => b.id.toString() === id);
  const isLiked = likedBoxes.has(box?.id);

  if (!box) {
    return (
      <main className="main">
        <section className="text__section">
          <h2 className="main__text">Коробку не знайдено</h2>
        </section>

        <div className="boxdetail__not-found">
          <p className="boxdetail__not-found-text">
            😞 На жаль, коробка з ID <strong>{id}</strong> не існує.
          </p>
          <Link to="/boxes" className="boxdetail__back-link">
            ← Повернутися до каталогу
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="text__section">
        <h2 className="main__text">Деталі коробки</h2>
      </section>

      <div className="boxdetail__container">
        <div className="boxdetail__image-section">
          <img src={box.image} alt={box.name} className="boxdetail__image" />
          <button
            onClick={() => toggleLike(box.id)}
            className={`boxdetail__like-btn ${isLiked ? "boxdetail__like-btn--liked" : ""}`}
          >
            {isLiked ? "❤️ Улюблена" : "🤍 Додати в улюблені"}
          </button>
        </div>

        <div className="boxdetail__content">
          <h1 className="boxdetail__title">{box.name}</h1>

          <div className="boxdetail__price">
            <span className="boxdetail__price-label">Ціна:</span>
            <span className="boxdetail__price-value">${box.price}</span>
          </div>

          <div className="boxdetail__description">
            <h3 className="boxdetail__section-title">Опис</h3>
            <p className="boxdetail__description-text">
              {box.description ||
                "Детальний опис для цієї коробки доступний буде в найближчому часі."}
            </p>
          </div>

          <div className="boxdetail__info">
            <h3 className="boxdetail__section-title">Характеристики</h3>
            <div className="boxdetail__specs">
              <div className="boxdetail__spec">
                <span className="boxdetail__spec-label">ID товару:</span>
                <span className="boxdetail__spec-value">{box.id}</span>
              </div>
              <div className="boxdetail__spec">
                <span className="boxdetail__spec-label">Тип:</span>
                <span className="boxdetail__spec-value">
                  {box.name.includes("XL")
                    ? "Велика"
                    : box.name.includes("20")
                      ? "Середня"
                      : "Мала"}
                </span>
              </div>
              <div className="boxdetail__spec">
                <span className="boxdetail__spec-label">Статус:</span>
                <span className="boxdetail__spec-value">Доступна</span>
              </div>
              <div className="boxdetail__spec">
                <span className="boxdetail__spec-label">Рейтинг:</span>
                <span className="boxdetail__spec-value">
                  ⭐⭐⭐⭐⭐ (4.9/5)
                </span>
              </div>
            </div>
          </div>

          <div className="boxdetail__actions">
            <button className="boxdetail__btn boxdetail__btn--primary">
              🛒 Додати в кошик
            </button>
            <button className="boxdetail__btn boxdetail__btn--secondary">
              💬 Задати питання
            </button>
            <Link to="/boxes" className="boxdetail__btn boxdetail__btn--back">
              ← Назад до каталогу
            </Link>
          </div>

          <div className="boxdetail__reviews">
            <h3 className="boxdetail__section-title">Відгуки</h3>
            <p className="boxdetail__reviews-text">
              Клієнти дуже задоволені цією коробкою. Вона міцна, зручна і має
              відмінну ціну!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
