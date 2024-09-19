<script setup>
import { ref } from "vue";
import { isAxiosError } from "axios";
import { api } from "@/api";
import { useUpload } from "@/composables/useUpload";
import { RouterLink, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user_store";

const id = ref(0);
const nome = ref("");
const marca = ref("");
const cover = ref(null);
const coverURL = ref("");
const valor = ref(null);
const description = ref("");

const userStore = useUserStore();

const loading = ref(false);
const feedback = ref("");
const error = ref(null);

const route = useRoute();

async function getPerfume() {
  try {
    const { data } = await api.get(`/perfumes/${route.params.id}`, {
      params: {
        populate: "cover",
      },
    });
    const perfume = data.data;
    id.value = Number(route.params.id);
    nome.value = perfume.nome;
    marca.value = perfume.marca;
    valor.value = perfume.valor;
    description.value = perfume.description;
    coverURL.value = perfume.cover.url;
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
    }
  } finally {
    loading.value = false;
  }
}

function handleUpload(event) {
  const target = event.target;
  cover.value = target.files?.item(0);
}

async function createPerfume() {
  try {
    loading.value = true;
    const formData = new FormData();
    formData.append("files.cover", cover.value);
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
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
      feedback.value = error.value.error.message;
    }
  } finally {
    loading.value = false;
  }
}

async function updatePerfume() {
  try {
    loading.value = true;

    if (cover.value) {
      const formData = new FormData();
      formData.append("files.cover", cover.value);
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

      feedback.value = "Perfume atualizado com sucesso.";
    } else {
      const { data } = await api.put(
        `/perfumes/${id.value}`,
        {
          data: {
            nome: nome.value,
            marca: marca.value,
            valor: valor.value,
            description: description.value,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userStore.jwt}`,
          },
        },
      );
      await getPerfume();
      feedback.value = `Perfume ${data.data.nome} atualizado com sucesso.`;
    }
  } catch (e) {
    if (isAxiosError(e)) {
      error.value = e.response?.data;
      feedback.value = error.value.error.message;
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
  <div v-if="loading">Carregando...</div>

  <div
    v-if="feedback"
    :class="{ 'error-message': error, 'success-message': !error }"
  >
    {{ feedback }}
  </div>

  <form @submit.prevent="id != 0 ? updatePerfume() : createPerfume()">
    <img v-if="coverURL" :src="useUpload()(coverURL)" />
    <div>
      <label for="coverInput">Imagem do Perfume</label>
      <input
        @change="handleUpload"
        type="file"
        id="coverInput"
        accept="image/*"
      />
    </div>
    <div>
      <label for="nomeInput">Nome do Perfume</label>
      <input
        v-model="nome"
        type="text"
        id="nomeInput"
        placeholder="Nome do perfume"
      />
    </div>
    <div>
      <label for="marcaInput">Marca</label>
      <input
        v-model="marca"
        type="text"
        id="marcaInput"
        placeholder="Marca do perfume"
      />
    </div>
    <div>
      <label for="descriptionInput">Descrição</label>
      <textarea
        v-model="description"
        id="descriptionInput"
        placeholder="Descrição do perfume"
      ></textarea>
    </div>
    <div>
      <label for="valorInput">Valor</label>
      <input
        v-model="valor"
        type="number"
        id="valorInput"
        placeholder="Valor do perfume"
      />
    </div>
    <RouterLink to="/admin">Cancelar</RouterLink>
    <button type="submit">
      {{ id ? "Editar" : "Criar" }}
    </button>
  </form>
</template>

<style>
.success-message {
  color: green;
}
.error-message {
  color: red;
}
</style>
