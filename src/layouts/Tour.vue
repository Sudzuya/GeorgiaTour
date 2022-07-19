<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <router-link :to="{name:'Home'}" class="header__logo">
          <img src="img/logo.svg" alt="">
        </router-link>
        <div class="header__account account">
          <button class="account__login">Войти</button>
          <button class="account__reg btn-orange">Регистрация</button>
        </div>
      </div>
    </div>
  </header>
  <div>
      <slot></slot>
  </div>
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
export default {

}
</script>

<style>

</style>