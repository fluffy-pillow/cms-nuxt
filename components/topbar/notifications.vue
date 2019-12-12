<template>
  <div class="kt-header__topbar-item dropdown"
       :class="{show: bOpen}"
       v-click-outside="close"
  >
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px"
         ref="topbarWrapper"
    >
      <span class="kt-header__topbar-icon kt-header__topbar-icon--success" @click="toggle">
        <i class="flaticon2-bell-alarm-symbol"></i>
      </span>
      <span class="kt-hidden kt-badge kt-badge--danger"></span>
    </div>


    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl"
         :class="{show: bOpen}"
         :style="{transform: 'translate3d(' + dropdownFitPosition + 'px, 0, 0)'}"
         ref="dropdownMenuFit"
    >
      <form>
        <div class="kt-head kt-head--skin-light kt-head--fit-x kt-head--fit-b">
          <h3 class="kt-head__title">
            User Notifications
            &nbsp;
            <span class="btn btn-label-primary btn-sm btn-bold btn-font-md">23 new</span>
          </h3>
          <ul class="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-brand  kt-notification-item-padding-x" role="tablist">
            <li v-for="(tab, key) of tabs"
                :key="key"
                class="nav-item"
                @click="activeTab = key"
                >
                <a class="nav-link" data-toggle="tab" role="tab"
                   :class="{active: activeTab === key}"
                   style="cursor: pointer"
                >
                  {{tab}}
                </a>
            </li>
          </ul>
        </div>

        <div class="tab-content">
          <div class="tab-pane" role="tabpanel"
             v-for="(notificationsInfo, key) of notifications"
             :key="key"
             :class="{active: tabs.includes(notificationsInfo.type) && tabs.indexOf(notificationsInfo.type) === activeTab}"
            >
            <perfect-scrollbar class="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll ps ps--active-y"
                 data-scroll="true"
                 data-height="300"
                 data-mobile-height="200"
                 ref="scrollContent"
                 style="overflow: hidden"
            >
              <template v-if="notificationsInfo.data.length > 0">
                <nuxt-link to="" class="kt-notification__item"
                   v-for="(notification, subkey) of notificationsInfo.data"
                   :key="subkey"
                >
                  <div class="kt-notification__item-icon">
                    <i :class="notification.iconClass"></i>
                  </div>
                  <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title">
                      {{notification.title}}
                    </div>
                    <div class="kt-notification__item-time">
                      {{notification.time}}
                    </div>
                  </div>
                </nuxt-link>
              </template>
              <template v-else>
                <div class="kt-grid kt-grid--ver" style="min-height: 200px;">
                  <div class="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
                    <div class="kt-grid__item kt-grid__item--middle kt-align-center">
                      All caught up!
                      <br>No new notifications.
                    </div>
                  </div>
                </div>
              </template>
            </perfect-scrollbar>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "notifications",
        data () {
          return {
            bOpen: false,
            dropdownFitPosition: 0,
            activeTab: 0,
            tabs: ['Alerts', 'Events', 'Logs'],
            notifications: [
              {
                type: 'Alerts',
                data: [
                  {
                    iconClass: 'flaticon2-line-chart kt-font-success',
                    title: ' New order has been received',
                    time: '2 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-box-1 kt-font-brand',
                    title: ' New customer is received',
                    time: '3 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-chart2 kt-font-danger',
                    title: ' Application has been received',
                    time: '3 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-image-file kt-font-warning',
                    title: ' New file has been uploaded',
                    time: '5 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-drop kt-font-info',
                    title: ' New user feedback received',
                    time: '8 hrs ago'
                  },
                ]
              },
              {
                type: 'Events',
                data: [
                  {
                    iconClass: 'flaticon2-psd kt-font-success',
                    title: ' New report has been received',
                    time: '23 hrs ago'
                  }
                ]
              },
              {
                type: 'Logs',
                data: [
                ]
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
            this.dropdownFitPosition = (window.innerWidth > 1024)  ? -380 + topbarWrapperRect.width :
              -290 + topbarWrapperRect.width

            let scrollContents = this.$refs.scrollContent
            for (let scrollContent of scrollContents) {
              scrollContent.$el.style.maxHeight = (window.innerWidth > 1024) ? scrollContent.$el.dataset.height + 'px' :
                scrollContent.$el.dataset.mobileHeight + 'px'
            }
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
