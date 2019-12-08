<template>
  <li class="kt-menu__item kt-menu__item--submenu"
      :class="[item.class]"
      :data-key="item.key"
      :data-ktmenu-submenu-mode="item.submenuMode"
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
      <div class="kt-menu__submenu" v-if="item.children && item.fullheightSubmenu">
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

      <div class="kt-menu__submenu" v-if="item.children && !item.fullheightSubmenu">
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
  </li>
</template>

<script>
    export default {
        name: "AsideMenuTree",
        props: {
          item: Object,
          id: Number,
          depth: Number,
          maxDepth: Number
        },
        computed: {
          menuToggle () {
            return (this.depth < this.maxDepth) ? 'kt-menu__toggle' : ''
          }
        }
    }
</script>

<style scoped>

</style>
