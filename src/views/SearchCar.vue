<template>
  <div class="search-car">
    <div class="search-car__container">
      <div class="search-car__body">
        <div class="search-car__info-road">
          <div class="search-car__route-length">
            Длина маршрута: <span>{{length}}</span>
          </div>
          <div class="search-car__duration">
            Продолжительность поездки: <span>4 часа 35 минут</span>
          </div>
        </div>
        <div class="search-car__drivers drivers">
          <div class="drivers__select-body">
            <app-select
              title="Язык"
              :options="options"
              v-model="selected"
            />
          </div>
          <ul class="drivers__list">
            <li v-for="(driver, index) in drivers" :key="index" class="drivers__item">
              <div class="drivers__header">
                <div class="drivers__info-driver">
                  <div class="drivers__img-driver">
                    <img src="img/drivers/driver/01.png" alt="">
                  </div>
                  <div class="drivers__title">
                    {{driver.nameDriver}}
                  </div>
                  <div class="drivers__rating">
                    (124 отзыва)
                  </div>
                </div>
                <div class="drivers__type-car">
                    <div class="drivers__type-car-img">
                      <img :src="`img/drivers/icon-car/${driver.typeCar}.svg`" alt="">
                    </div>
                    {{driver.nameCar}}
                </div>
              </div>
              <div class="drivers__body">
                <div class="drivers__lang-body">
                 <span>Язык:</span>  
                  <ul class="drivers__lang-list">
                    <li v-for="(lang, index) in driver.langs" :key="index" class="drivers__lang-list-item">
                      {{lang}}
                    </li>
                  </ul>
                </div>
                <div class="drivers__content">
                  <div class="drivers__img">
                    <img :src="`img/drivers/car/${driver.carName}.png`" alt="">
                  </div>
                  <div class="drivers__info">
                    <div class="drivers__info-title">
                      {{driver.carTitle}}
                    </div>
                    <div class="drivers__info-fuel">
                      <span>Тип топлива: </span>{{driver.fuel}}
                    </div>
                    <div class="drivers__info-place">
                      <span>Количество мест: </span>{{driver.place}}
                    </div>
                    <div class="drivers__info-price">
                      <span>Цена за авто: </span>{{driver.price}}
                    </div>
                    <div class="drivers__info-information">
                      Стоимость окончательная!
                    </div>
                    <button class="drivers__info-book btn-orange">
                      Забронировать
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSelect from '../components/AppSelect'
import {drivers} from '../fakedb/fakedbRiders'
import {arrayTours} from '../fakedb/fakedb'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'

export default {
  components: {
    AppSelect
  },
  data () {
    return {
      options: [
        {
          title: 'Русский',
          value: 'RU'
        },
         {
          title: 'Английский',
          value: 'En'
        },
      ],
      selected: null
    }
  },
  setup() {
    const route = useRoute()
    
    const length = ref(null)
    watch(() => route, () => {
      console.log('123');
     length.value = arrayTours.find((e) => e.whereFrom.includes(route.params.from) && e.where.includes(route.params.to))?.roadLenght
    },
    {
      deep: true
    })

    return {
      drivers,
      length,
    }
  }
}
</script>

<style>

</style>
