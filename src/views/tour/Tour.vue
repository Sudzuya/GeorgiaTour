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
            <div class="tour-full__title title">Поездка в Тбилиси</div>
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

</style>