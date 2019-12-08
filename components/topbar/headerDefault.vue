<template>
  <div id="kt_header" class="kt-header kt-grid kt-grid--ver  kt-header--fixed ">

    <HeaderMenu/>
    <HeaderTopbar/>
  </div>
</template>

<script>
    import HeaderMenu from "./headerMenu";
    import HeaderTopbar from "./headerTopbar";
    export default {
        name: "headerDefault",
      components: {HeaderTopbar, HeaderMenu}
    }
</script>

<style scoped>

</style>
