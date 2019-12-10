<template>
  <div class="kt-header-menu-container" style="display: flex;">
    <button class="kt-header-menu-wrapper-close"
            id="kt_header_menu_mobile_close_btn"
            @click="closeHeaderMenu"
    >
      <i class="la la-close"></i>
    </button>
    <HeaderMenu/>
    <div class="kt-header-menu-wrapper-overlay"
         v-if="bHeaderMenuOpen"
         @click="closeHeaderMenu"
    >
    </div>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import HeaderMenu from "./headerMenu";
    export default {
      name: "HeaderMenuContainer",
      components: {HeaderMenu},
      methods: {
        ...mapActions({
          closeHeaderMenu: 'headerMenu/close'
        })
      },
      computed: {
        ...mapGetters({
          bHeaderMenuOpen: 'headerMenu/isOpen',
        })
      }
    }
</script>

<style scoped>

</style>
