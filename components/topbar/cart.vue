<template>
  <div class="kt-header__topbar-item dropdown"
       :class="{show: bOpen}"
       v-click-outside="close"
  >
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px"  ref="topbarWrapper">
      <span class="kt-header__topbar-icon kt-header__topbar-icon--brand" @click="toggle">
        <i class="flaticon2-shopping-cart-1"></i>
      </span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl"
       :class="{show: bOpen}"
       :style="{transform: 'translate3d(' + dropdownFitPosition + 'px, 0, 0)'}"
       ref="dropdownMenuFit"
    >
      <form>
        <div class="kt-mycart">
          <div class="kt-mycart__head kt-head"
               :style="{backgroundImage: 'url(' + require('@/assets/media/misc/bg-1.jpg') + ')' }"
          >
            <div class="kt-mycart__info">
              <span class="kt-mycart__icon"><i class="flaticon2-shopping-cart-1 kt-font-success"></i></span>
              <h3 class="kt-mycart__title">My Cart</h3>
            </div>
            <div class="kt-mycart__button">
              <button type="button" class="btn btn-success btn-sm" style=" ">2 Items</button>
            </div>
          </div>

          <perfect-scrollbar class="kt-mycart__body kt-scroll ps ps--active-y"
               data-scroll="true"
               data-height="245"
               data-mobile-height="200"
               style="overflow: hidden;"
               ref="scrollContent"
          >
            <div class="kt-mycart__item"
                 v-for="(item, key) of items"
                 :key="key"
            >
              <div class="kt-mycart__container">
                <div class="kt-mycart__info">
                  <nuxt-link to="" class="kt-mycart__title">
                    {{item.title}}
                  </nuxt-link>
                  <span class="kt-mycart__desc">
                    {{item.desc}}
                  </span>
                  <div class="kt-mycart__action">
                    <span class="kt-mycart__price">$ {{item.price}}</span>
                    <span class="kt-mycart__text">for</span>
                    <span class="kt-mycart__quantity">{{item.quantity}}</span>
                    <span class="btn btn-label-success btn-icon">−</span>
                    <span class="btn btn-label-success btn-icon">+</span>
                  </div>
                </div>
                <nuxt-link to="" class="kt-mycart__pic">
                  <img :src="require('@/assets/media/products/' + item.image)" title="">
                </nuxt-link>

              </div>
            </div>
          </perfect-scrollbar>


          <div class="kt-mycart__footer">
            <div class="kt-mycart__section">
              <div class="kt-mycart__subtitel">
                <span>Sub Total</span>
                <span>Taxes</span>
                <span>Total</span>
              </div>

              <div class="kt-mycart__prices">
                <span>$ 840.00</span>
                <span>$ 72.00</span>
                <span class="kt-font-brand">$ 912.00</span>
              </div>
            </div>
            <div class="kt-mycart__button kt-align-right">
              <button type="button" class="btn btn-primary btn-sm">Place Order</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "cart",
        data () {
          return {
            bOpen: false,
            dropdownFitPosition: 0,
            items: [
              {
                title: 'Samsung',
                desc: 'Profile info, Timeline etc',
                price: 450,
                quantity: 7,
                image: 'product9.jpg'
              },
              {
                title: 'Panasonic',
                desc: 'For PHoto & Others',
                price: 329,
                quantity: 1,
                image: 'product13.jpg'
              },
              {
                title: 'Fujifilm',
                desc: 'Profile info, Timeline etc',
                price: 520,
                quantity: 6,
                image: 'product16.jpg'
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
            this.dropdownFitPosition = -380 + topbarWrapperRect.width

            let scrollContent = this.$refs.scrollContent.$el
            scrollContent.style.height = (window.screen.width > 1024) ? scrollContent.dataset.height + 'px' :
            searchWrascrollContentpper.dataset.mobileHeight + 'px'
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
