import styles from "./Card.module.scss";
import React from "react";
function Card({ name, price, id, onPlus, onFavourite, onRemoveItem }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  const onClickPlus = () => {
    onPlus();

    setIsAdded(!isAdded);
  };
  const onClickFavourite = () => {
    onFavourite();
    setIsFavourite(!isFavourite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickFavourite}>
        <img
          src={isFavourite ? "/img/Heart-Like.svg" : "/img/Heart-Unlike.svg"}
          alt="heart-unlike"
        />
      </div>
      <img
        width={133}
        height={112}
        src={`/img/sneakers/${id}.jpg`}
        alt="Sneakers"
      />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price + " руб."}</b>
        </div>
        <img
          className={styles.plus}
          src={`/img/Btn-${isAdded ? "Checked" : "Plus"}.svg`}
          onClick={onClickPlus}
          alt="plussign"
        />
      </div>
    </div>
  );
}
export default Card;
