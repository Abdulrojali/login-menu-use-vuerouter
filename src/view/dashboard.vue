<script>
import {RouterView} from 'vue-router'
import navigasiVue from '../components/navigasi.vue';
export default{
  components:{
    navigasiVue
  }
}
</script>
<template>
  <navigasiVue></navigasiVue>
  <RouterView></RouterView>
</template>
<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>