<script setup lang="js">
const { nome, valor, marca, id_perfume, img_url } = defineProps({
  nome: { type: String, required: true },
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
    <img :src="img_url" alt="" />
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
* {
  margin: 0;
}
hr {
  width: 100%;
  border: solid black 1px;
}
.perfumes {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}
.perfumes .tipo-perfume {
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  margin-top: 30px;
  margin-bottom: 15px;
}
.perfumes .cards {
  display: flex;
}
.perfumes .cards .card img {
  width: 200px;
  height: 200px;
}
.perfumes .cards .card {
  width: 200px;
  padding: 10px;
  margin: 5px;
  border-bottom: solid black 1px;
}
.perfumes .cards .card .nome-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.perfumes .cards .card .preco-perfume {
  font-family: "Gothic A1", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.descubra-mais {
  margin-top: 20px;
  padding: 10px;
  background-color: black;
  border: none;
  color: white;
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.descubra-mais:hover {
  transition-duration: 300ms;
  color: black;
  background-color: white;
  border-bottom: solid black 1px;
}
</style>
