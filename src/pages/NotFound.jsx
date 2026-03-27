import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="main">
      <section className="notfound__container">
        <div className="notfound__content">
          <h1 className="notfound__code">404</h1>
          <h2 className="notfound__title">Сторінку не знайдено</h2>
          <p className="notfound__description">
            😞 На жаль, сторінка, яку ви шукаєте, не існує або була видалена.
          </p>

          <div className="notfound__suggestions">
            <p className="notfound__suggestions-title">
              Можливо, вас цікавить:
            </p>
            <div className="notfound__links">
              <Link to="/" className="notfound__link">
                🏠 Головна сторінка
              </Link>
              <Link to="/boxes" className="notfound__link">
                📦 Каталог коробок
              </Link>
              <Link to="/about" className="notfound__link">
                ℹ️ Про застосунок
              </Link>
            </div>
          </div>

          <div className="notfound__tips">
            <p className="notfound__tips-title">Поради:</p>
            <ul className="notfound__tips-list">
              <li>Проверте правильність адреси в адресному рядку</li>
              <li>Спробуйте повернутися на попередню сторінку</li>
              <li>Перезавантажте Сторінку</li>
              <li>Зв'яжіться з нами, якщо проблема зберігається</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
