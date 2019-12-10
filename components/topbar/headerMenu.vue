<template>
  <!-- begin: Header Menu -->
  <div class="kt-header-menu-wrapper kt-grid__item kt-grid__item--fluid"
       id="kt_header_menu_wrapper"
       :class="{'kt-header-menu-wrapper--on': bHeaderMenuOpen}"

  >
    <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout- ">
      <ul class="kt-menu__nav ">
        <HeaderMenuTree
          v-for="(item, key) of items"
          :key="key"
          :item="item"
          :depth="0"
        >

        </HeaderMenuTree>
      </ul>
    </div>
  </div>
  <!-- end: Header Menu -->

</template>

<script>
    import {mapGetters} from 'vuex'
    import HeaderMenuTree from "./headerMenuTree";

    export default {
        name: "headerMenu",
      components: {HeaderMenuTree},
      data () {
          return {
            items: [
              {
                title: 'Dashboard',
                pageName: 'index'
              },
              {
                title: 'Components',
                pageName: 'components',
                children: [
                  {
                    title: 'Base',
                    iconClass: 'flaticon2-start-up',
                    children: [
                      {
                        title: 'Color'
                      },
                      {
                        title: 'Typography'
                      },
                      {
                        title: 'Buttons'
                      }
                    ]
                  },
                  {
                    title: 'Custom',
                    iconClass: 'flaticon2-photograph',
                  },
                  {
                    title: 'Extended',
                    iconClass: 'flaticon2-lorry',
                  },
                  {
                    title: 'Icons',
                    iconClass: 'flaticon2-cube-1',
                  },
                  {
                    title: 'Portlets',
                    iconClass: 'flaticon2-browser-1',
                  },
                  {
                    title: 'Widgets',
                    iconClass: 'flaticon2-pie-chart-4',
                  },
                  {
                    title: 'Calendar',
                    iconClass: 'flaticon2-calendar-2',
                  },
                  {
                    title: 'Charts',
                    iconClass: 'flaticon2-graph-1',
                  },
                  {
                    title: 'Maps',
                    iconClass: 'flaticon2-location',
                  },
                  {
                    title: 'Utils',
                    iconClass: 'flaticon2-cube-1',
                  }
                ],
                submenuPositionClass: 'kt-menu__submenu--left'
              },
              {
                title: 'Crud',
                children: [
                  {
                    title: 'Forms & Controls',
                    iconClass: 'flaticon2-architecture-and-city'
                  },
                  {
                    title: 'KTDatatable',
                    iconClass: 'flaticon2-browser-2'
                  },
                  {
                    title: 'Datatables.net',
                    iconClass: 'flaticon2-list-3'
                  },
                  {
                    title: 'File Upload',
                    iconClass: 'flaticon2-list-3'
                  }
                ],
                pageName: 'crud',
                submenuPositionClass: 'kt-menu__submenu--left'
              },
              {
                title: 'Apps',
                children: [
                  {
                    title: 'Users',
                    iconClass: 'flaticon2-cube-1'
                  },
                  {
                    title: 'Contacts',
                    iconClass: 'flaticon2-writing'
                  },
                  {
                    title: 'Chat',
                    iconClass: 'flaticon2-writing'
                  },
                  {
                    title: 'Projects',
                    iconClass: 'flaticon2-telegram-logo'
                  },
                  {
                    title: 'Support Center',
                    iconClass: 'flaticon2-rocket'
                  },
                  {
                    title: 'Todo',
                    iconClass: 'flaticon2-indent-dots'
                  },
                  {
                    title: 'Inbox',
                    new: true,
                    iconClass: 'flaticon2-rocket'
                  },
                ],
                pageName: 'apps',
                submenuPositionClass: 'kt-menu__submenu--left'
              },
              {
                title: 'Pages',
                pageName: 'pages',
                children: [
                  {
                    colName: 'Pricing Tables',
                    items: [
                      {
                        title: 'Pricing Tables 1'
                      },
                      {
                        title: 'Pricing Tables 2'
                      },
                      {
                        title: 'Pricing Tables 3'
                      },
                      {
                        title: 'Pricing Tables 4'
                      },
                      {
                        title: 'Pricing Tables 5'
                      },
                    ]
                  },
                  {
                    colName: 'Wizards',
                    items: [
                      {
                        title: 'Wizard 1'
                      },
                      {
                        title: 'Wizard 2'
                      },
                      {
                        title: 'Wizard 3'
                      },
                      {
                        title: 'Wizard 4'
                      },
                      {
                        title: 'Wizard 5'
                      },
                    ]
                  },
                  {
                    colName: 'Invoices & FAQ',
                    bullet: 'dot',
                    items: [
                      {
                        title: 'Invoice 1'
                      },
                      {
                        title: 'Invoice 2'
                      },
                      {
                        title: 'FAQ 1'
                      }
                    ]
                  },
                  {
                    colName: 'User Pages',
                    bullet: 'dot',
                    items: [
                      {
                        title: 'Login 1'
                      },
                      {
                        title: 'Login 2'
                      },
                      {
                        title: 'Login 3'
                      },
                      {
                        title: 'Login 4'
                      },
                      {
                        title: 'Login 5'
                      },
                      {
                        title: 'Login 6'
                      }
                    ]
                  },
                  {
                    colName: 'Error Pages',
                    bullet: 'dot',
                    items: [
                      {
                        title: 'Error 1'
                      },
                      {
                        title: 'Error 2'
                      },
                      {
                        title: 'Error 3'
                      },
                      {
                        title: 'Error 4'
                      },
                      {
                        title: 'Error 5'
                      },
                      {
                        title: 'Error 6'
                      }
                    ]
                  }
                ],
                extendedSubmenu: true,
                submenuPositionClass: 'kt-menu__submenu--center'
              }
            ]
          }
        },
        computed: {
          ...mapGetters({
            bHeaderMenuOpen: 'headerMenu/isOpen'
          })
        }
    }
</script>

<style scoped>

</style>
