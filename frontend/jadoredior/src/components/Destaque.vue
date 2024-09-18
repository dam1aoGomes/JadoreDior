<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="destaque">
        <RouterLink to="/">
        <img class="hero" src="https://lojadior.vteximg.com.br/arquivos/jdr-or-s-2-24-model-pack-5550-x-2000-1.jpg" alt="">
        </RouterLink>
        <div class="info">
            <p>Fragancia J'adore L'or</p>
            <p id="descricao">
                Todo o ouro de J'adore em um concentrado puro e essencial. Para J'adore l'Or, Francis Kurkdjian, Diretor de Criação de Perfumes Dior, realça a beleza das flores de J'adore amplificando as suas nuances e acentuando as suas cores. Uma essência de perfume ampla e voluptuosa que reflete o diálogo entre as notas dos absolutos de flor de laranjeira, jasmim grandiflorum e rosa centifolia.
            </p>
        </div>   
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
    margin: 0;
    padding: 0;
}
.destaque {
    height: 90vh;
}
.destaque .hero {
    width: 100%;
}
.destaque .info {
    font-family: "Playwrite CU", cursive;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    text-align: center
}
#descricao {
    font-family: "Gothic A1", sans-serif;
    font-weight: 300;
    font-style: normal;
    text-align: justify;
    margin: 20px;
}
</style>