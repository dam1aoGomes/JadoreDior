<script setup>
import Cabecalho from "@/components/Cabecalho.vue";
import Destaque from "@/components/Destaque.vue";
import Rodape from "@/components/Rodape.vue";
import PerfumesInicias from "@/components/PerfumesInicias.vue";
import { onMounted, ref } from "vue";
import { api } from "@/api";

const perfumes = ref([]);
const loading = ref(true);
onMounted(async () => {
  try {
    const { data } = await api.get("/perfumes", {
      params: {
        populate: "cover",
      },
    });
    perfumes.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Cabecalho/>
  <main>
    <Destaque/>
    <PerfumesInicias :perfumes="perfumes"/>
  </main>
  <Rodape/>
</template>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250vh;
    max-width: 100vw;
  }
</style>
