import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="main">
      <section className="text__section">
        <h2 className="main__text">Ласкаво просимо до NovaBox!</h2>
      </section>

      <section className="home__intro">
        <div className="home__card">
          <h3 className="home__card-title">📦 Про NovaBox</h3>
          <p className="home__card-text">
            NovaBox - це прості та інноваційні рішення для зберігання та
            транспортування ваших цінностей. Ми пропонуємо широкий асортимент
            коробок різних розмірів та типів.
          </p>
          <Link to="/boxes" className="home__link-button">
            Переглянути коробки →
          </Link>
        </div>

        <div className="home__card">
          <h3 className="home__card-title">⭐ Сьогодні рекомендуємо</h3>
          <p className="home__card-text">
            Перевірте нашу секцію «Завдання дня» внизу, де ми діліться корисними
            поради щодо організації та упакування.
          </p>
          <a href="#daily-tasks" className="home__link-button">
            До рекомендацій ↓
          </a>
        </div>

        <div className="home__card">
          <h3 className="home__card-title">❤️ Улюблені</h3>
          <p className="home__card-text">
            Позначайте улюблені коробки серденечком, щоб швидко їх знайти. Всі
            вибрані товари зберігаються автоматично.
          </p>
          <Link to="/boxes" className="home__link-button">
            До коробок →
          </Link>
        </div>
      </section>

      <section className="home__features" id="daily-tasks">
        <h3 className="home__features-title">Чому обирають NovaBox?</h3>
        <ul className="home__features-list">
          <li>✓ Якісні матеріали та довготривалість</li>
          <li>✓ Різноманітний асортимент розмірів</li>
          <li>✓ Конкурентні ціни</li>
          <li>✓ Швидка доставка</li>
          <li>✓ Професійна упаковка</li>
          <li>✓ Екологічно безпечні матеріали</li>
        </ul>
      </section>
    </main>
  );
}
