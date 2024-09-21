<script setup lang="js">
import { BASE_URL } from "@/api";
import { RouterLink } from 'vue-router'

const { id, nome, valor, marca, img_url, showButtons } = defineProps({
  id : {type: Number, required: true},
  nome : { type: String, required: true },
  valor: { type: Number, required: true },
  marca: { type: String, default: "" },
  img_url: {
    type: String,
    default:
      "https://lojadior.vtexassets.com/arquivos/ids/196292/3348901639989_02-highlight-jador-parfum-deau.jpg?v=638596672715670000",
  }, // Adicionar uma imagem padrão
  showButtons: {
    type: Boolean,
    default: false
  }
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
    <template v-if="showButtons">
          <RouterLink :to="'/atualizar-perfume/' + id"><Button id="editar">Editar</Button></RouterLink>
          <RouterLink :to="'/perfume/' + id"><Button id="deletar">Deletar</Button></RouterLink>
    </template>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  padding: 10px;
}
.card img {
  width: 200px;
  height: 200px;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
}
.card .info-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;
  font-style: normal;
  border-top: solid black 1px;
  padding-top: 5px;
}
.card .preco-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 200;
  font-style: normal;
}
#editar{
  border: solid black 1px;
  padding: 5px;
  margin: 5px;
}
#editar:hover {
  background-color: black;
  color: white;
}
#deletar {
  border: solid white 1px;
  padding: 5px;
  margin: 5px;
  background-color: red;
  color: white;
}
</style>
