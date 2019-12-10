<template>
  <div id="kt_header" class="kt-header kt-grid kt-grid--ver  kt-header--fixed ">

    <HeaderMenuContainer/>
    <HeaderTopbar/>
  </div>
</template>

<script>
    import HeaderTopbar from "./headerTopbar";
    import HeaderMenuContainer from "./HeaderMenuContainer";
    export default {
        name: "headerDefault",
      components: {HeaderMenuContainer, HeaderTopbar}
    }
</script>

<style scoped>

</style>
