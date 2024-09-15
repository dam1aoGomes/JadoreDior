<script setup>
import Cabecalho from '@/components/Cabecalho.vue';
import Destaque from '@/components/Destaque.vue';
import Rodape from '@/components/Rodape.vue';
</script>

<template>
  <div class="body">
    <header>
      <Cabecalho />
    </header>
    <main>
      <Destaque />
    </main>
    <footer>
      <Rodape />
    </footer>
  </div>
</template>

<style>
  * {
    margin: 0;
  }
  .body {
    display: flex;
    flex-direction: column;
  }
  main {
    display: flex;
    height: 100vh;
  }
</style>
