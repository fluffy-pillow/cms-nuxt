<template>
  <div class="kt-quick-search__result">
    <div class="kt-quick-search__message kt-hidden">
      No record found
    </div>

    <template v-for="(item, key) of items">
      <div class="kt-quick-search__category">
        {{item.category}}
      </div>
      <div class="kt-quick-search__section">
        <div class="kt-quick-search__item"
             v-for="(subitem, subkey) of item.items"
             :key="subkey"
        >
          <div class="kt-quick-search__item-img" v-if="subitem.image" :class="iconType(item.category)">
            <img :src="subitem.image" alt>
          </div>
          <div class="kt-quick-search__item-icon" v-if="subitem.iconClass">
            <i :class="subitem.iconClass"></i>
          </div>

          <div class="kt-quick-search__item-wrapper">
            <span class="kt-quick-search__item-title">
              {{subitem.title}}
            </span>
            <div class="kt-quick-search__item-desc">
              {{subitem.desc}}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    export default {
        name: "searchResult",
        props: {
          items: Array
        },
        methods: {
          iconType (category) {
            let ret = ''
            switch (category) {
              case 'Documents': {
                ret = 'kt-quick-search__item-img--file'
                break
              }
              default : {
                break
              }
            }
            return ret
          }
        }
    }
</script>

<style scoped>

</style>
