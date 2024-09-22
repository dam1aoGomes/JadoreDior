<template>
  <div class="comentario-card">
    <div class="comentario-author">{{ comentario.attributes.author }}</div>
    <div class="comentario-text">{{ comentario.attributes.comentario }}</div>
    <div class="comentario-date">
      {{ formatDate(comentario.attributes.createdAt) }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  comentario: {
    type: Object,
    required: true,
  },
});

function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
}
</script>

<style scoped>
.comentario-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.comentario-author {
  font-weight: bold;
  margin-bottom: 5px;
}

.comentario-text {
  margin-bottom: 5px;
}

.comentario-date {
  font-size: 0.9em;
  color: #666;
}
</style>
