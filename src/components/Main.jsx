import BoxAdderMenu from "./BoxAdderMenu";
import BoxList from "./BoxList";

export default function Main({
  boxes,
  filter,
  likedBoxes,
  toggleLike,
  addBox,
}) {
  return (
    <main className="main">
      <section className="text__section">
        <h2 className="main__text">Welcome to NovaBox!</h2>
      </section>
      <section className="main__section">
        <BoxAdderMenu addBox={addBox} />
        <BoxList
          boxes={boxes}
          filter={filter}
          likedBoxes={likedBoxes}
          toggleLike={toggleLike}
        />
      </section>
    </main>
  );
}
