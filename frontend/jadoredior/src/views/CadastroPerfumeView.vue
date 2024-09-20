<script setup>
import Cabecalho from "@/components/Cabecalho.vue";
import Rodape from "@/components/Rodape.vue";
import CadastroPerfume from "@/components/CadastroPerfume.vue";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user_store";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

onMounted(async () => {
  if (userStore.role() != "Admin") {
    router.push("/");
  }
});
</script>

<template>
  <Cabecalho />
  <CadastroPerfume />
  <Rodape />
</template>

