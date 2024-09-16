<script setup>
import PerfumeCard from "./PerfumeCard.vue";
const props = defineProps({
  perfumes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="perfumes">
    <hr />
    <!--cards de perfumes Femininos-->
    <h4 class="tipo-perfume">Destaques Femininos</h4>
    <div class="cards">
      <PerfumeCard
        v-for="perfume in perfumes"
        :key="perfume.id"
        :nome="perfume.attributes.nome"
        :valor="perfume.attributes.valor"
        :marca="perfume.attributes.marca"
        :id_perfume="perfume.attributes.id_perfume"
        :img_url="perfume.attributes.cover.data.attributes.url"
      />
    </div>
  </div>

  <button class="descubra-mais">Descubra mais</button>
</template>

<style>
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
