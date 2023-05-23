import React from "react";

export default function Drawer() {
  return (
    <div
      style={{
        display: "none",
      }}
      className="overlay"
    >
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            className="removeBtn"
            src="/img/Btn-Remove.svg"
            alt="removebtn"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/1.jpg)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/Btn-Remove.svg"
              alt="removebtn"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/2.jpg)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 200</p>
              <b>8 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/Btn-Remove.svg"
              alt="removebtn"
            />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{
                backgroundImage: "url(/img/sneakers/3.jpg)",
              }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 300</p>
              <b>9 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/Btn-Remove.svg"
              alt="removebtn"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/Arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
