<script setup>
import PerfumeCard from "./PerfumeCard.vue";
import Comentarios from "./Comentarios.vue";
import AdicionarComentario from "./AdicionarComentario.vue";

import { onBeforeMount, ref } from "vue";
import { api } from "@/api";

const perfumes = ref([]);
const loading = ref(true);

const props = defineProps({
  perfumes: {
    type: Array,
    required: true,
  },
});

onBeforeMount(async () => {
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
<div class="perfumes">
 <div class="cards">
  <PerfumeCard
        v-for="perfume in perfumes"
        :id="perfume.id"
        :nome="perfume.attributes.nome"
        :valor="perfume.attributes.valor"
        :marca="perfume.attributes.marca"
        :id_perfume="perfume.attributes.id_perfume"
        :img_url="perfume.attributes.cover.data.attributes.url"
  />
 </div>
</div>
</template>

<style scoped>
.perfumes {
    height: 90vh;
    width: 100%;
    overflow-y: auto;
}
.perfumes .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
}
</style>