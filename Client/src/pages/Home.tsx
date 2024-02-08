import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <>
      <section className='navbar'>
        <div className='navbar-left'>
            <a href="/"><img className='nav-logo' src='img/logo-no-background.png'></img></a>
        </div>
        <div className='navbar-center'>
            <a href="/">Меню</a>
            <a href="/">Акции</a>
            <a href="/">Контакты</a>
        </div>
        <div className='navbar-right'>
            <a href="/"><img className='nav-img' src='img/search.png'></img></a>
            <a href="/"><img className='nav-img' src='img/shopping-bag.png'></img></a>
        </div>
      </section>
      <section className='swiper-banner'>
        <Swiper
          slidesPerView={'auto'}
          preventClicks={ false }
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="banner"
        >
          <SwiperSlide className='banner-slide'><img src='img/banner-1.jpg'></img></SwiperSlide>
          <SwiperSlide className='banner-slide'><img src='img/banner-2.jpg'></img></SwiperSlide>
          <SwiperSlide className='banner-slide'><img src='img/banner-3.jpg'></img></SwiperSlide>
          <SwiperSlide className='banner-slide'><img src='img/banner-1.jpg'></img></SwiperSlide>
          <SwiperSlide className='banner-slide'><img src='img/banner-2.jpg'></img></SwiperSlide>
        </Swiper>
      </section>
      <section>
        <Swiper 
          className="filters"
          slidesPerView={'auto'}
          preventClicks={ false }
          >
          <SwiperSlide className='filter-slide'><a  href='/'>Новинки</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Наборы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Фирменные роллы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Запечённые роллы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Темпура роллы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Филадельфия роллы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Wok</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Супы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Салаты</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Закуски</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Бургеры</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Соусы</a></SwiperSlide>
          <SwiperSlide className='filter-slide'><a  href='/'>Напитки</a></SwiperSlide>
        </Swiper>
      </section>
      <section className='catalog'>
          <div className='new-section'>
            <h1>Новинки</h1>
          </div>
          <div className='card'>
            <img src='./img/ролл филадельфия классика.JPG' className='card-img'></img>
            <div className='card-description'>
              <h2 className='card-name'>
                Филадельфия
              </h2>
              <div className='weight-amount'>300 гр. / 8 шт.</div>
              <div className='card-bottom-content'>
                <p className='card-price'>от 399 ₽</p>
                <button className='card-button'>Добавить</button>
              </div>
              
            </div>
          </div>
          <div className='card'>
            <img src='./img/ролл филадельфия классика.JPG' className='card-img'></img>
            <div className='card-description'>
              <h2 className='card-name'>
                Филадельфия
              </h2>
              <div className='weight-amount'>300 гр. / 8 шт.</div>
              <div className='card-bottom-content'>
                <p className='card-price'>от 399 ₽</p>
                <button className='card-button'>Добавить</button>
              </div>
              
            </div>
          </div>
      </section>
    </>
  )
}