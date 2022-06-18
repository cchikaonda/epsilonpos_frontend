<template>
    <v-app>
        <HeaderInclude/>
        <v-container fluid>    
            <v-row>
                <v-col v-for="n in modules" :key="n.module_name" xs="12" sm="6" md="3"  xl="2"> 
                    <a v-bind:href="n.url" >  
                        <v-card class="text-center">
                            <div class="text-center mat-icon ">
                                <v-icon color ="grey lighten-1" size = "100" class="mt-6">{{n.module_icon}}</v-icon>
                                <h2><p class="ml-4 mt-4">{{n.module_name}}</p></h2>
                            </div>
                        </v-card>
                    </a>
                </v-col>
            </v-row>   
        </v-container>
  </v-app>
</template>

<style>
    a:link { 
      text-decoration: none; 
      }
    .mat-icon {
      color:  #6c757d!important;
      }
    .dashboard_menu_item {
      height: 175px;
      }
    .bg-light {
      background-color: #f8f9fa!important;
      }
    .small-box {
      border-radius: 0.25rem;
      box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
      display: block;
      margin-bottom: 20px;
      position: relative;
      }
    .small-box .icon {
      color: rgba(0,0,0,.15);
      z-index: 0;
      }
</style>

<script>
import { showSnackbar } from "../components/globalActions"

export default {
      data: () => ({
      methods: {
          openSnackbar: () => {
            showSnackbar("Hello from snackbar!");
          },
        },
      modules: [
        {
          module_name: 'Customers',
          module_icon: 'mdi-account-multiple',
        },
        {
          module_name: 'My Invoices',
          module_icon: 'mdi-basket',
          url: '',
        },
        {
          module_name: 'Register Sale ',
          module_icon: 'mdi-cash-register',
          url: '/pos',
        },
        {
          module_name: 'Reports',
          module_icon: 'mdi-finance',
          url: '',
        },
        {
          module_name: 'Invoices',
          module_icon: 'mdi-receipt',
          path: '',
        },
        {
          module_name: 'Quotations',
          module_icon: 'mdi-help-circle-outline',
          url: '',
        },
        {
          module_name: 'Refunds',
          module_icon: 'mdi-cash-refund',
          path: '',
        },
        {
          module_name: 'Back Office',
          module_icon: 'mdi-domain',
          url: '',
        },
      ],
    }),
      components: {
        HeaderInclude: () => import('../includes/HeaderView.vue'),
    },
  }
</script>