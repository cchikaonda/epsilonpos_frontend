<template>
    <v-app id="inspire">
        <v-main>
            <HeaderInclude/>
            
            <FooterInclude/>
        </v-main>
    </v-app>
  
</template>

<script>
export default {
    data: ()=>({
        //
    }),
    components: {
      FooterInclude: () => import('../../../../views/includes/FooterView.vue'),
      HeaderInclude: () => import('../../../../views/includes/HeaderView.vue')
    },
}
</script>

<style>

</style>