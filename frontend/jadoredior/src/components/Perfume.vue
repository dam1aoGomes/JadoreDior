<script setup>

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
    nome do perfume: {{ nome }}
    valor: {{ valor }}
    marca: {{ marca }}
</template>