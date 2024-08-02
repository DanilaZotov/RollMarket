import Item from "../interfaces/product";

export default function Card(item: Item) {
  <div className="card">
    <img src={item.img_path} className="card-img"></img>
    <div className="card-description">
      <h2 className="card-name">{item.name}</h2>
      <div className="weight-amount">
        {item.weight} гр. / {item.amount} шт.
      </div>
      <div className="card-bottom-content">
        <p className="card-price">от {item.price} ₽</p>
        <button className="card-button">Добавить</button>
      </div>
    </div>
  </div>;
}
