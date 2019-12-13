<template>
  <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid"
       id="kt_aside_menu_wrapper"
       v-click-outside="handleClickOutside"
  >
    <div id="kt_aside_menu" class="kt-aside-menu  kt-aside-menu--dropdown " data-ktmenu-vertical="1" data-ktmenu-dropdown="1" data-ktmenu-scroll="0">
      <ul class="kt-menu__nav ">
        <AsideMenuTree
          v-for="(item, key) of items"
          :key="key"
          :item="item"
          :id="key"
          :depth="0"
          :max-depth="itemsDepth"
        >

        </AsideMenuTree>
      </ul>
    </div>
  </div>
</template>

<script>
    import AsideMenuTree from "./AsideMenuTree";
    import {mapActions} from 'vuex'
    import {getDepth, siblings} from '../../helpers.js'
    import ClickOutside from 'vue-click-outside'

    export default {
      name: "asideMenu",
      components: {AsideMenuTree},
      data () {
          return {
            menuItems: null,
            items: [
              {
                title: 'Applications',
                key: 'applications',
                class: 'kt-menu__item--submenu-fullheight kt-menu__item--here',
                iconClass: 'flaticon2-protection',
                fullheightSubmenu: true,
                children: [
                  {
                    title: 'Resources',
                    key: 'applications_resources',
                    class: 'kt-menu__item--submenu kt-menu__item--here',
                    submenuMode: 'accordion',
                    children: [
                      {
                        title: 'Timesheet',
                        key: 'applications_resources_timesheet',
                      },
                      {
                        title: 'Payroll',
                        key: 'applications_resources_payroll',
                      },
                      {
                        title: 'Contacts',
                        key: 'applications_resources_contacts',
                      },
                      {
                        title: 'Member',
                        key: 'applications_resources_member',
                      },
                      {
                        title: 'Clients',
                        key: 'applications_resources_clients',
                      }
                    ]
                  },
                  {
                    title: 'Finance',
                    key: 'applications_finance'
                  },
                  {
                    title: 'Support',
                    key: 'applications_support',
                  },
                  {
                    title: 'Administration',
                    key: 'applications_administration',
                  },
                  {
                    title: 'Management',
                    key: 'applications_management',
                  },
                  {
                    title: 'Order Management',
                    key: 'applications_order_management'
                  },
                  {
                    title: 'Delivery',
                    key: 'applications_delivery',
                    notifications: {
                      class1: 'kt-badge--brand',
                      count: 3
                    },
                  },
                  {
                    title: 'Products',
                    key: 'applications_products',
                  },
                  {
                    title: 'Support',
                    key: 'applications_support',
                  },
                ]
              },
              {
                title: 'Add',
                key: 'add',
                class: '',
                iconClass: 'flaticon2-calendar-5',
                children: [
                  {
                    title: 'Post',
                    key: 'add_post',
                    iconClass: 'la-commenting'
                  },
                  {
                    title: 'Member',
                    key: 'add_member',
                    iconClass: 'la-user'
                  },
                  {
                    title: 'Order',
                    key: 'add_order',
                    iconClass: 'la-cart-arrow-down'
                  },
                  {
                    title: 'Entry',
                    key: 'add_entry',
                    iconClass: 'la-coffee'
                  }
                ]
              },
              {
                title: 'Customers',
                key: 'customers',
                class: 'kt-menu__item--bottom',
                iconClass: 'flaticon2-analytics-2',
                children: [
                  {
                    title: 'Reports',
                    key: 'customers_reports',
                    bullet: 'dot'
                  },
                  {
                    title: 'Cases',
                    key: 'customers_cases',
                    bullet: 'dot',
                    children: [
                      {
                        title: 'Pending',
                        key: 'customers_cases_pending',
                        iconClass: 'flaticon-computer',
                        notifications: {
                          class1: 'kt-badge--warning',
                          count: 3
                        },
                      },
                      {
                        title: 'Urgent',
                        key: 'customers_cases_urgent',
                        iconClass: 'flaticon-signs-2',
                        notifications: {
                          class1: 'kt-badge--danger',
                          count: 3
                        }
                      },
                      {
                        title: 'Done',
                        key: 'customers_cases_done',
                        iconClass: 'flaticon-clipboard',
                        notifications: {
                          class1: 'kt-badge--success',
                          count: 3
                        },
                      },
                      {
                        title: 'Archive',
                        key: 'customers_cases_archive',
                        iconClass: 'flaticon-multimedia-2',
                        notifications: {
                          class1: 'kt-badge--info',
                          class2: 'kt-badge--inline',
                          count: 3
                        },
                      }
                    ]
                  },
                  {
                    title: 'Clients',
                    key: 'customers_clients',
                    bullet: 'dot'
                  },
                  {
                    title: 'Audit',
                    key: 'customers_audit',
                    bullet: 'dot'
                  }
                ]
              },
              {
                title: 'Settings',
                class: 'kt-menu__item--bottom-2',
                key: 'settings',
                iconClass: 'flaticon2-gear',
                children: [
                  {
                    title: 'Profile',
                    key: 'settings_profile',
                    bullet: 'line',
                    children: [
                      {
                        title: 'Pending',
                        key: 'customers_cases_pending',
                        iconClass: 'flaticon-computer',
                        notifications: {
                          class1: 'kt-badge--warning',
                          count: 3
                        },
                      },
                      {
                        title: 'Urgent',
                        key: 'customers_cases_urgent',
                        iconClass: 'flaticon-signs-2',
                        notifications: {
                          class1: 'kt-badge--danger',
                          count: 3
                        }
                      },
                      {
                        title: 'Done',
                        key: 'customers_cases_done',
                        iconClass: 'flaticon-clipboard',
                        notifications: {
                          class1: 'kt-badge--success',
                          count: 3
                        },
                      },
                      {
                        title: 'Archive',
                        key: 'customers_cases_archive',
                        iconClass: 'flaticon-multimedia-2',
                        notifications: {
                          class1: 'kt-badge--info',
                          class2: 'kt-badge--inline',
                          count: 3
                        },
                      }
                    ]
                  },
                  {
                    title: 'Accounts',
                    key: 'settings_accounts',
                    bullet: 'line'
                  },
                  {
                    title: 'Help',
                    key: 'settings_help',
                    bullet: 'line'
                  },
                  {
                    title: 'Notifications',
                    key: 'settings_notifications',
                    bullet: 'line'
                  }
                ]
              },
              {
                title: 'Help',
                class: 'kt-menu__item--bottom-1',
                key: 'help',
                iconClass: 'flaticon2-hourglass-1',
                notifications: {
                  class1: 'kt-badge--brand',
                  class2: 'kt-badge--rounded',
                  count: 3
                },
                children: [
                  {
                    title: 'Support',
                    key: 'help_support',
                    bullet: 'dot'
                  },
                  {
                    title: 'Blog',
                    key: 'help_blog',
                    bullet: 'dot'
                  },
                  {
                    title: 'Documentation',
                    key: 'help_documentation',
                    bullet: 'dot'
                  },
                  {
                    title: 'Pricing',
                    key: 'help_pricing',
                    bullet: 'dot'
                  },
                  {
                    title: 'Terms',
                    key: 'help_terms',
                    bullet: 'dot'
                  }
                ]
              }
            ]
          }
        },
        methods: {
          ...mapActions({
            showOverlay: 'aside/showOverlay',
            hideOverlay: 'aside/hideOverlay'
          }),
          handleClickOutside () {
            this.hideOverlay()
//            this.closeMenu()
          },
 /*         closeMenu () {
            for (let menuItem of this.menuItems) {
              menuItem.classList.remove('kt-menu__item--open', 'kt-menu__item--open-dropdown', 'kt-menu__item--hover')
            }
          }*/
        },
        computed: {
          itemsDepth () {
            return getDepth(this.items)
          }
        },
        directives: {
          ClickOutside
        },
        mounted () {
/*          let that = this
          this.menuItems = document.querySelectorAll('.kt-aside-menu-wrapper .kt-menu__item')
          for (let menuItem of this.menuItems) {
            menuItem.querySelector('.kt-menu__link').onclick = function () {
              if (!menuItem.classList.contains('kt-menu__item--open')) {
                for (let neighborMenuItem of siblings(menuItem)) {
                  neighborMenuItem.classList.remove('kt-menu__item--open', 'kt-menu__item--open-dropdown', 'kt-menu__item--hover')
                  if (neighborMenuItem.classList.contains('kt-menu__item--bottom-2')) neighborMenuItem.querySelector('.kt-menu__submenu').classList.remove('kt-menu__submenu--up')
                  if (neighborMenuItem.classList.contains('kt-menu__item--bottom-1')) neighborMenuItem.querySelector('.kt-menu__submenu').classList.remove('kt-menu__submenu--up')
                  if (!neighborMenuItem.classList.contains('kt-menu__item--here')) that.hideOverlay()
                }
                menuItem.classList.add('kt-menu__item--open', 'kt-menu__item--open-dropdown', 'kt-menu__item--hover')
                if (!menuItem.querySelector('.kt-menu__submenu')) menuItem.classList.add('kt-menu__item--active')
                if (menuItem.classList.contains('kt-menu__item--bottom-2')) menuItem.querySelector('.kt-menu__submenu').classList.add('kt-menu__submenu--up')
                if (menuItem.classList.contains('kt-menu__item--bottom-1')) menuItem.querySelector('.kt-menu__submenu').classList.add('kt-menu__submenu--up')
                if (menuItem.classList.contains('kt-menu__item--here')) that.showOverlay()
              } else {
                menuItem.classList.remove('kt-menu__item--open', 'kt-menu__item--open-dropdown', 'kt-menu__item--hover')
                if (menuItem.classList.contains('kt-menu__item--bottom-2')) menuItem.querySelector('.kt-menu__submenu').classList.remove('kt-menu__submenu--up')
                if (menuItem.classList.contains('kt-menu__item--bottom-1')) menuItem.querySelector('.kt-menu__submenu').classList.remove('kt-menu__submenu--up')}
            }
          }*/
        }
    }
</script>

<style scoped>

</style>
