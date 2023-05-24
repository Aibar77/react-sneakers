import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://646db46d9c677e23218a45b6.mockapi.io/sneakers")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const onAddToCart = ({ name, price, id }) => {
    setCartItems((prev) => [...prev, { name, price, id }]);
  };
  const onRemoveCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveCart={onRemoveCart}
        />
      )}
      <Header items={cartItems} onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/Search.svg" alt="search-bar" />
            <input className="search" type="search" placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map(({ name, price, id }) => {
            return (
              <Card
                name={name}
                price={price}
                id={id}
                key={id}
                onFavourite={() => console.log("Add favourites")}
                onPlus={() => onAddToCart({ name, price, id })}
                onRemoveCart={onRemoveCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
