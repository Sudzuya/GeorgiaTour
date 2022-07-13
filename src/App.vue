<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo">
          <img src="img/logo.svg" alt="">
        </div>
        <div class="header__account account">
          <button class="account__login">Войти</button>
          <button class="account__reg btn-orange">Регистрация</button>
        </div>
      </div>
    </div>
  </header>
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
                <input type="text" v-model="form.from" placeholder="Название города или аэропорта" class="form__input">
              </div>
              <div class="form__input-body">
                <div class="form__title">Куда</div>
                <input type="text" v-model="form.to" placeholder="Название города или аэропорта" class="form__input">
              </div>
              <div class="form__input-body">
                <div class="form__title">Дата тура</div>
                <input type="date" v-model="form.date" class="form__input">
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
  <router-view/>
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
          <div class="footer-news__title footer__title">
            Последние новости
          </div>
          <div class="footer-news__body">
            <div class="footer-news__item">
              <div class="footer-news__img">
                <img src="img/bg/footernew.jpg" alt="">
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
            <div class="footer-info__about-title footer__title">
              О нас
            </div>
            <div class="footer-info__about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
          </div>
          <div class="footer-info__contact">
            <div class="footer-info__contact-geo">
              <div class="footer-info__contact-img">
                <img src="img/icon/geo.svg" alt="">
              </div>
              12121 Тбилиси, Грузия, улица Пушкина 21р
            </div>
            <div class="footer-info__contact-tel">
              <div class="footer-info__contact-img">
                <img src="img/icon/tel.svg" alt="">
              </div>
              <a href="tel:+122342321">+1 223 4232 1</a>,
              <a href="tel:+232322323">+23232 2323</a>
            </div>
            <a href="mailto:info@yourdomain.com" class="footer-info__contact-mail">
              <div class="footer-info__contact-img">
                <img src="img/icon/mail.svg" alt="">
              </div>
              info@yourdomain.com
            </a>
          </div>
          <div class="footer-info__social">
            <div class="footer-info__social-item">
              <img src="img/icon/twiter.svg" alt="">
            </div>
            <div class="footer-info__social-item">
              <img src="img/icon/facebook.svg" alt="">
            </div>
            <div class="footer-info__social-item">
              <img src="img/icon/insta.svg" alt="">
            </div>
          </div>
        </div>
        <div class="footer__tour">
          <div class="footer__tour-title footer__title">
            Популярные туры
          </div>
          <div class="footer__tour-popular popular-tour">
            <div class="popular-tour__item">Тур в Тбилиси</div>
            <div class="popular-tour__item">Поти тур</div>
            <div class="popular-tour__item">Сухум тур</div>
            <div class="popular-tour__item">Пляжный тур</div>
          </div>
          <div class="footer__tour-policy policy-tour">
            <a href="" class="policy-tour__link">Политика конфиденциальности</a>
            <a href="" class="policy-tour__link">Условия туров</a>
          </div>
          <div class="footer__tour-pyment pyment-tour">
            <div class="pyment-tour__img">
              <img src="img/icon/mastercard.jpg" alt="">
            </div>
            <div class="pyment-tour__img">
              <img src="img/icon/visa.jpg" alt="">
            </div>
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
import {form} from "@/store/globalSearch";
import {watch} from "vue";
import {useRouter, useRoute} from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    watch(() => form,
        () => {
          if ((form.value.from || form.value.to || form.value.date) && route.name !== 'SearchCar') {
            router.push({
              name: 'SearchCar', params: {
                from: form.value.from,
                to: form.value.to,
                date: form.value.date,
              }
            })
          } else if ((form.value.from || form.value.to || form.value.date) && route.name === 'SearchCar') {
            route.params.from = form.value.from
            route.params.to = form.value.to
            route.params.date = form.value.date
          } else {
            router.push({name: 'home'})
          }
        },
        {
          deep: true
        }
    )
    return {
      form,
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.account {
  display: flex;
  gap: 21px;

  &__login {
    font-weight: 700;
    color: #333333;
  }

  &__reg {
    padding: 7px 24px;
  }
}
</style>
