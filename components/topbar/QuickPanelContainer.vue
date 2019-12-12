<template>
  <div>
      <QuickPanel/>
      <div class="kt-quick-panel-overlay"
           v-if="bOpen"
           @click="close"
      >

      </div>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import QuickPanel from "./QuickPanel";
    export default {
      name: "QuickPanelContainer",
      components: {QuickPanel},
      methods: {
        ...mapActions({
          close: 'quickPanel/close'
        })
      },
      computed: {
        ...mapGetters({
          bOpen: 'quickPanel/isOpen'
        })
      }
    }
</script>

<style scoped>

</style>
