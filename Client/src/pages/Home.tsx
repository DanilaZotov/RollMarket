import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Autoplay } from "swiper/modules";
import CartProduct from "../interfaces/CartProduct";
import AddToCartButton from "../components/AddToCardButton";

// import { useAppDispatch, useAppSelector } from "../hooks/hooks";
// import { addItem } from "../features/cart/cartSlice";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [data, setData] = useState<CartProduct[]>([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // const cart = useAppSelector((state) => state.cart.items);
  // const dispatch = useAppDispatch();

  const defaultRolls = data.filter((item) => item.category === "Роллы");

  const friedRolls = data.filter((item) => item.category === "Горячие роллы");

  const setOfRolls = data.filter((item) => item.category === "Наборы");

  const salads = data.filter((item) => item.category === "Салаты");

  const sauces = data.filter((item) => item.category === "Соусы");

  const misc = data.filter((item) => item.category === "Разное");

  return (
    <>
      <section className="swiper-banner">
        <Swiper
          slidesPerView={"auto"}
          preventClicks={false}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="banner"
        >
          <SwiperSlide className="banner-slide">
            <img src="img/banner-1.jpg"></img>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="img/banner-2.jpg"></img>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="img/banner-3.jpg"></img>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="img/banner-1.jpg"></img>
          </SwiperSlide>
          <SwiperSlide className="banner-slide">
            <img src="img/banner-2.jpg"></img>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id='sticky'>
        <Swiper
          id="filter-bar"
          className="filters"
          slidesPerView={"auto"}
          preventClicks={false}
        >
          <SwiperSlide className="filter-slide">
            <a href="#Роллы">Роллы</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="#Горячие роллы">Горячие роллы</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="#Наборы">Наборы</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="#Салаты">Салаты</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="#Соусы">Соусы</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="#Разное">Разное</a>
          </SwiperSlide>
          {/* <SwiperSlide className="filter-slide">
            <a href="/">Wok</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="/">Супы</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="/">Салаты</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="/">Закуски</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="/">Бургеры</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="/">Соусы</a>
          </SwiperSlide>
          <SwiperSlide className="filter-slide">
            <a href="/">Напитки</a>
          </SwiperSlide> */}
        </Swiper>
      </section>
      <section className="catalog">
        <div id="Роллы" className="new-section anchor">
          <h1>Роллы</h1>
        </div>
        {defaultRolls.map((item) => (
          <>
            <div className="product-item">
              <img src={item.img_path} className="product-item-img"></img>
              <div className="product-item-description">
                <h2 className="product-item-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div>
                  <div className="product-item-price">от {item.price} ₽</div>
                  {/* <button className="card-button">Добавить</button> */}
                  <AddToCartButton item={item}></AddToCartButton>
                </div>
              </div>
            </div>
          </>
        ))}
        <div id="Горячие роллы" className="new-section anchor">
          <h1>Горячие роллы</h1>
        </div>
        {friedRolls.map((item) => (
          <>
            <div className="product-item">
              <img src={item.img_path} className="product-item-img"></img>
              <div className="product-item-description">
                <h2 className="product-item-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div>
                  <div className="product-item-price">от {item.price} ₽</div>
                  {/* <button className="card-button">Добавить</button> */}
                  <AddToCartButton item={item}></AddToCartButton>
                </div>
              </div>
            </div>
          </>
        ))}
        <div id="Наборы" className="new-section anchor">
          <h1>Наборы</h1>
        </div>
        {setOfRolls.map((item) => (
          <>
            <div className="product-item">
              <img src={item.img_path} className="product-item-img"></img>
              <div className="product-item-description">
                <h2 className="product-item-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div>
                  <div className="product-item-price">от {item.price} ₽</div>
                  {/* <button className="card-button">Добавить</button> */}
                  <AddToCartButton item={item}></AddToCartButton>
                </div>
              </div>
            </div>
          </>
        ))}
        <div id="Салаты" className="new-section anchor">
          <h1>Салаты</h1>
        </div>
        {salads.map((item) => (
          <>
            <div className="product-item">
              <img src={item.img_path} className="product-item-img"></img>
              <div className="product-item-description">
                <h2 className="product-item-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div>
                  <div className="product-item-price">от {item.price} ₽</div>
                  {/* <button className="card-button">Добавить</button> */}
                  <AddToCartButton item={item}></AddToCartButton>
                </div>
              </div>
            </div>
          </>
        ))}
        <div id="Соусы" className="new-section anchor">
          <h1>Соусы</h1>
        </div>
        {sauces.map((item) => (
          <>
            <div className="product-item">
              <img src={item.img_path} className="product-item-img"></img>
              <div className="product-item-description">
                <h2 className="product-item-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div>
                  <div className="product-item-price">от {item.price} ₽</div>
                  {/* <button className="card-button">Добавить</button> */}
                  <AddToCartButton item={item}></AddToCartButton>
                </div>
              </div>
            </div>
          </>
        ))}
        <div id="Разное" className="new-section anchor">
          <h1>Разное</h1>
        </div>
        {misc.map((item) => (
          <>
            <div className="product-item">
              <img src={item.img_path} className="product-item-img"></img>
              <div className="product-item-description">
                <h2 className="product-item-name">{item.name}</h2>
                <div className="weight-amount">
                  {item.weight} гр. / {item.amount} шт.
                </div>
                <div>
                  <div className="product-item-price">от {item.price} ₽</div>
                  {/* <button className="card-button">Добавить</button> */}
                  <AddToCartButton item={item}></AddToCartButton>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
