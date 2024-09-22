<script setup>
import { api } from "@/api";
import { onBeforeMount, ref } from "vue";

import Perfume from "@/components/Perfume.vue";
import Cabecalho from "@/components/Cabecalho.vue";
import Rodape from "@/components/Rodape.vue";
import AdicionarComentario from "@/components/AdicionarComentario.vue";
import ComentarioCard from "@/components/ComentarioCard.vue";

const perfume_data = ref({});
const loading = ref(true);

const comentarios = ref([]);
const loadingComentarios = ref(true);

// Define as props
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onBeforeMount(async () => {
  try {
    const { data } = await api.get(`/perfumes/${props.id}`, {
      params: {
        populate: "cover",
      },
    });
    perfume_data.value = data.data;

    const { data: comentariosData } = await api.get(`/comentarios`, {
      params: {
        "filters[perfume][id][$eq]": perfume_data.value.id,
      },
    });
    comentarios.value = comentariosData.data;
    console.log(comentarios.value);
  } catch (error) {
    console.log(error); //Mudar para um fb depois
  } finally {
    loading.value = false;
    loadingComentarios.value = false;
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
  </main>
  <Rodape />
</template>
