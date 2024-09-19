<script setup>
import { api } from "@/api";
import { useUserStore } from "@/stores/user_store";
import { isAxiosError } from "axios";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const identifier = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");
const router = useRouter();
const userStore = useUserStore();

async function authenticate() {
  try {
    loading.value = true;
    errorMessage.value = "";

    const data = await api.post("/auth/local", {
      identifier: identifier.value,
      password: password.value,
    });

    const { jwt } = data.data;

    const res = await api.get("/users/me", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      params: {
        populate: "role",
      },
    });
    console.log(res);

    const role = res.data.role.type;
    userStore.authenticated(res.data, jwt);

    if (role == "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  } catch (e) {
    if (isAxiosError(e)) {
      errorMessage.value = "Falha na autenticação. Verifique suas credenciais.";
    } else {
      errorMessage.value = "Ocorreu um erro inesperado.";
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
<div class="login">
<h2>Entrar</h2>
<p>para continuar com sua conta j'adoreDior.</p>    
<form @submit.prevent="authenticate" class="formulario">
    <input v-model="identifier" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Senha" required />
    <button type="submit" :disabled="loading">
    {{ loading ? "Autenticando..." : "Entrar" }}
    </button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
</form>
<p>Não tem uma conta? <RouterLink to="/register">Cadastre-se</RouterLink></p>
</div>
</template>

<style scoped>
.login {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
}
.login h2 {
  font-weight: 450;
}
.login p {
  font-weight: 300;
  padding: 5px;
}
.login p a {
  color: blue;
  text-decoration: none;
  font-weight: 400;
}
.login .formulario {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: solid black 1px;
}
.login .formulario input {
  padding: 5px;
  margin: 10px;
  border: solid black 1px;
}
.login .formulario button {
  padding: 5px;
  margin: 10px;
  border: solid black 1px;
  background-color: white;
}
.login .formulario button:hover {
  transition-duration: 500ms;
  color: white;
  background-color: black;
}
</style>