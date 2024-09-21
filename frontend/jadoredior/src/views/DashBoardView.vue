<script setup>
import Cabecalho from '@/components/Cabecalho.vue';
import Rodape from '@/components/Rodape.vue';
import DashBoard from '@/components/DashBoard.vue';

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
<DashBoard :perfumes="perfumes"/>
<Rodape />
</template>