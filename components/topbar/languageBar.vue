<template>
  <div class="kt-header__topbar-item kt-header__topbar-item--langs"
       :class="{show: bOpen}"
       v-click-outside="close"
  >
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px"   ref="topbarWrapper">
        <span class="kt-header__topbar-icon kt-header__topbar-icon--brand"  @click="toggle">
          <img class="" src="../../assets/media/flags/260-united-kingdom.svg" alt="" />
        </span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim"
       :class="{show: bOpen}"
       :style="{transform: 'translate3d(' + dropdownFitPosition + 'px, 0, 0)'}"
       ref="dropdownMenuFit"
       x-placement="bottom-end"
    >
      <ul class="kt-nav kt-margin-t-10 kt-margin-b-10">
        <li class="kt-nav__item"
            v-for="(item, key) of items"
            :key="key"
        >
          <span class="kt-nav__link">
            <span class="kt-nav__link-icon">
              <img :src="require('@/assets/media/flags/' + item.image)" alt="" />
            </span>
             <span class="kt-nav__link-text">{{item.text}}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "languageBar",
        data () {
          return {
            bOpen: false,
            dropdownFitPosition: 0,
            items: [
              {
                image: '226-united-states.svg',
                text: 'English'
              },
              {
                image: '128-spain.svg',
                text: 'Spanish'
              },
              {
                image: '162-germany.svg',
                text: 'German'
              },
            ]
          }
        },
        methods: {
          toggle () {
            this.bOpen = !this.bOpen
          },
          close () {
            this.bOpen = false
          },
          handleWindowResize () {
            let topbarWrapperRect = this.$refs.topbarWrapper.getBoundingClientRect()
            this.dropdownFitPosition = topbarWrapperRect.x - topbarWrapperRect.width - 210
          }
        },
        directives: {
          ClickOutside
        },
        mounted () {
          this.handleWindowResize()
          window.addEventListener("resize", this.handleWindowResize)
        },
        beforeDestroy () {
          window.removeEventListener("resize", this.handleWindowResize)
        }
    }
</script>

<style scoped>

</style>
