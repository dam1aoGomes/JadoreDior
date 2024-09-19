import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = reactive({
    id: Number(localStorage.getItem("id")),
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") || "",
    role: {
      name: localStorage.getItem("role") || "",
    },
  });

  const jwt = ref(localStorage.getItem("jwt") || ""); // Tornar o JWT reativo

  // Funções computadas
  const role = () => user.role.name;
  const username = () => user.username;
  const isAuthenticated = () => jwt.value !== "";

  // Funções
  function authenticated(authUser, token) {
    user.id = authUser.id;
    user.username = authUser.username;
    user.email = authUser.email;
    user.role.name = authUser.role.name;
    jwt.value = token;

    localStorage.setItem("id", authUser.id.toString());
    localStorage.setItem("username", authUser.username);
    localStorage.setItem("email", authUser.email);
    localStorage.setItem("role", authUser.role.name);
    localStorage.setItem("jwt", token); // Armazenar o JWT no localStorage
  }

  function logout() {
    jwt.value = "";
    user.id = null;
    user.username = "";
    user.email = "";
    user.role.name = "";

    localStorage.clear();
  }

  return { user, username, jwt, role, isAuthenticated, authenticated, logout };
});

