<script setup>
import Cabecalho from '@/components/Cabecalho.vue';
import Rodape from '@/components/Rodape.vue';
import About from '@/components/About.vue';
</script>

<template>
<Cabecalho />
<About />
<Rodape />
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
