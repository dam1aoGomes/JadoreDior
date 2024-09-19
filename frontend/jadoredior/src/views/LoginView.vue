<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <form action="">
        <input type="email" name="" id="" placeholder="email">
        <br>
        <input type="password" name="" id="" placeholder="senha">
    </form>

    Não tem uma conta?
    <RouterLink to="/cadastro"> Cadastre-se </RouterLink>
</template>