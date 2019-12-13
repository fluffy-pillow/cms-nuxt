<template>
  <div class="alert alert-danger alert-dismissible">
    <div class="alert-text">
      {{errorInfo.message}}
    </div>
    <div class="alert-close">
      <i class="flaticon2-cross kt-icon-sm">

      </i>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "loginNotice",
        computed: {
          ...mapGetters({
            errorInfo: 'auth/getErrorInfo'
          })
        }
    }
</script>

<style scoped>

</style>
