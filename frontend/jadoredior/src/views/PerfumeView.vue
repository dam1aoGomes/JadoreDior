<script setup>
import { api } from "@/api";
import { onBeforeMount, ref } from "vue";

import Perfume from "@/components/Perfume.vue";
import Cabecalho from "@/components/Cabecalho.vue";
import Rodape from "@/components/Rodape.vue";
import Comentarios from "@/components/Comentarios.vue";
import AdicionarComentario from "@/components/AdicionarComentario.vue";

const perfume_data = ref({});
const loading = ref(true);

const { id } = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onBeforeMount(async () => {
  try {
    const { data } = await api.get(`/perfumes/${id}`, {
      params: {
        populate: "cover",
      },
    });
    perfume_data.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Cabecalho />
  <main>
    <Perfume
      :id="perfume_data.id"
      :nome="perfume_data.attributes.nome"
      :valor="perfume_data.attributes.valor"
      :marca="perfume_data.attributes.marca"
      :img_url="perfume_data.attributes.cover.data.attributes.url"
      :descricao="perfume_data.attributes.description"
    />
    <AdicionarComentario :perfume-id="perfume_data.id" />
    <Comentarios :id_perfume="perfume_data.id" />
  </main>
  <Rodape />
</template>
