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

const token =
  "651e3ff808f4647429050fc747f61622407f8db81b00960dac1d1839b52e1ed6732aaabf9258ea9fecd3f34cb681460418042908300e5fda9fe0749985019256545328de01c20e7ade314181211e78ec77bacb27a861b9a342f020468e1c740a80aac0e6c18ed7e9997e80584c823f3eb60190b5096ae4f06aae927b6adc931e";

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
    <AdicionarComentario />
    <Comentarios :id_perfume="perfume_data.id" />
  </main>
  <Rodape />
</template>
