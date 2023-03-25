<template>
    <div>
        <div v-if="loading">
            <page-loading></page-loading>
        </div>
        <div v-if="api">
            <h2>{{ api.nome }}</h2>
            <div class="video">
                <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${api.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>    
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
    name: "comp-aula",
    props: ["aula"],
    mixins: [fetchData],
    created() {
        this.fetchData(`/aula/${this.aula}`);
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchData(`/aula/${to.params.aula}`);
        next();
    }
}
</script>

<style lang="scss">
.video {
    position: relative;
    padding-bottom: 56.25%;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>