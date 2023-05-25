function Header({ onClickCart, items }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/Cart.svg" alt="Cart" />
          <span>
            {items
              .map((item) => item.price.split(" ").join(""))
              .reduce((acc, num) => acc + Number(num), 0)}{" "}
            руб.
          </span>
        </li>
        <li className="mr-20 cu-p">
          <img width={18} height={18} src="/img/Fav.svg" alt="Fav" />
        </li>
        <li>
          <img width={18} height={18} src="/img/User.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
