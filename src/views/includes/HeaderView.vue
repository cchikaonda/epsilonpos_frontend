<template>

  
    
  
    <v-app-bar app >
      <v-navigation-drawer
      v-model="sidebar" 
      app
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/dashboard" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.url">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-toolbar-items class="hidden-xs-only" activator="{ on, attrs }">
            <v-btn style="text-transform: unset !important;" v-bind="attrs" v-on="on">
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar-items>
      </template>
      <v-list dense>
           <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Chicco Chikaonda
            </v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
          <v-list-item-group  v-model="selectedItem"  color="primary">
              <v-list-item  v-for="userProfileItem in userProfileItems" :key="userProfileItem.icon">
                <v-list-item-icon>
                  <v-icon v-text="userProfileItem.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="userProfileItem.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list-item-group>

        </v-list>
      </v-menu>
      
    </v-app-bar>

    
</template>
<script>
export default {
  data(){
    return {
      appTitle: 'Epsilon POS',
      sidebar: false,
      selectedItem: 1,
      userProfileItems: [
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Accouunt Settings', icon: 'mdi-account-cog' },
        { text: 'Logout', icon: 'mdi-logout' },
      ],
      menuItems: [
          { title: 'Home', url: '/dashboard', icon: 'mdi-home' },
          // { title: 'Sign Up', path: '/signup', icon: 'mdi-account' },
          // { title: 'Sign In', path: '/signin', icon: 'mdi-lock-open' },
          { title: 'Logout', url: '/logout', icon: 'mdi-logout'}
     ],
     loggedInUser: localStorage.getItem('user'),
    }
  },
mounted() {
    this.cards[0].comps = this.makEosComputer;
}
}
</script>
<style>
  a:link { 
      text-decoration: none; 
      }
</style>
