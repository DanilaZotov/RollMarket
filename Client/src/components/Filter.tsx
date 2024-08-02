import { Swiper, SwiperSlide } from "swiper/react";

export default function FilterComponent() {
  // State to track whether the filter compo
  return (
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
  );
}
