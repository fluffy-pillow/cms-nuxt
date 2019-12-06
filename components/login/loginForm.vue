<template>
  <form class="kt-form" action="" @submit.prevent="onSubmit">
    <transition name="fade">
      <login-notice v-if="bFormError"></login-notice>
    </transition>

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
</template>

<script>
    import LoginNotice from "./loginNotice";
    export default {
      name: "loginForm",
      components: {LoginNotice},
      data () {
        return {
          email: '',
          password: '',
          bLoading: false,
          buttonClass: 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light',
          bFormError: false
        }
      },
      methods: {
        onSubmit () {
          this.$validator.validateAll().then((result) => {
            if (result) {
              this.bLoading = true
              setTimeout(() => {
                this.bLoading = false
//                this.bFormError = true
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
