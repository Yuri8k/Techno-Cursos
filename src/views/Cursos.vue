<template>
    <div>
     <div v-if="loading">
        <page-loading></page-loading>
      </div>
      <transition mode="out-in">
        <div v-if="api" class="conteudo">
          <div>
            <h1>{{ api.titulo }}</h1>
            <p>{{ api.descricao }}</p>
          </div>
          <ul class="lista">
            <li v-for="curso in api.cursos" :key="curso.id">
              <h2>
                <router-link :to="{name: 'curso', params: {curso: curso.id}}">{{ curso.nome }} - {{ curso.totalAulas }} Aulas | {{ curso.horas }} horas</router-link>
              </h2>
              <p>{{ curso.descricao }}</p>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
<script>
import fetchData from '@/mixins/fetchData.js';

  export default {
    name: 'comp-cursos',
    mixins: [fetchData],
    created() {
      this.fetchData("/cursos");
    }
  }

</script>

<style scoped>

.lista li {
  margin-block: 40px;
}

</style>
  