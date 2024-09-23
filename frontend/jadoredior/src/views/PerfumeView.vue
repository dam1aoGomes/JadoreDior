<script setup>
import { api } from "@/api";
import { onBeforeMount, ref } from "vue";

import Perfume from "@/components/Perfume.vue";
import Cabecalho from "@/components/Cabecalho.vue";
import Rodape from "@/components/Rodape.vue";
import AdicionarComentario from "@/components/AdicionarComentario.vue";
import ComentarioCard from "@/components/ComentarioCard.vue";
import { useUserStore } from "@/stores/user_store";

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
const userStore = useUserStore();
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
    <AdicionarComentario
      v-if="userStore.isAuthenticated()"
      :perfume-id="perfume_data.id"
    />
    <div class="comentarios-container">
      <h3>Comentários</h3>
      <div v-if="loadingComentarios" class="feedBack">Carregando comentários...</div>
      <div v-if="!loadingComentarios && comentarios.length === 0" class="feedBack">
        Nenhum comentário encontrado.
      </div>
      <ComentarioCard
        v-for="comentario in comentarios"
        :key="comentario.id"
        :comentario="comentario"
      />
    </div>
  </main>
  <Rodape />
</template>

<style scoped>
/*
  Esse css, não deveria estar aqui, porém não tem aonde
  colocar, pois eu precisario encapsular o <ComentarioCard />
  em algum lugar. Paz do Senhor Irmão.
*/
.comentarios-container {
  margin-top: 10vh;
  width: 100%;
  max-height: 80vh;
  overflow-y: scroll;
  font-family: "Gothic A1", sans-serif;
  font-weight: 300;
  font-style: normal;
  display: flex;
  flex-direction: column;
}

.comentarios-container h3 {
  margin-left: 20vh;
}

.comentarios-container .feedBack {
  margin-left: 20vh;
}
</style>
