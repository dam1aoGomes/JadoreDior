<script setup lang="js">
import { ref } from "vue";
import { isAxiosError } from "axios";
import { api } from "@/api";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user_store";
import { useRouter } from "vue-router";

// Recebe o perfumeId como prop
const props = defineProps({
  perfumeId: {
    type: Number,
    required: true,
  },
});

const comentario = ref("");
const loading = ref(false);
const feedback = ref("");
const error = ref(null);

const router = useRouter();
const userStore = useUserStore();

const username = () => user.username;
async function createComment() {
  feedback.value = "";
  error.value = null;
  loading.value = true;

  try {
    if (!userStore.jwt) {
      throw new Error(
        "Você precisa estar logado para adicionar um comentário.",
      );
    }

    const commentData = {
      comentario: comentario.value,
      perfume: props.perfumeId,
      author: userStore.username(),
    };

    const { data } = await api.post("/comentarios", commentData, {
      headers: {
        Authorization: `Bearer ${userStore.jwt}`,
      },
    });

    feedback.value = "Comentário adicionado com sucesso.";
    router.push(`/perfume/${props.perfumeId}`);
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
      feedback.value = error.value?.message || "Erro ao adicionar comentário.";
    } else {
      feedback.value = e.message;
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="cadastrar-comentario">
    <div v-if="loading">Carregando...</div>

    <div
      v-if="feedback"
      :class="{ 'error-message': error, 'success-message': !error }"
    >
      {{ feedback }}
    </div>

    <h4>Adicionar Comentário</h4>

    <form @submit.prevent="createComment">
      <div>
        <textarea
          style="resize: none"
          class="inputs-comentario"
          v-model="comentario"
          id="comentarioInput"
          placeholder="Adicione o seu comentário"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="loading">Adicionar Comentário</button>
      <RouterLink :to="`/perfume/${props.perfumeId}`">
        <button type="button">Cancelar</button>
      </RouterLink>
    </form>
  </div>
</template>
<style scoped></style>
