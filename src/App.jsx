import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
