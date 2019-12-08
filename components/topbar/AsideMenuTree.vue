<template>
  <li class="kt-menu__item kt-menu__item--submenu"
      :class="[item.class]"
      :data-key="item.key"
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
      <div class="kt-menu__submenu" v-if="item.children">
        <ul class="kt-menu__subnav">
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
          maxDepth: Number,
          selected: Number
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
