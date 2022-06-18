<template>
  <v-app>
    
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterInclude/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
      FooterInclude: () => import('../src/views/includes/FooterView.vue'),
      // HeaderInclude: () => import('../src/views/includes/HeaderView.vue'),
    },
};
</script>
<style>

</style>
