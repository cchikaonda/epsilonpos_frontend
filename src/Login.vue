
<template>
  <v-app >
    <div class="background"></div>
    <v-main class="d-flex justify-center align-center">
    <v-col cols ="10" lg="4" class="mx-auto" >
      <v-card class="pa-4">
        <v-form @submit.prevent="submitForm" ref="form" >
          <v-card-text class="text-center">
            <div class="text-center mt-4">
                <v-avatar color ="indigo lighten-3" size="100">
                  <v-icon size = "50">mdi-account</v-icon>
                </v-avatar>
            </div>
            <div class="mb-4 mt-4 text-center ">
              <h2 class="indigo--text">Epsilon POS V0.1.0</h2>  
            </div>
            
              <v-text-field
                  :rules="emailRules"
                  v-model="email"
                  prepend-inner-icon="mdi-account-circle"
                  name="login"
                  label="User email"
                  type="text"
                  outlined
                  required
              ></v-text-field>
              <v-text-field
                  :rules="passwordRules"
                  v-model="password"
                  required
                  prepend-inner-icon="mdi-lock"
                  id="password"
                  name="password"
                  label="Password"
                  :type = "showPassword ? 'text' : 'password'"
                  :append-icon = "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append = "showPassword = !showPassword"
                  outlined
              ></v-text-field>
                <v-alert
                  dense
                  text
                  outlined
                  color="deep-orange"
                  type="error"
                  v-model="passwordalert"
                >
                 Incorrect <strong>username</strong> or <strong>password. </strong>Please enter the correct username and password
                </v-alert>
                <v-switch label="Remember me" color="indigo" ></v-switch>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-center">
              <v-btn :loading = "loading"  type = "submit" class="mb-4 mt-4" block outlined color="indigo" x-large >Login <v-icon size="35">mdi-login</v-icon></v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
    </v-main>
    <v-snackbar top color ="green" v-model="snackbar">
      Login Success
    </v-snackbar>
    <!-- <FooterInclude/> -->
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginView',
    token: localStorage.getItem('user-token') || null,
    data: () => ({
      loading: false,
      showPassword: false,
      passwordalert:false,
      snackbar:'',
      emailRules: [
          value => !!value || 'Required.',
          value => (value || '').length <= 50 || 'Max 50 characters',
          value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid username'
          },
        ],
        email: '',
        usernameRules: [
          value => !!value || 'Username is required.',
          value => (value || '').length <= 50 || 'Max 50 characters',
          value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid username'
          },
        ],
      // username: '',
      // usernameRules: [
      //   v => !!v || 'Username is required',
      //   v => (v && v.length > 5) || 'Username must be more than 5 characters',
      //   ],

      password:'',
      passwordRules: [
          v => !!v || 'Password is required',
      ],
      firstcheckbox: false,
    }),
    methods: {
      submitForm(){
        if(this.$refs.form.validate()){
          this.loading = true
          const formData ={
              email: this.email,
              password: this.password,
          }
          axios
        .post('http://localhost:8000/api/v1/token/login', formData)
        .then(resp =>{
          console.log(resp)
          this.token = resp.data.auth_token;
          console.log(this.token)
          localStorage.setItem('user-token', resp.data.auth_token)
          this.snackbar = true
          const { email } = this;
          this.$router.replace({ name: 'dashboard', params:{ email: email}});
          localStorage.setItem('user', email,)
        })
        .catch(err => console.log(err) )
          setTimeout(() => {
            // localStorage.removeItem('user-token')
            this.passwordalert = true
            this.loading = false
          }, 3000);
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },  
    props: {
      source: String
    }
};
</script>

<style>
 .background{
   background-image: url(assets/background_2.jpg) !important;
   height: 500px;
   width: 100%;
   display: block;
   position: absolute;
   top: 0;
   background-size: cover;
 }
</style>

