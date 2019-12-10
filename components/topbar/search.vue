<template>
  <div class="kt-header__topbar-item kt-header__topbar-item--search">
    <div class="kt-header__topbar-wrapper">
      <div class="kt-quick-search kt-quick-search--inline kt-quick-search--result-compact" id="kt_quick_search_inline"
           :class="{'kt-quick-search--has-result show': bNotEmpty}"
      >
        <form method="get" class="kt-quick-search__form"
        >
          <div class="input-group"
               :class="{
                'input-group kt-spinner kt-spinner--input kt-spinner--sm kt-spinner--brand kt-spinner--right':  bLoading
               }"
          >
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="flaticon2-search-1"></i>
              </span>
            </div>
            <input type="text"
                   class="form-control kt-quick-search__input"
                   v-model="query" placeholder="Search..."
                   @input="handleInput"
            >
            <div class="input-group-append" @click="clearQuery"
            >
              <span class="input-group-text">
                <i class="la la-close kt-quick-search__close"
                   :style="{display: (bNotEmpty) ? 'flex' : 'none'}">

                </i>
              </span>
            </div>
          </div>
        </form>
        <div id="kt_quick_search_toggle" data-toggle="dropdown" data-offset="0px,10px" ref="dropdown"></div>
        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-lg"
             ref="dropdownMenuFit"
             :class="{'show': bNotEmpty}"
             :style="{transform: 'translate3d(' + dropdownFitPosition + 'px, 0, 0)'}"
        >
          <div class="kt-quick-search__wrapper kt-scroll" data-scroll="true" data-height="300" data-mobile-height="200">
            <SearchResult :items="items"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SearchResult from "./searchResult";
    export default {
        name: "search",
      components: {SearchResult},
      data () {
          return {
            query: '',
            timerId: null,
            bLoading: false,
            dropdownFitPosition: 0,
            items: [
              {
                category: 'Documents',
                items: [
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/files/doc.svg',
                    title: 'tAirPlus Requirements',
                    desc: 'by Grog John'
                  },
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/files/pdf.svg',
                    title: 'TechNav Documentation',
                    desc: 'by Mary Broun'
                  },
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/files/doc.svg',
                    title: 'TechNav Documentation',
                    desc: 'by Mary Broun'
                  },
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/files/doc.svg',
                    title: 'TechNav Documentation',
                    desc: 'by Mary Broun'
                  }
                ]
              },
              {
                category: 'Members'
              },
              {
                category: 'Files'
              }
            ]
          }
        },
        methods: {
          handleInput () {
            this.bLoading = true
            clearTimeout(this.timerId)
            this.timerId = setTimeout(() => {
              this.bLoading = false
            }, 2000)
          },
          clearQuery () {
            this.query = ''
          },
          setDropdownFitPosition () {
            let dropdownRect = this.$refs.dropdown.getBoundingClientRect()
            this.dropdownFitPosition = dropdownRect.x - dropdownRect.width - 20
          }
        },
        computed: {
          bNotEmpty () {
            return (!this.bLoading && this.query !== '')
          }
        },
        mounted () {
          this.setDropdownFitPosition()
          window.addEventListener("resize", this.setDropdownFitPosition)
        },
        beforeDestroy () {
          window.removeEventListener("resize", this.setDropdownFitPosition)
        }
    }
</script>

<style scoped>

</style>
