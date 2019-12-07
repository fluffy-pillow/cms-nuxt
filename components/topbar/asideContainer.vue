<template>
    <div>
      <button class="kt-aside-close"
              id="kt_aside_close_btn"
              @click="closeAside"
      >
        <i class="la la-close"></i>
      </button>
      <div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
           id="kt_aside"
           :class="{'kt-aside--on': bAsideOpen}"
      >

        <Brand></Brand>
        <AsideMenu></AsideMenu>
      </div>
      <div class="kt-aside-overlay"
           v-if="bAsideOpen"
           @click="closeAside"
      >
      </div>
      <div class="kt-aside-menu-overlay"></div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Brand from "./brand";
    import AsideMenu from "./asideMenu";
    export default {
      name: "asideContainer",
      components: {AsideMenu, Brand},
      methods: {
        ...mapActions({
          closeAside: 'aside/close'
        })
      },
      computed: {
        ...mapGetters({
          bAsideOpen: 'aside/isOpen',
        })
      }
    }
</script>

<style scoped>

</style>
