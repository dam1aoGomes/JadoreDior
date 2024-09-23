<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="sobre">
    <h3>Sobre</h3>
    <p>
        Site desitinado apenas ao aprendizado, desenvolvido por dois estudantes
        da Universidade Federal do Ceará.
        Para mais informações, acesse: <a href="https://github.com/dam1aoGomes/JadoreDior">GitHub</a>
    </p>
</div>
</template>

<style scoped>
.sobre {
    height: 90vh;
    width: 100%;
    font-family: "Gothic A1", sans-serif;
    font-style: normal;
}
.sobre h3{
    font-weight: 500;
    margin-left: 10%;
    margin-top: 5%;
}
.sobre p {
    text-align: justify;
    margin-left: 10%;
    margin-top: 20px;
    width: 60%;
}
.sobre p a {
    padding: 5px;
    background-color: black;
    border-radius: 5px;
    color: white;
    text-decoration: none;
}
</style>