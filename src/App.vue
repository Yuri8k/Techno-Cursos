<template>
  <div id="app">
    <the-header-vue></the-header-vue>
    <router-view class="container"/>
  </div>
</template>


<script>
import TheHeaderVue from './components/TheHeader.vue'

  export default {
    components: {
      TheHeaderVue
    }
  }
</script>

<style lang="scss">

  body {
    margin: 0px;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #234;
  }
  
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  a {
    font-size: bold;
    text-decoration: none;
    color: #234;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .v-enter {
    opacity: 0;
    transform: translate3d(-20px, 0,0);
  }

  .v-enter-active {
    transition: all .3s;
  }

  img {
    max-width: 100%;
    width: 100%;
    display: block;
  }

  .conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  gap: 30px;

  @media screen and (max-width: 400px){
    display: block;
  }
}

</style>
