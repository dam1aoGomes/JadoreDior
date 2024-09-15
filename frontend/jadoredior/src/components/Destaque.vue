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
    @import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    * {
        margin: 0;
    }
    .destaque {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .destaque img {
        width: 100%;
        height: 100%;
    }
    .destaque .info {
        display: flex;
    }
    .destaque .info p {
        font-family: "Playwrite CU", cursive;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        text-decoration: none;
        color: black;
    }
</style>