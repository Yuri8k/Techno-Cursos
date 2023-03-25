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
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Designer" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import PageLoading from "../components/PageLoading.vue";

export default {
  components: { PageLoading },
  name: "HomeView",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style scoped lang="scss">
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba($color: #000000, $alpha: 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  margin-block: 40px;
  margin-top: 10px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background: #138855;
  }
}
</style>
