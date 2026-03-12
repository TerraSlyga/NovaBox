export default function Header({ filter, setFilter }) {
  return (
    <header className="header">
      <h1 className="header__title">NovaBox</h1>
      <div className="header__controls">
        <button
          className={`header__filter-button ${filter === "liked" ? "header__filter-button_active" : ""}`}
          type="button"
          onClick={() => setFilter(filter === "liked" ? "all" : "liked")}
        >
          {filter === "liked" ? "❤️ Улюблені" : "🤍 Улюблені"}
        </button>
        <button className="header__button" type="button">
          + Add box
        </button>
      </div>
    </header>
  );
}
