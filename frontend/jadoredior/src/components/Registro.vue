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
<div class="registro">
  <h2>Bem-vindo!</h2>
  <p>Cadastre-se e comece uma nova experiência.</p>
  <form @submit.prevent="register">
    <input v-model="username" type="text" id="username" required placeholder="Username"/>
    <input v-model="email" type="email" id="email" required placeholder="Email"/>
    <input v-model="password" type="password" id="password" required placeholder="Password"/>
    <button type="submit" :disabled="loading">
      {{ loading ? "Registrando..." : "Registrar" }}
    </button>
    <p v-if="errMessage" class="error">{{ errMessage }}</p>
  </form>
  <p>Já tem uma conta? <RouterLink to="/login">Faça login</RouterLink></p>
</div>
</template>

<style scoped>
.registro {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
}
.registro h2 {
  font-weight: 450;
}
.registro p {
  font-weight: 300;
  padding: 5px;
}
.registro p a {
  color: blue;
  text-decoration: none;
  font-weight: 400;
}
.registro form {
  display: flex;
  flex-direction: column;
}
.registro form input {
  border: solid black 1px;
  padding: 5px;
  margin: 10px;
}
.registro form button {
  border: solid black 1px;
  padding: 5px;
  margin: 10px;
}
.registro form button:hover {
  transition-duration: 500ms;
  color: white;
  background-color: black;
}
</style>