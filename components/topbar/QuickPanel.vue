<template>
  <div id="kt_quick_panel" class="kt-quick-panel" :class="{'kt-quick-panel--on': bOpen}">
    <a href="#" class="kt-quick-panel__close" id="kt_quick_panel_close_btn" @click="close">
      <i class="flaticon2-delete"></i>
    </a>
    <div class="kt-quick-panel__nav">
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
    <div class="kt-quick-panel__content"
         ref="content"
    >
      <div class="tab-content">
        <perfect-scrollbar role="tabpanel" class="tab-pane kt-scroll ps"
          v-for="(item, key) of items"
          :key="key"
           ref="tabPanel"
          :class="[item.additionalClass, {'active show ps--active-y fade': tabs.includes(item.type) && tabs.indexOf(item.type) === activeTab}]"
          style="overflow: hidden !important;"
        >
          <component :is="(item.tagType === 'form') ? item.tagType : 'div'" :class="item.contentClass">
            <template v-if="item.type === 'Settings'">
              <template v-for="subitem of item.data">
                <div class="kt-heading kt-heading--sm kt-heading--space-sm">
                  {{subitem.category}}
                </div>
                <div class="form-group form-group-xs row"
                     v-for="(subsubitem, subsubkey) of subitem.items"
                     :class="{'form-group-last form-group-xs': subsubkey + 1 === subitem.items.length}"
                >
                  <div class="col-8 col-form-label">
                    {{subsubitem.title}}
                  </div>
                  <div class="col-4 kt-align-right">
                      <span :class="'kt-switch kt-switch--' + subitem.switchType + ' kt-switch--sm'">
                        <label>
                          <input type="checkbox" checked="checked" name="quick_panel_notifications_2">
                          <span></span>
                        </label>
                      </span>
                  </div>
                </div>
                <div class="kt-separator kt-separator--space-md kt-separator--border-dashed"></div>
              </template>
            </template>
            <template v-else>
              <nuxt-link to="" :class="item.contentClass + '__item'"
                 v-for="(subitem, subkey) of item.data"
                 :key="subkey"
              >
                  <div :class="item.contentClass + '__item-icon'">
                    <i :class="subitem.iconClass"></i>
                  </div>
                  <div :class="item.detailsClass">
                    <div :class="item.contentClass + '__item-title'">
                      {{subitem.title}}
                    </div>
                    <div :class="item.contentClass + '__item-desc'" v-if="item.desc">
                      {{subitem.desc}}
                    </div>
                    <div :class="item.contentClass + '__item-time'" v-if="item.time">
                      {{subitem.time}}
                    </div>
                  </div>
              </nuxt-link>
            </template>
          </component>
        </perfect-scrollbar>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "QuickPanel",
        data () {
          return {
            activeTab: 0,
            tabs: ["Notifications", "Audit Logs", "Settings"],
            items: [
              {
                type: 'Notifications',
                contentClass: 'kt-notification',
                detailsClass: 'kt-notification__item-details',
                data: [
                  {
                    iconClass: 'flaticon2-line-chart kt-font-success',
                    title: 'New order has been received',
                    time: '2 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-box-1 kt-font-brand',
                    title: 'New customer is registered',
                    time: '3 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-chart2 kt-font-danger',
                    title: 'Application has been approved',
                    time: '3 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-image-file kt-font-warning',
                    title: 'New file has been uploaded',
                    time: '5 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-drop kt-font-info',
                    title: 'New user feedback received',
                    time: '8 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-pie-chart-2 kt-font-success',
                    title: 'System reboot has been successfully completed',
                    time: '12 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-favourite kt-font-danger',
                    title: 'New order has been placed',
                    time: '15 hrs ago'
                  },
                  {
                    iconClass: 'flaticon2-safe kt-font-primary',
                    title: 'Company meeting canceled',
                    time: '19 hrs ago',
                    read: true,
                  },
                  {
                    iconClass: 'flaticon2-psd kt-font-success',
                    title: 'New report has been received',
                    time: '23 hrs ago'
                  },
                  {
                    iconClass: 'flaticon-download-1 kt-font-danger',
                    title: 'Finance report has been generated',
                    time: '25 hrs ago'
                  },
                  {
                    iconClass: 'flaticon-security kt-font-warning',
                    title: 'New customer comment recieved',
                    time: '2 days ago'
                  },
                  {
                    iconClass: 'flaticon2-pie-chart kt-font-warning',
                    title: 'New customer is registered',
                    time: '3 days ago'
                  }
                ]
              },
              {
                type: 'Audit Logs',
                detailsClass: 'kt-notification-v2__itek-wrapper',
                contentClass: 'kt-notification-v2',
                data: [
                  {
                    iconClass: 'flaticon-bell kt-font-brand',
                    title: '5 new user generated report',
                    desc: 'Reports based on sales'
                  },
                  {
                    iconClass: 'flaticon2-box kt-font-danger',
                    title: '2 new items submited',
                    desc: 'by Grog John'
                  },
                  {
                    iconClass: 'flaticon-psd kt-font-brand',
                    title: '79 PSD files generated',
                    desc: 'Reports based on sales'
                  },
                  {
                    iconClass: 'flaticon-psd kt-font-brand',
                    title: '79 PSD files generated',
                    desc: 'Reports based on sales'
                  },
                  {
                    iconClass: 'flaticon2-supermarket kt-font-warning',
                    title: '$2900 worth producucts sold',
                    desc: 'Total 234 items'
                  },
                  {
                    iconClass: 'flaticon-paper-plane-1 kt-font-success',
                    title: '4.5h-avarage response time',
                    desc: 'Fostest is Barry'
                  },
                  {
                    iconClass: 'flaticon2-information kt-font-danger',
                    title: 'Database server is down',
                    desc: '10 mins ago'
                  },
                  {
                    iconClass: 'flaticon2-mail-1 kt-font-brand',
                    title: 'System report has been generated',
                    desc: 'Fostest is Barry'
                  },
                  {
                    iconClass: 'flaticon2-hangouts-logo kt-font-warning',
                    title: '4.5h-avarage response time',
                    desc: 'Fostest is Barry'
                  }
                ]
              },
              {
                type: 'Settings',
                contentClass: 'kt-form',
                tagType: 'form',
                additionalClass: 'kt-quick-panel__content-padding-x',
                data: [
                  {
                    category: 'Customer Care',
                    switchType: 'success',
                    items: [
                      {
                        title: 'Enable Notifications:'
                      },
                      {
                        title: 'Enable Case Tracking:'
                      },
                      {
                        title: 'Support Portal:'
                      }
                    ]
                  },
                  {
                    category: 'Reports',
                    switchType: 'danger',
                    items: [
                      {
                        title: 'Generate Reports:'
                      },
                      {
                        title: 'Enable Report Export:'
                      },
                      {
                        title: 'Allow Data Collection:'
                      }
                    ]
                  },
                  {
                    category: 'Memebers',
                    switchType: 'brand',
                    items: [
                      {
                        title: 'Enable Member singup:'
                      },
                      {
                        title: 'Allow User Feedbacks:'
                      },
                      {
                        title: 'Enable Customer Portal:'
                      }
                    ]
                  },
                ]
              }
            ]
          }
        },
        methods: {
          ...mapActions({
            close: 'quickPanel/close'
          })
        },
        computed: {
          ...mapGetters({
            bOpen: 'quickPanel/isOpen'
          })
        },
        mounted () {
          let contentPosition = this.$refs.content.offsetTop + (parseInt(getComputedStyle(document.documentElement).fontSize) * 3)

          for (let tabContent of this.$refs.tabPanel) {
            tabContent.$el.style.height = 'calc(100vh - ' + contentPosition + 'px)'
          }
        }
    }
</script>

<style scoped>

</style>
