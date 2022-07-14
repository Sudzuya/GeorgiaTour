<template>
  <div class="search-car">
    <div class="search-car__container">
      <div class="search-car__body">
        <div class="search-car__info-road" v-if="time && length">
          <div class="search-car__route-length">
            Длина маршрута: <span>{{ length }}</span>
          </div>
          <div class="search-car__duration">
            Продолжительность поездки: <span>{{ time }}</span>
          </div>
        </div>
        <div class="search-car__info-road" v-else>
          Такого маршрута не найдено
        </div>
        <div class="search-car__drivers drivers">
          <div class="drivers__select-body">
            <app-select
                title="Язык"
                :options="optionsLanguage"
                v-model="selectedLanguage"
            />
            <app-select
                title="Тип машины"
                :options="optionsCar"
                v-model="selectedCar"
            />
            <app-select
                title="Тип топлива"
                :options="optionsFuel"
                v-model="selectedFuel"
            />
            <app-select
                title="По цене"
                :options="optionsPrice"
                v-model="selectedPrice"
            />
          </div>
          <ul class="drivers__list">
            <li v-for="(driver, index) in filteredDrivers" :key="index" class="drivers__item">
              <div class="drivers__header">
                <div class="drivers__info-driver">
                  <div class="drivers__img-driver">
                    <img src="img/drivers/driver/01.png" alt="">
                  </div>
                  <div class="drivers__title">
                    {{ driver.name }}
                  </div>
                  <div class="drivers__rating">
                    (124 отзыва)
                  </div>
                </div>
                <div class="drivers__type-car">
                  <div class="drivers__type-car-img">
                    <img :src="`img/drivers/icon-car/${driver.typeCarImg}.svg`" alt="">
                  </div>
                  {{ driver.typeCar.title }}
                </div>
              </div>
              <div class="drivers__body">
                <div class="drivers__lang-body">
                  <span>Язык:</span>
                  <ul class="drivers__lang-list">
                    <li v-for="(lang, index) in driver.languages" :key="index" class="drivers__lang-list-item">
                      {{ lang.title }}
                      <template v-if="index < driver.languages.length - 1">,&nbsp;</template>
                    </li>
                  </ul>
                </div>
                <div class="drivers__content">
                  <div class="drivers__img">
                    <img :src="`img/drivers/car/${driver.nameImage}.png`" alt="">
                  </div>
                  <div class="drivers__info">
                    <div class="drivers__info-title">
                      {{ driver.carName }}
                    </div>
                    <div class="drivers__info-fuel">
                      <span>Тип топлива: </span>{{ driver.fuel.title }}
                    </div>
                    <div class="drivers__info-place">
                      <span>Количество мест: </span>{{ driver.place }}
                    </div>
                    <div class="drivers__info-price">
                      <span>Цена за авто: </span>{{ driver.price }}
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
import {drivers} from '@/fakedb/fakedbRiders'
import {arrayTours} from '@/fakedb/fakedb'
import {watch, ref, computed} from 'vue'
import {form} from "@/store/globalSearch";

export default {
  components: {
    AppSelect
  },
  setup() {
    const length = ref(null)
    const time = ref(null)

    //options
    const optionsLanguage = []
    const optionsCar = []
    const optionsFuel = []
    const optionsPrice = [
      {
        title: 'По возрастанию',
        value: 'asc'
      },
      {
        title: 'По убыванию',
        value: 'desc'
      }
    ]
    //selectedOptions
    const selectedLanguage = ref(null)
    const selectedCar = ref(null)
    const selectedFuel = ref(null)
    const selectedPrice = ref(null)

    //assembling options
    drivers.forEach((e) => {
      e.languages.forEach((lang) => {
        if (!optionsLanguage.find((e) => e.value === lang.value)) {
          optionsLanguage.push(lang)
        }
      })
      if (!optionsCar.find((el) => el.value === e.typeCar.value)) {
        optionsCar.push(e.typeCar)
      }
      if (!optionsFuel.find((el) => el.value === e.fuel.value)) {
        optionsFuel.push(e.fuel)
      }
    })

    //computed
    const filteredDrivers = computed(() => {
          let tmpArray = JSON.parse(JSON.stringify(drivers))
          if (selectedLanguage.value) {
            tmpArray = tmpArray.filter((e) => e.languages.find((lang) => lang.value === selectedLanguage.value))
          }
          if (selectedFuel.value) {
            tmpArray = tmpArray.filter((e) => e.fuel.value === selectedFuel.value)
          }
          if (selectedCar.value) {
            tmpArray = tmpArray.filter((e) => e.typeCar.value === selectedCar.value)
          }

          if (selectedPrice.value) {
            if (selectedPrice.value === 'desc') {
              tmpArray.sort((a, b) => {
                if (a.price < b.price) return 1
                if (a.price === b.price) return 0
                if (a.price > b.price) return -1
              })
            } else {
              tmpArray.sort((a, b) => {
                if (a.price > b.price) return 1
                if (a.price === b.price) return 0
                if (a.price < b.price) return -1
              })
            }
          }
          return tmpArray
        }
    )

    //watchers
    watch(() => form, () => {
          const tour = arrayTours.find((e) =>
              e.whereFrom.includes(form.value.from) &&
              e.where.includes(form.value.to) &&
              new Date(e.date).getTime() === new Date(form.value.date).getTime()
          )
          length.value = tour?.roadLenght
          time.value = tour?.time
        },
        {
          deep: true
        })

    return {
      filteredDrivers,
      optionsLanguage,
      optionsCar,
      optionsFuel,
      optionsPrice,
      selectedLanguage,
      selectedCar,
      selectedFuel,
      selectedPrice,
      form,
      time,
      length,
    }
  }
}
</script>

<style>
.drivers__select-body {
  display: flex;
  justify-content: space-between;
}
</style>
