import { useState } from "react";
import BoxAdderMenu from "../components/BoxAdderMenu";
import BoxList from "../components/BoxList";
import DailyTasks from "../components/DailyTasks";

export default function BoxesPage({
  boxes,
  filter,
  likedBoxes,
  toggleLike,
  addBox,
  setFilter,
}) {
  return (
    <main className="main">
      <section className="text__section">
        <h2 className="main__text">Каталог коробок</h2>
      </section>
      <DailyTasks />
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
