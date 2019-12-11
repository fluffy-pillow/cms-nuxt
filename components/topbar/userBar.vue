<template>
  <div class="kt-header__topbar-item kt-header__topbar-item--user"
       :class="{show: bOpen}"
       v-click-outside="close"
  >
  <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px" ref="topbarWrapper">
      <span class="kt-hidden kt-header__topbar-welcome">Hi,</span>
      <span class="kt-hidden kt-header__topbar-username">Nick</span>
      <img class="kt-hidden" alt="Pic" src="../../assets/media/users/300_21.jpg" />
      <span class="kt-header__topbar-icon" @click="toggle">
        <i class="flaticon2-user-outline-symbol"></i>
      </span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl"
         :class="{show: bOpen}"
         :style="{transform: 'translate3d(' + dropdownFitPosition + 'px, 0, 0)'}"
    >

      <!--begin: Head -->
      <div class="kt-user-card kt-user-card--skin-light kt-notification-item-padding-x">
        <div class="kt-user-card__avatar">
          <img class="kt-hidden-" alt="Pic" src="../../assets/media/users/300_25.jpg" />

          <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
          <span class="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold kt-hidden">S</span>
        </div>
        <div class="kt-user-card__name">
          Sean Stone
        </div>
        <div class="kt-user-card__badge">
          <span class="btn btn-label-primary btn-sm btn-bold btn-font-md">23 messages</span>
        </div>
      </div>

      <!--end: Head -->

      <!--begin: Navigation -->
      <div class="kt-notification">
        <nuxt-link to="" class="kt-notification__item"
             v-for="(item, key) of items"
             :key="key"
        >
          <div class="kt-notification__item-icon">
            <i :class="item.iconClass"></i>
          </div>
          <div class="kt-notification__item-details">
            <div class="kt-notification__item-title kt-font-bold">
              {{item.title}}
            </div>
            <div class="kt-notification__item-time">
              {{item.desc}}
              <span class="kt-badge kt-badge--danger kt-badge--inline kt-badge--pill kt-badge--rounded" v-if="item.notificationsCount">
              {{item.notificationsCount}} pending
            </span>
            </div>
          </div>
        </nuxt-link>


        <div class="kt-notification__custom kt-space-between">
          <a href="custom/user/login-v2.html" target="_blank" class="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>
          <a href="custom/user/login-v2.html" target="_blank" class="btn btn-clean btn-sm btn-bold">Upgrade Plan</a>
        </div>
      </div>

      <!--end: Navigation -->
    </div>
  </div>

</template>

<script>
    import ClickOutside from 'vue-click-outside'
    export default {
        name: "userBar",
        data () {
          return {
            bOpen: false,
            dropdownFitPosition: 0,
            items: [
              {
                iconClass: 'flaticon2-calendar-3 kt-font-success',
                title: 'My Profile',
                desc: 'Account settings and more'
              },
              {
                iconClass: 'flaticon2-mail kt-font-warning',
                title: 'My Messages',
                desc: 'Inbox and tasks'
              },
              {
                iconClass: 'flaticon2-rocket-1 kt-font-danger',
                title: 'My Activities',
                desc: 'Logs and notifications'
              },
              {
                iconClass: 'flaticon2-hourglass kt-font-brand',
                title: 'My Tasks',
                desc: 'Latest tasks and projects'
              },
              {
                iconClass: 'flaticon2-cardiogram kt-font-warning',
                title: 'Billing',
                desc: 'billing & statements',
                notificationsCount: 3
              }
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
            this.dropdownFitPosition = topbarWrapperRect.x - topbarWrapperRect.width - 405
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
