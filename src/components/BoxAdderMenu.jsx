export default function BoxAdderMenu() {
  return (
    <div className="box__menu">
      <form className="box__form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="box-image__upload" className="box-image__label">
          New Box
        </label>
        <input
          className="box-image__upload"
          id="box-image__upload"
          type="file"
          accept="image/*"
          aria-label="Upload box image"
        />
        <input
          className="box-name__input"
          type="text"
          placeholder="Box name"
          aria-label="Box name"
        />
        <input
          className="box-description__input"
          type="text"
          placeholder="Box description"
          aria-label="Box description"
        />
        <input
          className="box-price__input"
          type="number"
          placeholder="Box price"
          aria-label="Box price"
        />
        <button className="box-add__button" type="submit" aria-label="Add box">
          Add Box
        </button>
      </form>
    </div>
  );
}
