<script setup>
import Cabecalho from "@/components/Cabecalho.vue";
import Destaque from "@/components/Destaque.vue";
import Rodape from "@/components/Rodape.vue";
import PerfumesInicias from "@/components/PerfumesInicias.vue";
import { onMounted, ref } from "vue";
import { api } from "@/api";
import PerfumeCard from "@/components/PerfumeCard.vue";

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
    console.log(perfumes.value);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="body">
    <header>
      <Cabecalho />
    </header>
    <main>
      <Destaque />
      <PerfumesInicias :perfumes="perfumes" />
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
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
