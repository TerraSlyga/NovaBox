export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">NovaBox</h1>
      <button className="header__button" type="button" aria-label="Add new box">
        + Add box
      </button>
    </header>
  );
}
