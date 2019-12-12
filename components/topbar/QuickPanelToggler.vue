<template>
  <div class="kt-header__topbar-item kt-header__topbar-item--quickpanel" data-toggle="kt-tooltip" title="Quick panel" data-placement="top">
    <div class="kt-header__topbar-wrapper">
      <span class="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn" @click="toggle">
        <i class="flaticon2-cube-1"></i>
      </span>
    </div>
  </div>

</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "QuickPanelToggler",
        methods: {
          ...mapActions({
            toggle: 'quickPanel/toggle'
          })
        }
    }
</script>

<style scoped>

</style>
