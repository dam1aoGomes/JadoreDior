<script setup>
import Cabecalho from './Cabecalho.vue';

const { id, nome, valor, marca, img_url } = defineProps({
  id : {type: Number, required: true},
  nome : { type: String, required: true },
  valor: { type: Number, required: true },
  marca: { type: String, default: "" },
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
      <img src="" alt="">
      <div class="info">
        
    nome do perfume: {{ nome }}
    valor: {{ valor }}
    marca: {{ marca }}
    img_url: {{ img_url }}
      </div>
    </div>
    <div class="descricao"></div>
  </div>
</template>

<style>
  .perfume {
    max-width: 100vw;
    height: 100vh;
    border: solid black 1px;
  }
</style>