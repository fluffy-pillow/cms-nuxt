<template>
  <div class="kt-header__topbar">
    <search/>
    <Notifications/>
    <QuickActions/>

    <!--begin: Cart -->
    <Cart/>
    <!--end: Cart-->

    <LanguageBar/>
    <UserBar/>
    <QuickPanelToggler/>
  </div>

</template>

<script>
    import Search from "./search";
    import LanguageBar from "./languageBar";
    import UserBar from "./userBar";
    import QuickPanelToggler from "./QuickPanelToggler";
    import Notifications from "./notifications";
    import QuickActions from "./quickActions";
    import Cart from "./cart";
    export default {
        name: "headerTopbar",
      components: {Cart, QuickActions, Notifications, QuickPanelToggler, UserBar, LanguageBar, Search}
    }
</script>

<style scoped>

</style>
