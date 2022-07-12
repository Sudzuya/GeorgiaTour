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
  <router-view/>
</template>

<script>
</script>

<style lang="scss" scoped>
.header{
  &__body{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.account{
  display: flex;
  gap: 21px;
  &__login{
    font-weight: 700;
    color: #333333;
  }
  &__reg{
    padding: 7px 24px;
  }
}
</style>
