<template>
    <div>
     <div v-if="loading">
        <page-loading></page-loading>
      </div>
      <transition mode="out-in">
        <div v-if="api">
          <div>
            <h1>{{ api.titulo }}</h1>
            <p>{{ api.descricao }}</p> 
            <ul>
              <li><b>Email:</b> {{ api.contato.email }}</li>
              <li><b>Telefone:</b> {{ api.contato.telefone }}</li>
              <li><b>Endereço:</b> {{ api.contato.endereco }}</li>
            </ul>
          </div>
        </div>
      </transition>
     </div>
  </template>
  
<script>
import fetchData from '@/mixins/fetchData.js';

  export default {
    name: 'comp-contato',
    mixins: [fetchData], 
    created() {
      this.fetchData("/contato");
    }
  }

</script>

<style>
</style>
  