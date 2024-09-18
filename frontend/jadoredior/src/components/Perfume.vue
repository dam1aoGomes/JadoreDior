<script setup>
import { BASE_URL } from "@/api";

const { id, nome, valor, marca, img_url } = defineProps({
  id: { type: Number, required: true },
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  marca: { type: String, default: "" },
  descricao: { type: String, required: true },
  img_url: {
    type: String,
    default:
      "https://lojadior.vtexassets.com/arquivos/ids/196292/3348901639989_02-highlight-jador-parfum-deau.jpg?v=638596672715670000",
  }, // Adicionar uma imagem padrão
});
</script>

<template>
  <div class="perfume">
    <div class="inicial">
      <img :src="`${BASE_URL}` + img_url" alt="" class="hero" />
      <div class="info">
        <div class="marca">{{ marca }}</div>
        <div class="nome">{{ nome }}</div>
        <div class="valor">
          {{
            valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
      </div>
    </div>
    <div class="descricao">
      <h3>Descrição</h3>
      {{ descricao }}
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
}
.perfume {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.perfume .hero {
  width: 500px;
  height: 500px;
}
.perfume .inicial {
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.perfume .inicial .info {
  box-shadow: 0 0 5px;
  border-radius: 5px;
  padding: 50px;
}
.perfume .inicial .info .marca {
  font-family: "Gothic A1", sans-serif;
  font-weight: 600;
  font-style: normal;
}
.perfume .inicial .info .nome {
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.perfume .inicial .info .valor {
  font-family: "Gothic A1", sans-serif;
  font-weight: 300;
  font-style: normal;
  margin-top: 30px;
}
.perfume .descricao {
  font-family: "Gothic A1", sans-serif;
  font-weight: 200;
  font-style: normal;
  width: 80%;
  text-align: justify;
  box-shadow: 0 0 5px;
  border-radius: 5px;
  padding: 10px;
}
</style>

