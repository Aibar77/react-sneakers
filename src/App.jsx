import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://646db46d9c677e23218a45b6.mockapi.io/sneakers")
      .then((res) => setItems(res.data));
    axios
      .get("https://646db46d9c677e23218a45b6.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);
  const onAddToCart = ({ name, price, id }) => {
    setCartItems((prev) => [...prev, { name, price, id }]);
    axios.post("https://646db46d9c677e23218a45b6.mockapi.io/cart", {
      name,
      price,
      id,
    });
  };
  const onAddToFavorite = ({ name, price, id }) => {
    setFavorites((prev) => [...prev, { name, price, id }]);
    axios.post("https://646f455b09ff19b12086e55c.mockapi.io/favorites", {
      name,
      price,
      id,
    });
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://646db46d9c677e23218a45b6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header items={cartItems} onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/img/Search.svg" alt="search-bar" />
            <input
              value={searchValue}
              className="search"
              type="search"
              onChange={onChangeSearchInput}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map(({ name, price, id }) => {
              return (
                <Card
                  name={name}
                  price={price}
                  id={id}
                  key={id}
                  onFavourite={() => onAddToFavorite({ name, price, id })}
                  onPlus={() => onAddToCart({ name, price, id })}
                  onRemoveItem={onRemoveItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
