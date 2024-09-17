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
    <div class="nome-perfume">{{ nome }}</div>
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
@import url("https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap");
.cards {
  display: flex;
}
.card img {
  width: 200px;
  height: 200px;
}
.card {
  width: 200px;
  padding: 10px;
  margin: 5px;
  border-bottom: solid black 1px;
}
.card .nome-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.card .preco-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 200;
  font-style: normal;
}
</style>
