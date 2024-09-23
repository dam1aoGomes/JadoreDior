<script setup lang="js">
import { ref } from "vue";
import { isAxiosError } from "axios";
import { api } from "@/api";
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
      data: {
        comentario: comentario.value,
        perfume: props.perfumeId,
        author: userStore.username(),
      },
    };

    await api.post("/comentarios", commentData, {
      headers: {
        Authorization: `Bearer ${userStore.jwt}`,
      },
    });

    feedback.value = "Comentário adicionado com sucesso.";

    window.location.reload();
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
    <div v-if="loading" class="carregando" >Carregando...</div>

    <div
      v-if="feedback"
      :class="{ 'error-message': error, 'success-message': !error }"
    >
      {{ feedback }}
    </div>

    <h4>Ei {{ userStore.username()}}! Adicione um comentario:</h4>

    <form @submit.prevent="createComment">
      <div>
        <textarea
          rows="5" cols="33"
          style="resize: none"
          class="inputs-comentario"
          v-model="comentario"
          id="comentarioInput"
          placeholder="Precisamos da sua opnião"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="loading">Adicionar Comentário</button>
      <RouterLink :to="`/perfume/${props.perfumeId}`">
        <button type="button" id="cancelar">Cancelar</button>
      </RouterLink>
    </form>
  </div>
</template>

<style scoped>
.cadastrar-comentario {
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-family: "Gothic A1", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.cadastrar-comentario h4 {
  margin-left: 20vh;
}

.cadastrar-comentario form {
  width: 100%;
}

.cadastrar-comentario .carregando {
  margin-left: 20vh;  
}

.inputs-comentario {
  width: 70%;
  height: 50px;
  padding: 5px;
  border: none;
  border-bottom: solid black 1px;
  margin-bottom: 10px;
  margin-left: 20vh;
  line-height: 1.5;
}

button {
  margin-left: 20vh;
  border: solid black 1px;
  padding: 5px;
}

button:hover {
  color: white;
  background-color: black;
  border: solid white 1px;
}

#cancelar:hover {
  border: solid white 1px;
  color: white;
  background-color: red;
}

.error-message {
  color: red;
  margin-left: 20vh;
}

.success-message {
  color: green;
  margin-left: 20vh;
}
</style>
