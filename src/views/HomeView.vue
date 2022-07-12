<template>
  <section class="main">
    <div class="main__bg">
      <img src="img/bg/main.jpg" alt="">
    </div>
    <div class="main__container">
      <div class="main__body">
        <div class="main__info">
          <div class="main__title">
            <h1>Путешествуйте с нами в Грузию</h1>
          </div>
          <div class="main__subtitle">
            Лучший способ купить билеты онлайн!
          </div>
        </div>
        <div class="main__form">
          <form action="" class="form">
            <div class="form__header">
              <div class="form__button">
                <div class="form__button-img">
                  <img src="img/icon/tourform.svg" alt="">
                </div>
                <div class="form__button-title">
                  Туры
                </div>
              </div>
            </div>
            <div class="form__body">
              <div class="form__input-body">
                <div class="form__title">Откуда</div>
                <input type="text" placeholder="Название города или аэропорта" class="form__input">
              </div>
              <div class="form__input-body">
                <div class="form__title">Куда</div>
                <input type="text" placeholder="Название города или аэропорта" class="form__input">
              </div>
              <div class="form__input-body">
                <div class="form__title">Дата тура</div>
                <input type="text" placeholder="Выберите дату" class="form__input">
              </div>
              <button class="form__submit btn-orange" type="submit">Поиск</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class="subinfo">
    <div class="subinfo__container">
      <div class="subinfo__body">
        <div class="subinfo__item">
          <div class="subinfo__img">
            <img src="img/icon/tickets.svg" alt="">
          </div>
          <div class="subinfo__title">
            Простой поиск билетов
          </div>
          <div class="subinfo__text">
            Авиакомпании, осуществляющие перелет, всегда выставляют несколько возможных вариантов цен.
            Чем больше городов, из которых вы хотите отправиться, тем больше таких рейсов и выше цена.
          </div>
        </div>
        <div class="subinfo__item">
          <div class="subinfo__img">
            <img src="img/icon/tickets2.svg" alt="">
          </div>
          <div class="subinfo__title">
            Простой поиск билетов
          </div>
          <div class="subinfo__text">
            Авиакомпании, осуществляющие перелет, всегда выставляют несколько возможных вариантов цен.
            Чем больше городов, из которых вы хотите отправиться, тем больше таких рейсов и выше цена.
          </div>
        </div>
        <div class="subinfo__item">
          <div class="subinfo__img">
            <img src="img/icon/tickets3.svg" alt="">
          </div>
          <div class="subinfo__title">
            Простой поиск билетов
          </div>
          <div class="subinfo__text">
            Авиакомпании, осуществляющие перелет, всегда выставляют несколько возможных вариантов цен.
            Чем больше городов, из которых вы хотите отправиться, тем больше таких рейсов и выше цена.
          </div>
        </div>
      </div>
    </div>
  </section>
  <div data-tabs class="tabs">
    <nav data-tabs-titles class="tabs__navigation">
      <button type="button" class="tabs__title _tab-active">Таб №1</button>
      <button type="button" class="tabs__title">Таб №2</button>
      <button type="button" class="tabs__title">Таб №3</button>
    </nav>
    <div data-tabs-body class="tabs__content">
      <div class="tabs__body">
        Содержимое первого таба
      </div>
      <div class="tabs__body">
        Содержимое второго таба
      </div>
      <div class="tabs__body">
        Содержимое третьего таба
      </div>
    </div>
  </div>
  <section class="tour">
    <div class="tour__container">
      <div class="tour__body">
        <div class="tour__title">
          Специальные предложения Города Грузии
        </div>
        <div data-tabs class="tabs">
          <nav data-tabs-titles class="tabs__navigation">
            <button type="button" class="tabs__title _tab-active">
              <div class="tabs__nav-img">
                <img src="img/icon/tour1.svg" alt="">
              </div>
              Популярные туры
            </button>
            <button type="button" class="tabs__title">
              <div class="tabs__nav-img">
                <img src="img/icon/tour2.svg" alt="">
              </div>
              Пляжные туры
            </button>
          </nav>
          <div data-tabs-body class="tabs__content">
            <div class="tabs__body">
              <div class="tabs__inner">
                <div v-for="(tour, index) in tours" :key="index" class="tabs__item">
                  <div class="tabs__img">
                    <img :src="`img/bg/${tour.bg}.jpg`" alt="">
                  </div>
                  <div class="tabs__price">
                    $ {{tour.price}}
                  </div>
                  <div class="tabs__title-item">
                    {{tour.title}}
                  </div>
                  <div class="tabs__subtitle">
                    {{tour.dataTour}}
                  </div>
                </div>
              </div>
            </div>
            <div class="tabs__body">
              Содержимое второго таба
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="callback">
    <div class="callback__bg">
      <img src="img/bg/footerbg.jpg" alt="">
    </div>
    <div class="callback__container">
      <div class="callback__body">
        <div class="callback__info">
          <div class="callback__title">
            Почему путешественники выбирают нас?
          </div>
          <div class="callback__subtitle">
            Лучший способ купить билеты онлайн!
          </div>
        </div>
        <div class="callback__form">
          <form action="" class="form">
            <input type="text" placeholder="Введите имя" class="form__input">
            <input type="mail" placeholder="Введите email" class="form__input">
            <button class="form__submit btn-orange" type="submit">Отправить заявку</button>
          </form>
        </div>
        <div class="callback__social social">
          <div class="social__item">
            <img src="img/icon/twiter.svg" alt="">
          </div>
          <div class="social__item">
            <img src="img/icon/facebook.svg" alt="">
          </div>
          <div class="social__item">
            <img src="img/icon/insta.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bottom-nav">
    <div class="bottom-nav__container">
      <div class="bottom-nav__body">
        <div class="bottom-nav__nav">
          <div class="bottom-nav__logo">
            <img src="img/logodark.svg" alt="">
          </div>
          <ul class="bottom-nav__list">
            <li class="bottom-nav__item">
              <a href="" class="bottom-nav__link">Спланируй тур</a>
            </li>
            <li class="bottom-nav__item">
              <a href="" class="bottom-nav__link">Туры</a>
            </li>
            <li class="bottom-nav__item">
              <a href="" class="bottom-nav__link">Трансфер</a>
            </li>
            <li class="bottom-nav__item">
              <a href="" class="bottom-nav__link">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__news footer-news">
          <div class="footer-news__title">
            Последние новости
          </div>
          <div class="footer-news__body">
            <div class="footer-news__item">
              <div class="footer-news__img">
                <img src="img/footernew.jpg" alt="">
              </div>
              <div class="footer-news__item-title">
                Добро пожаловать в Тбилиси
              </div>
              <div class="footer-news__text">
                Спецпредложение от авиакомпании.
              </div>
            </div>
          </div>
        </div>
        <div class="footer__info footer-info">
          <div class="footer-info__about">
            <div class="footer-info__about-title">
              О нас
            </div>
            <div class="footer-info__about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
          <div class="footer-info__contact">
            <div class="footer-info__contact-geo">
              <div class="footer-info__contact-img">
                <img src="img/icon/geo.svg" alt="">
              </div>
              12121 Тбилиси, Грузия, улица Пушкина 21р
            </div>
            <div href="" class="footer-info__contact-tel">
              <div class="footer-info__contact-img">
                <img src="img/icon/tel.svg" alt="">
              </div>
              <a href="tel:+122342321">+1 223 4232 1</a>,
              <a href="tel:+232322323">+23232 2323</a>
            </div>
            <a href="" class="footer-info__contact-mail">
              <div class="footer-info__contact-img">
                <img src="img/icon/insta.svg" alt="">
              </div>
            </a>
          </div>
          <div class="footer-info__social">
            <div class="footer-info__social-item">
              <img src="img/twiter.svg" alt="">
            </div>
            <div class="footer-info__social-item">
              <img src="img/facebook.svg" alt="">
            </div>
            <div class="footer-info__social-item">
              <img src="img/insta.svg" alt="">
            </div>
          </div>
        </div>
        <div class="footer__tour">
          <div class="footer__tour-title">
            Популярные туры
          </div>
          <div class="footer__tour-popular">

          </div>
          <div class="footer__tour-policy">

          </div>
          <div class="footer__tour-pyment">

          </div>
        </div>
        <div class="footer__copiryght">
          <p>© ВашаКомпания 2022.</p>
          <p>Все права защищены</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {flsFunctions} from '../helpers/app'

export default {
  name: 'HomeView',
  data(){
    return{
      tours:[
        {
          bg:'tour1',
          title:'Тбилиси, летний тур',
          dataTour:'Июнь 3, 2022 - Июль 22, 2022',
          price:'123',
        },
        {
          bg:'tour2',
          title:'Тбилиси, летний тур',
          dataTour:'Июнь 3, 2022 - Июль 22, 2022',
          price:'123',
        },
      ]
    }
  },
  mounted() {
    flsFunctions.tabs()
  }

}
</script>
