import BoxAdderMenu from "./BoxAdderMenu";
import BoxList from "./BoxList";

export default function Main() {
  return (
    <main className="main">
      <section className="text__section">
        <h2 className="main__text">Welcome to NovaBox!</h2>
      </section>
      <section className="main__section">
        <BoxAdderMenu />
        <BoxList />
      </section>
    </main>
  );
}
