<template>
  <form class="kt-form" action="" @submit.prevent="onSubmit">
    <transition name="fade">
      <LoginNotice v-if="bError"></LoginNotice>
    </transition>

    <div class="input-group">
      <input class="form-control"
             type="text"
             placeholder="Email"
             name="email"
             autocomplete="off"
             v-validate="'required|email'"
             v-model="email"
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
             v-model="password"
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
    import {mapActions, mapGetters} from 'vuex'
    export default {
      name: "loginForm",
      components: {LoginNotice},
      data () {
        return {
          email: '',
          password: '',
          bLoading: false,
          buttonClass: 'kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light',
        }
      },
      methods: {
        ...mapActions({
          login: 'auth/login'
        }),
        onSubmit () {

        this.$validator.validateAll().then((result) => {
            if (result) {
              this.bLoading = true
              let data = {email: this.email, password: this.password}
              this.login(data).then(res => {
                this.bLoading = false
                if (!res.error) {
                  this.$router.push('/')
                }
              })
            }
          }).catch(error => {
            console.log(error)
          })
        }
      },
      computed: {
        ...mapGetters({
          bError: 'auth/isError'
        })
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
