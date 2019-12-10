<template>
    <li class="kt-menu__item"
        @click="handleClick"
        v-click-outside="handleClickOutside"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
        :class="{
          'kt-menu__item--open-dropdown': bDropdown && depth === 0,
          'kt-menu__item--hover': bHover,
          'kt-menu__item--open': bOpen,
          'kt-menu__item--submenu': !!item.children,
          'kt-menu__item--rel': !!item.children && depth === 0,
          'kt-menu__item--active': $route.matched[0].name === item.pageName
        }"
        :data-ktmenu-submenu-toggle="(depth > 0) ? 'hover' : ''"

    >
      <span class="kt-menu__link">
        <i class="kt-menu__link-icon"
           v-if="item.iconClass"
           :class="item.iconClass"
        >

        </i>

        <i  v-if="depth > 1"
            class="kt-menu__link-bullet kt-menu__link-bullet--dot"
        >
          <span></span>
        </i>

        <span class="kt-menu__link-text"
              :class="(item.children) ? 'kt-menu__toggle' : ''">
          {{item.title}}
        </span>

        <span class="kt-menu__link-badge" v-if="item.new">
          <span class="kt-badge kt-badge--danger kt-badge--inline">
            new
          </span>
        </span>

        <i v-if="item.children && depth === 0" class="kt-menu__hor-arrow la la-angle-down"></i>
        <i v-if="item.children && depth > 0" class="kt-menu__hor-arrow la la-angle-right"></i>
        <i v-if="item.children" class="kt-menu__ver-arrow la la-angle-right"></i>

      </span>


      <div v-if="item.children" class="kt-menu__submenu"
           :class="[
              subMenuPosition,
              subMenuType
           ]"
           :style="subMenuWidth"
      >

        <ul class="kt-menu__subnav" v-if="!item.extendedSubmenu">
          <headerMenuTree
            v-for="(subitem, subkey) of item.children"
            :key="subkey"
            :item="subitem"
            :depth="depth + 1"
          >

          </headerMenuTree>
        </ul>


        <div class="kt-menu__subnav" v-else>
          <HeaderExtendedSubmenu :items="item.children">

          </HeaderExtendedSubmenu>
        </div>
      </div>
    </li>
</template>

<script>
    import ClickOutside from 'vue-click-outside'
    import HeaderExtendedSubmenu from "./headerExtendedSubmenu";

    export default {
      name: "headerMenuTree",
      components: {HeaderExtendedSubmenu},
      props: {
          item: Object,
          depth: Number
        },
        data () {
          return {
            bDropdown: false,
            bHover: false,
            bOpen: false
          }
        },
        directives: {
          ClickOutside
        },
        methods: {
          handleClickOutside () {
            this.bHover = false
            this.bOpen = false
          },
          handleClick () {
            if (this.depth < 1) {
              this.bDropdown = true
              this.bHover = true
            }
            this.bOpen = true
          },
          handleMouseOver () {
            if (this.depth > 0) {
              this.bDropdown = true
              this.bHover = true
            }
          },
          handleMouseLeave () {
            if (this.depth > 0) {
              this.bDropdown = false
              this.bHover = false
            }
          }
        },
        computed: {
          subMenuPosition () {
            let ret = ''
            if (!this.item.extendedSubmenu) {
              if (this.depth > 0) {
                ret = 'kt-menu__submenu--right'
              } else {
                ret = 'kt-menu__submenu--left'
              }
            } else {
              ret =  'kt-menu__submenu--center'
            }
            return ret
          },
          subMenuType () {
            return (this.item.extendedSubmenu) ? 'kt-menu__submenu--fixed' : 'kt-menu__submenu--classic'
          },
          subMenuWidth () {
            if (this.item.extendedSubmenu) return 'width: 1000px'
          }
        }
    }
</script>

<style scoped>

</style>
