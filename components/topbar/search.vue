<template>
  <div class="kt-header__topbar-item kt-header__topbar-item--search"
       v-click-outside="handleClickOutside"
  >
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
                   @click="handleClick"
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
             :class="{'show': bShow}"
             :style="{transform: 'translate3d(' + dropdownFitPosition + 'px, 0, 0)'}"
        >
          <perfect-scrollbar class="kt-quick-search__wrapper kt-scroll ps--active-y"
               data-scroll="true"
               data-height="300"
               data-mobile-height="200"
               ref="searchWrapper"
               style="overflow: hidden"
          >
            <SearchResult :items="items"/>
          </perfect-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'
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
            bShow: false,
            items: [
              {
                category: 'Documents',
                items: [
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/files/doc.svg',
                    title: 'AirPlus Requirements',
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
                category: 'Members',
                items: [
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/users/300_14.jpg',
                    title: 'Jimmy Curry',
                    desc: 'Software Developer'
                  },
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/users/300_20.jpg',
                    title: 'Milena Gibson',
                    desc: 'UI Designer'
                  },
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/users/300_21.jpg',
                    title: 'Stefan JohnStefan',
                    desc: 'Marketing Manager'
                  },
                  {
                    image: 'https://keenthemes.com/metronic/preview/api/assets/media/users/300_2.jpg',
                    title: 'Anna Strong',
                    desc: 'Software Developer'
                  },
                ]
              },
              {
                category: 'Files',
                items: [
                  {
                    iconClass: 'flaticon2-box kt-font-danger',
                    title: '2 New items submitted',
                    desc: 'Marketing Manager'
                  },
                  {
                    iconClass: 'flaticon-psd kt-font-brand',
                    title: '79 PSD files generated',
                    desc: 'by Grog John'
                  },
                  {
                    iconClass: 'flaticon2-supermarket kt-font-warning',
                    title: '$2900 worth products sold',
                    desc: 'Total 234 items'
                  },
                  {
                    iconClass: 'flaticon-safe-shield-protection kt-font-info',
                    title: '2 New items submitted',
                    desc: 'Marketing Manager'
                  }
                ]
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
              this.bShow = true
            }, 2000)
          },
          clearQuery () {
            this.query = ''
            this.bShow = false
          },
          handleClickOutside () {
            this.bShow = false
          },
          handleClick () {
            if (this.bNotEmpty) this.bShow = true
          },
          handleWindowResize () {
            let dropdownRect = this.$refs.dropdown.getBoundingClientRect()
            this.dropdownFitPosition = Math.floor(dropdownRect.x - dropdownRect.width - 20)

            let searchWrapper = this.$refs.searchWrapper.$el
            searchWrapper.style.height = (window.screen.width > 1024) ? searchWrapper.dataset.height + 'px' :
             searchWrapper.dataset.mobileHeight + 'px'
          }
        },
        directives: {
          ClickOutside
        },
        computed: {
          bNotEmpty () {
            return (!this.bLoading && this.query !== '')
          }
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
