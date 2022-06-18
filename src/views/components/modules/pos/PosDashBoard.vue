<template>
 <v-app :style="{background: $vuetify.theme.themes.dark.background}">
   <SideBar/>
   <SideBarRight />
   <v-container>
     <v-toolbar color="rgba(0,0,0,0)" flat>
       <v-toolbar-title class="mt-n3">Choose Category</v-toolbar-title>
       <v-spacer></v-spacer>
       <v-text-field label="Search category or menu..." 
            class="mt-5"
            color="brown"
            filled  append-icon="mdi-magnify" 
            dense solo flat background-color="grey lighten-4"  ></v-text-field>
       </v-toolbar>
  <v-item-group mandatory class="mt-n1">
    <v-container>
      <v-row justify="center" class="space">
        <v-col v-for="n in itemCategories" :key="n.category_name"
          cols="12"
          md="2"
        >
          <v-item v-slot="{ active, toggle }" > 
           <v-card background
              :color="active ? '#F6EFEF' : 'white'"
              :class="active ? 'borderme' : 'borderout'"
              class="d-flex align-center rounded-lg mx-2"
              dark
              height="80"
              @click="toggle"
              flat
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="text-center ">
                    <v-list-item-content>
                      <div align="center" justify="center">
                          <v-list-item-subtitle
                       :class="active ? 'brown--text' : 'black--text'" class=" caption"><v-img  src="../../../../assets/CastelBeer.png" max-height="20" max-width="100" contain/>{{n.category_name}}</v-list-item-subtitle>
                  
                      </div>
                    
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  
  <v-toolbar color="#EEEEEE" flat>
    <v-toolbar-title>Coffee Menu</v-toolbar-title><v-spacer></v-spacer><span color="grey">12 Coffees Results</span> 
  </v-toolbar>
  <v-divider class="mb-4"></v-divider>
    <v-item-group>
    <v-container>
      <v-row justify="center" class="space mt-1 mb-4">
        
          <v-col v-for="item in items" :key="item.id"
              cols="12"
              md="2"
              class="mb-4"
            >
              <v-item v-slot="{ active, toggle }" > 
              <v-card 
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="d-flex align-center rounded-lg mx-2"
                  dark
                  height="80"
                  @click="toggle"
                  flat
                >
                
                  <v-row>
                    
                    <v-col cols="12" sm="12">
                      <v-btn color = "indigo lighten-1" >
                       <h5>{{item.price_currency}} {{formatPrice(item.price)}}</h5> 
                    </v-btn> 
                      <v-list-item three-line  class="text-center ">
                        <v-list-item-content>
                          <div align="center" justify="center" class="mb-2">
                              <v-list-item-subtitle
                                :class="active" >
                                <!-- <v-img class="mb-4"  v-bind:src="item.get_image" max-height="50" max-width="100" contain> -->
                                  <span class="my-span">
                                  {{item.item_name}}
                                  </span>
                                <!-- </v-img> -->
                             </v-list-item-subtitle>
                             
                          </div>
                          
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                  
                </v-card>
              </v-item>
              
              
        </v-col>
        
      </v-row>
    </v-container>
  </v-item-group>
 </v-container>

 </v-app>
</template>
<style>
  .my-span {
  /* background-color: white; */
  color: black;
  font-weight: bold;
  margin-right: 0;
  float: bottom;
}
</style>
<script>
import SideBar from '../pos/components/SideBar.vue'
import SideBarRight from '../pos/components/SideBarRight.vue'
import axios from 'axios'
// import  VueNumericKeypad  from "vue-numeric-keypad";

  
  export default {
    
    data: () => ({
      items: [],
      API_URL: 'htpp://localhost:8000/api/v1',
      itemCategories: [],
    }),
    
    options: {
        keyRandomize:  false,
        randomizeClick:  false,
        fixDeleteKey:  true,
      },
    methods: {
        getItems(){
          axios.get('http://localhost:8000/api/v1/items/', {
                    headers: {
                    Authorization: "Token " + `${localStorage.getItem("user-token")}`
                    }
                }).then(response => this.items = response.data)
        },
        getItemCategories(){
          axios.get('http://localhost:8000/api/v1/item-categories/', {
                    headers: {
                    Authorization: "Token " + `${localStorage.getItem("user-token")}`
                    }
                }).then(response => this.itemCategories = response.data)
        },
        formatPrice(value) {
          let val = (value/1).toFixed(2).replace(',', '.')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
             }

        },
    computed: {
      displayItemList(){
        return this.$store.getters['pos/displayItems']
      }

    },
    mounted(){
      this.getItems()
      this.getItemCategories()
    },
    name: 'HomeView',
    components: {
      SideBar,
      SideBarRight,
    },
    created() {
    document.addEventListener('click', function () {
      this.show = 0;
    }.bind(this));
  },
  }
</script>

<style>
.v-card.borderme {
    border: 2px solid #704232 !important;
}
.v-card.borderout{
  border: 1px solid #BCAAA4 !important;
}
</style>
