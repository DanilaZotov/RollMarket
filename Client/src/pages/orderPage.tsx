import { useAppSelector } from "../hooks/hooks";
export default function OrderPage() {
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <>
      {/* <section>
        {cart.map((item) => (
          <>
            <div className="card">
              <img src={item.img_path} className="card-img"></img>
              <div className="card-description">
                <h2 className="card-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div className="card-bottom-content">
                  <p className="card-price">от {item.price} ₽</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </section> */}
      <section className="order-content">
        <div className="progress-bar"></div>
        <div className="left-side">
          <div className="items-list">
            {cart.map((item) => (
              <>
                <div className="cart-item">
                  <img
                    src={item.img_path}
                    alt={item.name}
                    className="flex-class item-image"
                  />
                  <div className="flex-class item-details">
                    <p className="flex-class item-name">{item.name}</p>
                    <div className="flex-class quantity-controls">
                      <button className="quantity-button">-</button>
                      <span className="quantity">1</span>
                      <button className="quantity-button">+</button>
                    </div>
                    <p className="flex-class item-price">{item.price}р</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="adds-list">
            <div>
              <div>Соевый соус</div>
              <button>-</button>
              count
              <button>+</button>
            </div>
            <div>
              <div>Васаби</div>
              <button>-</button>
              count
              <button>+</button>
            </div>
            <div>
              <div>Палочки</div>
              <button>-</button>
              count
              <button>+</button>
            </div>
            <div>
              <div>Палочки</div>
              <button>-</button>
              count
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </section>
    </>
  );
}
