<script setup>
import { api } from '@/api';
import { onBeforeMount, ref } from 'vue';

import Perfume from '@/components/Perfume.vue';

const perfume_data = ref({})
const loading = ref(true);

const token = "93dc75f6865519605e82b9e7c299fdf7f2e411f4d1615008fce8f575d2278aa79f1e48eecde6d29dc87ce8814370ab324e7bc30379589b5bdbbc2e37f3aba3318a68126d3fa7f6ac3c1516046aaf1c66218fd2c4bb0049e4626b70f5915602d61052d345c3e98125212e11d7ed22ff13f8e98565cbecdc64f215174a8c13a097"

const {id} = defineProps({
    id : {
        type: String,
        required: true,
    }
});

onBeforeMount(async () => {
  try {
    const { data } = await api.get(`/perfumes/${id}`, {
      params: {
        populate: "cover",
      },
      headers: {
        Authorization: `Bearer ${token}`
    }
    });
    perfume_data.value = data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

</script>

<template>
    {{ id }}
    <br>
    <Perfume
    :id="perfume_data.id"
    :nome="perfume_data.attributes.nome"
    :valor="perfume_data.attributes.valor" 
    :marca="perfume_data.attributes.marca"/>
</template>