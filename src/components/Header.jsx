import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function Header({ filter, setFilter }) {
  const { theme, toggleTheme, colors } = useTheme();

  const headerStyle = {
    background: colors.header,
    borderBottom: `3px solid ${colors.headerBorder}`,
  };

  const buttonStyle = {
    background: colors.accentLight,
    color: colors.text,
    borderColor: colors.text,
  };

  return (
    <header className="header" style={headerStyle}>
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
          className="header__theme-button"
          type="button"
          onClick={toggleTheme}
          title={`Перейти на ${theme === "light" ? "темну" : "світлу"} тему`}
          style={buttonStyle}
        >
          {theme === "light" ? "🌙 Темна" : "☀️ Світла"}
        </button>
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
