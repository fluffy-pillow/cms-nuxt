<template>
  <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v3 kt-login--signin" id="kt_login">
    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
         :style="{backgroundImage: 'url(' + require('@/assets/media/bg/bg.jpg') + ')'}">
      <div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
        <div class="kt-login__container">
          <div class="kt-login__logo">
            <a href="#">
              <img src="../assets/media/logos/logo.png">
            </a>
          </div>
          <div class="kt-login__signin">
            <div class="kt-login__head">
              <h3 class="kt-login__title">Sign In To Admin</h3>
            </div>
            <form class="kt-form" action="" @submit.prevent="onSubmit">
              <div class="input-group">
                <input class="form-control"
                       type="text"
                       placeholder="Email"
                       name="email"
                       autocomplete="off"
                       v-validate="'required|email'"
                >
                <div class="error invalid-feedback" :class="{show: errors.has('email')}">
                  {{ errors.first('email') }}
                </div>
              </div>
              <div class="input-group">
                <input class="form-control"
                       type="password"
                       placeholder="Password"
                       name="password"
                       v-validate="'required'"
                >
                <div class="error invalid-feedback" :class="{show: errors.has('password')}" data-vv-validate-on="blur">
                  {{ errors.first('password') }}
                </div>
              </div>
              <div class="row kt-login__extra">
                <div class="col">
                  <label class="kt-checkbox">
                    <input type="checkbox" name="remember"> Remember me
                    <span></span>
                  </label>
                </div>
              </div>
              <div class="kt-login__actions">
                <button id="kt_login_signin_submit"
                        class="btn btn-brand btn-elevate kt-login__btn-primary"
                        :disabled="bLoading"
                        :class="(bLoading) ? buttonClass : ''"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "login",
        data () {
          return {
            email: '',
            password: '',
            bLoading: false,
            buttonClass: 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light'
          }
        },
        methods: {
          onSubmit () {
            this.$validator.validateAll().then((result) => {
              if (result) {
                this.bLoading = true
                setTimeout(() => {
                  this.bLoading = false
                  this.$router.push('/')
                }, 2000)
              }
            }).catch(error => {
              console.log(error)
            })
          }
        }
    }
</script>

<style scoped>

</style>
