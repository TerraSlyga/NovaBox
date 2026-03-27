import { Link, NavLink } from "react-router-dom";

export default function Header({ filter, setFilter }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1 className="header__title">NovaBox</h1>
      </Link>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
          }
        >
          🏠 Головна
        </NavLink>
        <NavLink
          to="/boxes"
          className={({ isActive }) =>
            `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
          }
        >
          📦 Коробки
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
          }
        >
          ℹ️ Про нас
        </NavLink>
      </nav>

      <div className="header__controls">
        <button
          className={`header__filter-button ${filter === "liked" ? "header__filter-button_active" : ""}`}
          type="button"
          onClick={() => setFilter(filter === "liked" ? "all" : "liked")}
        >
          {filter === "liked" ? "❤️ Улюблені" : "🤍 Улюблені"}
        </button>
      </div>
    </header>
  );
}
