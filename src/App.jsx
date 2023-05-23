import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999руб.",
    id: 1,
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "10 999руб.",
    id: 2,
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "9 999руб.",
    id: 3,
  },
  {
    name: "Мужские Кроссовки Nike LeBron XVIII",
    price: "15 999руб.",
    id: 4,
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/Search.svg" alt="search-bar" />
            <input className="search" type="search" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {arr.map(({ name, price, id }) => {
            return <Card name={name} price={price} id={id} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
