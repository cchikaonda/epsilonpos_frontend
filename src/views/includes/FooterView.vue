<template>
    <v-footer 
    padless
    fixed
    >
  <v-col class="text-center" cols="12" style="">
       <strong> Copyright <i class="text-info">&copy;</i>  {{ new Date().getFullYear() }} — Epsilon Computech</strong>
  </v-col>
    </v-footer>
</template>

<script>
  export default {
    name: 'FooterView',

    data: () => ({
      //
    }),
  }
</script>
