<template>

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
