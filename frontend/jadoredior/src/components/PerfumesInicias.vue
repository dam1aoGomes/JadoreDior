<script setup>
import { RouterLink } from 'vue-router'
import PerfumeCard from "./PerfumeCard.vue";
import { ref, onMounted, onBeforeUpdate } from 'vue';

const {perfumes} = defineProps({
  perfumes: {
    type: Array,
    required: true,
  }, 
});

const five_elements = ref([])

onBeforeUpdate(()=>{
  for(let i = 0; perfumes.length; i++) {
  five_elements.value.push(perfumes[i]);
  if(i >= 4) {
    break;
  }
} 
})
</script>

<template>
  <div class="perfumes">
    <h4>Perfumes em destaque</h4>
    <div class="cards">
      <PerfumeCard
        v-for="perfume in five_elements"
        :id="perfume.id"
        :nome="perfume.attributes.nome"
        :valor="perfume.attributes.valor"
        :marca="perfume.attributes.marca"
        :img_url="perfume.attributes.cover.data.attributes.url"
      />
    </div>
    <RouterLink to="/perfumes"><Button class="descubra-mais">Descubra Mais</Button></RouterLink>
  </div>
</template>

<style scoped>
.perfumes {
  width: 100%;
  min-height: 70vh;
}
.perfumes .cards {
  display: flex;
  justify-content: center;
}
.perfumes h4 {
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-left: 10vw;
  margin-top: 10vh;
}
.perfumes .descubra-mais {
  margin-left: 10vw;
  padding: 10px;
  font-family: "Gothic A1", sans-serif;
  font-weight: 500;
  font-style: normal;
  border: solid black 1px;
  background-color: white;
}
.perfumes .descubra-mais:hover {
  transition-duration: 100ms;
  color: white;
  background-color: black;
}
</style>
