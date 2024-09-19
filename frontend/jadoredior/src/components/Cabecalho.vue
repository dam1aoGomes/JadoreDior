<script setup>
import { useUserStore } from "@/stores/user_store";
import { RouterLink } from "vue-router";
import { computed } from "vue";

const userStore = useUserStore();

const isAuthenticated = computed(() => userStore.isAuthenticated());
const role = computed(() => userStore.role());
</script>

<template>
  <nav>
    <div id="home-link"><RouterLink to="/">j'adoreDior</RouterLink></div>

    <form action="">
      <input
        type="text"
        name="pesquisa-perfume"
        id="inp-perfume"
        placeholder="Encontre seu perfume"
      />
    </form>

    <div id="minha-conta-link">
      <template v-if="isAuthenticated">
        <span class="text-black">{{ userStore.username() }}</span>

        <template v-if="userStore.role() == 'Admin'">
          <RouterLink to="/admin">Dashboard</RouterLink>
        </template>

        <a href="#" @click="userStore.logout" class="text-black"> Logout </a>
      </template>
      <template v-else>
        <RouterLink to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          Minha Conta
        </RouterLink>

        <RouterLink to="/register">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          Registrar
        </RouterLink>
      </template>
    </div>

    <div id="sobre-link"><RouterLink to="/about">Sobre</RouterLink></div>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#home-link a {
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  color: black;
}
#inp-perfume {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 10px;
  border: solid black 1px;
  border-radius: 5px;
}
#minha-conta-link a,
#minha-conta-link span {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
  text-decoration: none;
}
#sobre-link a {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
  text-decoration: none;
}
</style>
