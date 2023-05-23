import styles from "./Card.module.scss";
function Card({ name, price, id }) {
  const onClickBtn = () => {
    alert(id);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/Heart-Unlike.svg" alt="heart-unlike" />
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
          <b>{price}</b>
        </div>
        <button className="button" onClick={onClickBtn}>
          <img width={11} height={11} src="/img/Plus.svg" alt="plussign" />
        </button>
      </div>
    </div>
  );
}
export default Card;
