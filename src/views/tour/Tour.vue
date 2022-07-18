<template>
  <div class="tour-full">
    <div class="tour-full__container">
      <div class="tour-full__body">
        <div class="tour-full__item">
          <div class="tour-full__img">
            <img src="/img/tour/01.jpg" alt="">
          </div>
          <div class="tour-full__price-title">
            <div class="tour-full__price">$ 123</div>
            <div class="tour-full__title">Поездка в Тбилиси</div>
          </div>
          <div class="tour-full__date">Июнь 3, 2022 - Июль 22, 2022</div>
          <div class="tour-full__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. olorem eum fugiat q</div>
          <div class="tour-full__action">
            <button class="tour-full__btn btn-orange">Приобрести тур</button>
            <button class="tour-full__btn btn-orange">Добавить в корзину</button>
          </div>
        </div>
        <div class="tour-slider-body">
          <div class="tour-slider-body__title">
            Галерея
          </div>
          <div class="tour-full__gallery tour-slider">
          <div class="tour-slider__wrapper">
            <div class="tour-slider__slide">
              <div class="tour-slider__item">
                <img src="img/tour/slider/01.jpg" alt="">
              </div>
            </div>
            <div class="tour-slider__slide">
              <div class="tour-slider__item">
                <img src="img/tour/slider/02.jpg" alt="">
              </div>
            </div>
            <div class="tour-slider__slide">
              <div class="tour-slider__item">
                <img src="img/tour/slider/03.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../helpers/files/sliders.js';

export default {
  name:'tour',

}
</script>

<style lang="scss">
.tour-full{
  color: #040813;
  &__item{
    margin-bottom: 72px;
  }
  &__img{
    width: 1290px;
    height: 670px;
    margin-bottom: 56px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__price-title{
    display: flex;
    align-items: center;
    gap: 29px;
    margin-bottom: 12px;
  }
  &__title{
    font-weight: 500;
    font-size: 48px;
  }
  &__price{
    padding: 17px 23px;
    color: #fff;
    background: #040813;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  &__date{
    color: #AAAAAA;
    font-weight: 500;
    margin-bottom: 18px;
  }
  &__text {
    font-size: 18px;
    line-height: 137%;
  }
  &__action {
    display: flex;
    gap: 30px;
  }
}
.tour-slider-body {
  &__title{
    font-weight: 600;
    font-size: 32px;
    text-align: center;
    margin-bottom: 42px;
  }
}
.tour-slider{
  display: flex;
  overflow: hidden;

  &__wrapper{
    display: flex;

  }
  &__item{
    width: 410px;
    height: 415px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>