import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const boxes = [
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
  ];

  return (
    <div className="App">
      <Header />
      <Main boxes={boxes} />
      <Footer />
    </div>
  );
}

export default App;
