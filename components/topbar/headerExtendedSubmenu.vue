<template>
  <ul class="kt-menu__content">
    <li class="kt-menu__item"
        v-for="(item, key) of items"
        :key="key"
        @click="selected = key"
        :class="{'kt-menu__item--open': selected === key}"
    >
      <h3 class="kt-menu__heading kt-menu__toggle">
          <i v-if="item.bullet" :class="'kt-menu__link-bullet kt-menu__link-bullet--' + item.bullet">
            <span></span>
          </i>
          <span class="kt-menu__link-text">
            {{item.colName}}
          </span>
        <i class="kt-menu__ver-arrow la la-angle-right"></i>
      </h3>
      <ul class="kt-menu__inner">
        <li class="kt-menu__item"
            v-for="(subitem, subkey) of item.items"
            :key="subkey"
        >
          <span class="kt-menu__link">
            <i class="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i>
            <span class="kt-menu__link-text">
              {{subitem.title}}
            </span>
          </span>
        </li>
      </ul>
    </li>
  </ul>

</template>

<script>
    export default {
        name: "headerExtendedSubmenu",
        props: {
          items: Array
        },
        data () {
          return {
            selected: -1
          }
        }
    }
</script>

<style scoped>

</style>
