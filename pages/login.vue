<template>
  <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin" id="kt_login">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
         :style="{backgroundImage: 'url(' + require('@/assets/media/bg/bg-3.jpg') + ')'}">
      <div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
        <div class="kt-login__container">
          <div class="kt-login__logo">
            <a href="#">
              <img src="../assets/media/logos/logo-7.png">
            </a>
          </div>
          <div class="kt-login__signin">
            <div class="kt-login__head">
              <h3 class="kt-login__title">Sign In To Admin</h3>
            </div>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import LoginForm from "../components/login/loginForm";
    export default {
      name: "login",
      components: {LoginForm},
    }
</script>

<style lang="scss">
 @import "../assets/sass/pages/login/login.scss";
</style>
