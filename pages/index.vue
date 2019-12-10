<template>
  <div>
   <HeaderMobile/>
    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <AsideContainer/>
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
          <HeaderDefault/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import HeaderMobile from "../components/topbar/headerMobile";
import AsideContainer from "../components/topbar/asideContainer";
import HeaderDefault from "../components/topbar/headerDefault";
export default {
  components: {HeaderDefault, AsideContainer, HeaderMobile},
  head () {
    return {
      bodyAttrs: {
        class: this.defaultBodyClass + ' '
        + this.asideOnClass + ' '
        + this.asideMenuOverlayOnClass + ' '
        + this.headerMenuOn
      }
    }
  },
  data () {
    return {
      defaultBodyClass: 'kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-aside--minimize'
    }
  },
  computed: {
    ...mapGetters({
      bAsideOpen: 'aside/isOpen',
      bShowAsideOverlay: 'aside/overlayIsShow',
      bHeaderMenuOpen: 'headerMenu/isOpen'
    }),
    asideOnClass () {
      return (this.bAsideOpen) ? 'kt-aside--on' : ''
    },
    asideMenuOverlayOnClass () {
      return (this.bShowAsideOverlay) ? 'kt-aside-menu-overlay--on' : ''
    },
    headerMenuOn () {
      return (this.bHeaderMenuOpen) ? ' kt-header-menu-wrapper--on' : ''
    }
  }
}
</script>

<style>
</style>
