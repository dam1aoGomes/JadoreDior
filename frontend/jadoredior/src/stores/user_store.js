import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = {
    id: Number(localStorage.getItem("id")),
    username: localStorage.getItem("username") || "",
    email: localStorage.getItem("email") | "",
    role: {
      name: localStorage.getItem("role") || "",
    },
  };

  let jwt = "";

  // Funções computadas
  const role = () => user.role.name;
  const username = () => user.username;
  const isAuthenticated = () => jwt !== "";

  // Funções
  function authenticaded(authUser, token) {
    user = authUser;
    jwt = token;

    localStorage.setItem("username", authUser.username);
    localStorage.setItem("id", authUser.id.toString());
    localStorage.setItem("email", authUser.email);
    localStorage.setItem("role", authUser.role.name);
  }

  function logout() {
    jwt = "";
    user = {
      id: Number(localStorage.getItem("id")),
      username: "",
      email: "",
      role: {
        name: "",
      },
    };

    localStorage.clear();
  }

  return { user, username, jwt, role, isAuthenticated, authenticaded, logout };
});
