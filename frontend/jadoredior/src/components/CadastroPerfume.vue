<script setup>
import { ref } from "vue";
import { isAxiosError } from "axios";
import { api } from "@/api";
import { useUpload } from "@/composables/useUpload";
import { RouterLink, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user_store";
import { useRouter } from "vue-router";

const id = ref(0);
const nome = ref("");
const marca = ref("");
const cover = ref(null);
const coverURL = ref("");
const valor = ref(null);
const description = ref("");

const router = useRouter();
const userStore = useUserStore();

const loading = ref(false);
const feedback = ref("");
const error = ref(null);

const route = useRoute();

async function getPerfume() {
  try {
    loading.value = true;
    const { data } = await api.get(`/perfumes/${route.params.id}`, {
      params: {
        populate: "cover",
      },
    });
    const perfume = data.data.attributes;
    id.value = Number(route.params.id);
    nome.value = perfume.nome;
    marca.value = perfume.marca;
    valor.value = perfume.valor;
    description.value = perfume.description;

    // Verificando se há cover antes de acessar
    if (perfume.cover?.data) {
      coverURL.value = perfume.cover.data.attributes.url;
    }
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
      feedback.value = error.value?.message || "Erro ao carregar perfume.";
    }
  } finally {
    loading.value = false;
  }
}

function handleUpload(event) {
  cover.value = event.target.files?.item(0);
}

async function createPerfume() {
  feedback.value = "";
  error.value = null;
  loading.value = true;

  try {
    const formData = new FormData();
    if (cover.value) {
      formData.append("files.cover", cover.value);
    }
    formData.append(
      "data",
      JSON.stringify({
        nome: nome.value,
        marca: marca.value,
        valor: valor.value,
        description: description.value,
      }),
    );

    const { data } = await api.post("/perfumes", formData, {
      headers: {
        Authorization: `Bearer ${userStore.jwt}`,
      },
    });

    feedback.value = "Perfume criado com sucesso.";
    router.push("/dashboard");
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
      feedback.value = error.value?.message || "Erro ao criar perfume.";
    }
  } finally {
    loading.value = false;
  }
}

async function updatePerfume() {
  feedback.value = "";
  error.value = null;
  loading.value = true;

  try {
    const formData = new FormData();
    if (cover.value) {
      formData.append("files.cover", cover.value);
    }
    formData.append(
      "data",
      JSON.stringify({
        nome: nome.value,
        marca: marca.value,
        valor: valor.value,
        description: description.value,
      }),
    );

    const { data } = await api.put(`/perfumes/${id.value}`, formData, {
      headers: {
        Authorization: `Bearer ${userStore.jwt}`,
      },
    });

    feedback.value = `Perfume ${data.data.attributes.nome} atualizado com sucesso.`;
    await getPerfume();
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
      feedback.value = error.value?.message || "Erro ao atualizar perfume.";
    }
  } finally {
    loading.value = false;
  }
}

if (route.params.id) {
  getPerfume();
}
</script>

<template>
<div class="cadastrar-perfume">
  <div v-if="loading">Carregando...</div>

  <div
    v-if="feedback"
    :class="{ 'error-message': error, 'success-message': !error }"
  >
    {{ feedback }}
  </div>

  <h4>{{ id != 0 ? "Atualizar Perfume" : "Criar Perfume" }}</h4>

  <form @submit.prevent="id != 0 ? updatePerfume() : createPerfume()">
    <img v-if="coverURL" :src="useUpload()(coverURL)" alt="Imagem do perfume" />
    <div>
      Nome:
      <input
        class="inputs-perfume"
        v-model="nome"
        type="text"
        id="nomeInput"
        placeholder="Nome do perfume"
        required
      />
    </div>
    <div>
      Marca:
      <input
        class="inputs-perfume"
        v-model="marca"
        type="text"
        id="marcaInput"
        placeholder="Marca do perfume"
        required
      />
    </div>
    <div>
      Valor:
      <input
        class="inputs-perfume"
        v-model="valor"
        type="number"
        id="valorInput"
        placeholder="Valor do perfume"
        required
      />
    </div>
    <div>
      <textarea
        style="resize: none"
        class="inputs-perfume"
        v-model="description"
        id="descriptionInput"
        placeholder="Descrição do perfume"
        required
      ></textarea>
    </div>
    <div>
      <label for="coverInput">Imagem do Perfume</label> <br>
      <input v-if="id != 0"
        @change="handleUpload"
        type="file"
        id="coverInput"
        accept="image/*"
      />
      <input v-else 
        @change="handleUpload"
        type="file"
        id="coverInput"
        accept="image/*"
        required
      />
    </div>
    <button type="submit">
      {{ id != 0 ? "Atualizar Perfume" : "Criar Perfume" }}
    </button>
    <RouterLink to="/dashboard"><button>
      Cancelar
    </button></RouterLink>
  </form>
</div>
</template>

<style>
.success-message {
  color: green;
}
.error-message {
  color: red;
}
.cadastrar-perfume {
  min-height: 140vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.cadastrar-perfume h4 {
  margin-bottom: 5vh;
}
.cadastrar-perfume .inputs-perfume {
  border: solid black 1px;
  padding: 5px;
  margin: 10px;
}
.cadastrar-perfume form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
#descriptionInput {
  width: 600px;
  height: 200px;
  box-shadow: 0 0 10px black;
  border: none;
  border-radius: 3px;
}
.cadastrar-perfume img {
  width: 300px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 10px;
}
.cadastrar-perfume button {
  border: solid black 1px;
  padding: 5px;
  width: 200px;
  margin: 10px;
}
</style>
