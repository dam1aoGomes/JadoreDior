<script setup lang="js">
import { BASE_URL } from "@/api";
import { RouterLink } from 'vue-router'

const { id, nome, valor, marca, id_perfume, img_url } = defineProps({
  id : {type: Number, required: true},
  nome : { type: String, required: true },
  valor: { type: Number, required: true },
  marca: { type: String, default: "" },
  id_perfume: { type: String, required: true },
  img_url: {
    type: String,
    default:
      "https://lojadior.vtexassets.com/arquivos/ids/196292/3348901639989_02-highlight-jador-parfum-deau.jpg?v=638596672715670000",
  }, // Adicionar uma imagem padrão
});
</script>

<template>
  <div class="card">
    <RouterLink :to="'/perfume/' + id">
      <img :src="`${BASE_URL}` + img_url" alt="" />
    </RouterLink>
    <div class="info-perfume">{{ nome }} - {{ marca }}</div>
    <div class="preco-perfume">
      <p>
        {{
          valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
}
.card img {
  width: 200px;
  height: 200px;
  box-shadow: 0 0 5px black;
  border-radius: 20px;
}
.card .info-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.card .preco-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 200;
  font-style: normal;
}
</style>
