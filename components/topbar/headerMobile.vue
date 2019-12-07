<template>
  <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed ">
    <div class="kt-header-mobile__logo">
      <nuxt-link to="/">
        <img alt="Logo" src="../../assets/media/logos/logo-6.png" />
      </nuxt-link>
    </div>
    <div class="kt-header-mobile__toolbar">
      <button class="kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left"
              id="kt_aside_mobile_toggler"
              @click="toggleAside"
              :class="{'kt-header-mobile__toolbar-toggler--active' : bAsideOpen}"
      >
        <span></span>
      </button>
      <button class="kt-header-mobile__toolbar-toggler"
              id="kt_header_mobile_toggler"
              @click="toggleToolbar"
              :class="{'kt-header-mobile__toolbar-toggler--active' : bToolbarOpen}"
      >
        <span></span>
      </button>
      <button class="kt-header-mobile__toolbar-topbar-toggler"
              id="kt_header_mobile_topbar_toggler"
              @click="toggleTopbar"
              :class="{'kt-header-mobile__toolbar-topbar-toggler--active' : bTopbarOpen}"
      >
        <i class="flaticon-more"></i>
      </button>
    </div>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "headerMobile",
        methods: {
          ...mapActions({
            toggleAside: 'aside/toggle',
            toggleTopbar: 'topbar/toggle',
            toggleToolbar: 'toolbar/toggle'
          })
        },
        computed: {
          ...mapGetters({
            bAsideOpen: 'aside/isOpen',
            bTopbarOpen: 'topbar/isOpen',
            bToolbarOpen: 'toolbar/isOpen'
          })
        }
    }
</script>

<style scoped>

</style>
