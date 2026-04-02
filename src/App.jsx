import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import HomePage from "./pages/HomePage";
import BoxesPage from "./pages/BoxesPage";
import AboutPage from "./pages/AboutPage";
import BoxDetail from "./pages/BoxDetail";
import NotFound from "./pages/NotFound";

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
    <ThemeProvider>
      <div className="App">
        <Header filter={filterBoxes} setFilter={setFilterBoxes} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/boxes"
            element={
              <BoxesPage
                boxes={boxes}
                filter={filterBoxes}
                likedBoxes={likedBoxes}
                toggleLike={toggleLike}
                addBox={addBox}
                setFilter={setFilterBoxes}
              />
            }
          />
          <Route
            path="/box/:id"
            element={
              <BoxDetail
                boxes={boxes}
                likedBoxes={likedBoxes}
                toggleLike={toggleLike}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
