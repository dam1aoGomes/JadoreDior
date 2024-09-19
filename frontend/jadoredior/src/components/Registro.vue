<script setup>
import { api } from "@/api";
import router from "@/router";
import { ref } from "vue";

const loading = ref(false);
const errMessage = ref("");
const username = ref("");
const email = ref("");
const password = ref("");

async function register() {
  try {
    loading.value = true;
    errMessage.value = "";
    const { data } = await api.post("auth/local/register", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    router.push("/login");
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      errMessage.value = e.response.data.message[0].messages[0].message;
    } else {
      errMessage.value = "Ocorreu um erro inesperado.";
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <form @submit.prevent="register">
    <div>
      <label for="username">Usuário</label>
      <input v-model="username" type="text" id="username" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" required />
    </div>
    <div>
      <label for="password">Senha</label>
      <input v-model="password" type="password" id="password" required />
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? "Registrando..." : "Registrar" }}
    </button>

    <p v-if="errMessage" class="error">{{ errMessage }}</p>
  </form>

  <p>Já tem uma conta?</p>
  <RouterLink to="/login">Faça login</RouterLink>
</template>
