import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";

// Функція для завантаження даних з localStorage
const loadDataFromStorage = () => {
  try {
    const storedData = localStorage.getItem("boxes-data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return {
        boxes:
          parsedData.boxes && Array.isArray(parsedData.boxes)
            ? parsedData.boxes
            : [],
        likedBoxes:
          parsedData.likedBoxes && Array.isArray(parsedData.likedBoxes)
            ? new Set(parsedData.likedBoxes)
            : new Set(),
      };
    }
  } catch (error) {
    console.error("Помилка при зчитуванні даних з localStorage:", error);
  }
  return { boxes: [], likedBoxes: new Set() };
};

function App() {
  const [boxes, setBoxes] = useState(() => loadDataFromStorage().boxes);
  const [filterBoxes, setFilterBoxes] = useState("all");
  const [likedBoxes, setLikedBoxes] = useState(
    () => loadDataFromStorage().likedBoxes,
  );

  // Автоматичне збереження даних у localStorage при зміні state
  useEffect(() => {
    const dataToStore = {
      boxes: boxes,
      likedBoxes: Array.from(likedBoxes),
    };
    localStorage.setItem("boxes-data", JSON.stringify(dataToStore));
  }, [boxes, likedBoxes]);

  const toggleLike = (id) => {
    setLikedBoxes((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addBox = (newBox) => {
    setBoxes((prev) => [...prev, { ...newBox, id: Date.now() }]);
  };

  return (
    <div className="App">
      <Header filter={filterBoxes} setFilter={setFilterBoxes} />
      <Main
        boxes={boxes}
        filter={filterBoxes}
        likedBoxes={likedBoxes}
        toggleLike={toggleLike}
        addBox={addBox}
      />
      <Footer />
    </div>
  );
}

export default App;
