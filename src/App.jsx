import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      name: "10 кг",
      price: 40,
      description: "Золотий стандарт",
      image:
        "https://shop.novaposhta.ua/img/p/3/5/8/6/3586-thickbox_default.jpg",
    },
    {
      id: 2,
      name: "20 кг",
      price: 80,
      description: "Влізе кавоварка",
      image:
        "https://shop.novaposhta.ua/img/p/3/5/9/4/3594-thickbox_default.jpg",
    },
  ]);

  const [filterBoxes, setFilterBoxes] = useState("all");
  const [likedBoxes, setLikedBoxes] = useState(new Set());

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
