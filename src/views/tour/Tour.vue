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
          <div class="tour-slider-body__container">
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
            <div class="tour-slider__navigation">
              <button class="tour-slider__navigation-prev">
                <img src="img/icon/arrleft.svg" alt="">
              </button>
              <button class="tour-slider__navigation-next">
                <img src="img/icon/arrright.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../helpers/files/sliders.js';
import {initSliders} from "@/helpers/files/sliders";

export default {
  name:'tour',
  mounted() {
    initSliders()
  }
}
</script>

<style lang="scss">
@import "../../scss/base/mixins";
.tour-full{
  background: #F3F6F8;
  color: #040813;
  padding-bottom: 97px;
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
    margin-bottom: 42px;
  }
  &__action {
    display: flex;
    gap: 30px;
  }
}

.tour-slider-body {
  position: relative;
  padding: 0px 110px;
  &__container{
    max-width: rem(1130);
    padding: 0;
  }
  &__title{
    font-weight: 600;
    font-size: 32px;
    text-align: center;
    margin-bottom: 42px;
  }
}

.tour-slider{
  display: flex;
  height: 415px;
  overflow: hidden;

  &__wrapper{
    display: flex;
    align-items: center;
  }
  &__slide {
    flex-shrink:0;
  }
  &__item{
    //height: 305px;
    //width: 305px;
    transition: all .5s ease;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .active-slide {
    .tour-slider__item{
      transform: scale(1.5);
      //width: 410px;
      //height: 415px;
    }
  }
}

.tour-slider__navigation {
  position: absolute;
  top: calc(50% + 32px);
  left: 50%;
  max-width: 1130px;
  width: 100%;
  transform: translateY(50%) translateX(-50%);
  display: flex;
  justify-content: space-between;
}
</style>