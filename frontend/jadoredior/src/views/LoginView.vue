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
  <form @submit.prevent="authenticate">
    <input v-model="identifier" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Senha" required />
    <button type="submit" :disabled="loading">
      {{ loading ? "Autenticando..." : "Entrar" }}
    </button>

    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>

  <p>Não tem uma conta?</p>
  <RouterLink to="/cadastro"> Cadastre-se </RouterLink>
</template>
