<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="destaque">
        <RouterLink to="/">
        <img src="https://lojadior.vteximg.com.br/arquivos/jdr-or-s-2-24-model-pack-5550-x-2000-1.jpg" alt="">
        </RouterLink>
        <div class="info">
            <p>Fragancia J'adore L'or</p>
        </div>   
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
.destaque {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.destaque img {
    max-width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
}
.destaque .info p {
    font-family: "Playwrite CU", cursive;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    text-decoration: none;
    color: black;
}
</style>