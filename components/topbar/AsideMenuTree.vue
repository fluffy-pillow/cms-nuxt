<template>
  <li class="kt-menu__item kt-menu__item--submenu"
      :class="[
        item.class,
        {
          'kt-menu__item--open': bOpen,
          'kt-menu__item--open-dropdown': bOpen,
          'kt-menu__item--hover': bOpen,
          'kt-menu__item--active': bActive
        }
      ]"
      :data-depth="depth"
      :data-key="item.key"
      :data-ktmenu-submenu-mode="item.submenuMode"
      ref="menuItem"
      v-click-outside="handleClickOutside"
      @click="handleClick"
  >
      <span class="kt-menu__link"
            :class="menuToggle"
      >
        <i class="kt-menu__link-icon la" v-if="item.iconClass"
           :class="item.iconClass"
        >
        </i>
        <i  v-if="item.bullet"
            :class="'kt-menu__link-bullet kt-menu__link-bullet--' + item.bullet"
        >
          <span></span>
        </i>
        <span class="kt-menu__link-text">
          {{item.title}}
        </span>
        <span class="kt-menu__link-badge" v-if="item.notifications">
          <span class="kt-badge" :class="[item.notifications.class1, item.notifications.class2]">
            {{item.notifications.count}}
          </span>
        </span>
        <i class="kt-menu__ver-arrow la la-angle-right" v-if="item.children">
        </i>
      </span>
      <div class="kt-menu__submenu" v-if="item.children && item.fullheightSubmenu"
           :class="{'kt-menu__submenu--up': subMenuUp}"
      >
          <div class="kt-menu__wrapper kt-scroll ps">
          <ul class="kt-menu__subnav">
            <li class="kt-menu__item  kt-menu__item--parent kt-menu__item--submenu-fullheight" aria-haspopup="true">
              <span class="kt-menu__link">
                <span class="kt-menu__link-text">{{item.title}}</span>
              </span>
            </li>
            <AsideMenuTree
              v-for="(subitem, subkey) of item.children"
              :key="subkey"
              :item="subitem"
              :id="subkey"
              :depth="depth + 1"
              :max-depth="maxDepth"
            >
            </AsideMenuTree>
          </ul>

        </div>

      </div>

      <div class="kt-menu__submenu" v-if="item.children && !item.fullheightSubmenu"
           :class="{'kt-menu__submenu--up': subMenuUp}"
      >
        <ul class="kt-menu__subnav">
          <li class="kt-menu__item  kt-menu__item--parent kt-menu__item--submenu-fullheight"
              aria-haspopup="true"
              v-if="!bMaxDepth"
          >
            <span class="kt-menu__link">
              <span class="kt-menu__link-text">{{item.title}}</span>
            </span>
          </li>
          <AsideMenuTree
            v-for="(subitem, subkey) of item.children"
            :key="subkey"
            :item="subitem"
            :id="subkey"
            :depth="depth + 1"
            :max-depth="maxDepth"
          >
          </AsideMenuTree>
        </ul>
      </div>
  </li>
</template>

<script>
    import {mapActions} from 'vuex'
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "AsideMenuTree",
        props: {
          item: Object,
          id: Number,
          depth: Number,
          maxDepth: Number,
        },
        data () {
          return {
            bOpen: false,
            subMenuUp: false,
            bActive: false
          }
        },
        directives: {
          ClickOutside
        },
        methods: {
          handleClickOutside (e) {
            let el = this.$refs.menuItem
            this.bOpen = false
            this.bActive = false

            if (el.classList.contains('kt-menu__item--bottom-2') || el.classList.contains('kt-menu__item--bottom-1'))
              this.subMenuUp = false

          },
          handleClick () {
            let el = this.$refs.menuItem
            this.bOpen = true

            if (el.classList.contains('kt-menu__item--bottom-2') || el.classList.contains('kt-menu__item--bottom-1')) {
              this.subMenuUp = true
            }

            if (!this.item.children) {
              this.bActive = true
            }

            (el.classList.contains('kt-menu__item--here')) ? this.showOverlay() : this.hideOverlay()
          },
          ...mapActions({
            showOverlay: 'aside/showOverlay',
            hideOverlay: 'aside/hideOverlay'
          }),
        },
        computed: {
          menuToggle () {
            return (this.bMaxDepth) ? 'kt-menu__toggle' : ''
          },
          bMaxDepth () {
            return (this.depth < this.maxDepth)
          }
        }
    }
</script>

<style scoped>

</style>
