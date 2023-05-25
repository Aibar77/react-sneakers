import React from "react";

export default function Drawer({ onClose, items = [], onRemoveItem }) {
  return (
    <div
      className="overlay"
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) {
          onClose();
        }
      }}
    >
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/Btn-Remove.svg"
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map(({ name, price, id }) => (
                <div className="cartItem d-flex align-center mb-20" key={id}>
                  <div
                    style={{
                      backgroundImage: `url(/img/sneakers/${id}.jpg)`,
                    }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{name}</p>
                    <b>{price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemoveItem(id)}
                    className="removeBtn"
                    src="/img/Btn-Remove.svg"
                    alt="removebtn"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>
                    {items
                      .map((item) => item.price.split(" ").join(""))
                      .reduce((acc, num) => acc + Number(num), 0)}{" "}
                    руб.
                  </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>
                    {items
                      .map((item) => item.price.split(" ").join(""))
                      .reduce((acc, num) => acc + Number(num), 0) / 20}{" "}
                    руб.{" "}
                  </b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/Arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="empty-cart"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте кроссовки, чтобы сделать заказ.
            </p>
            <button className="greenButton" onClick={onClose}>
              <img src="/img/Arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
