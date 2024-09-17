<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
<nav>
    <div id="home-link"><RouterLink to="/">j'adoreDior</RouterLink></div>
    <form action="">
        <input type="text" name="pesquisa-perfume" id="inp-perfume" placeholder="Encontre seu perfume">
    </form>
    <div id="minha-conta-link">
        <RouterLink to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            Minha Conta
        </RouterLink>
    </div>
    <div id="sobre-link"><RouterLink to="/about">Sobre</RouterLink></div>
</nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
nav {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    max-width: 100vw;
    height: 10vh;
    border-bottom: solid black 1px;
}
#home-link {
    font-family: "Playwrite CU", cursive;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}
#home-link a {
    text-decoration: none;
    color: black;
    padding-left: 15px;
    padding-right: 10px;
    padding-bottom: 10px;
}
#home-link a:hover {
    transition-duration: 500ms;
    background-color: black;
    color: white;
    border-radius: 5px;
}
#inp-perfume {
    padding: 10px;
    border-radius: 10px;
    border: solid black 1px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
#minha-conta-link {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 10px;
}
#minha-conta-link a {
    padding: 10px;
    color: black;
    text-decoration: none;
}
#minha-conta-link svg {
    margin-right: 5px;
}
#minha-conta-link a:hover {
    transition-duration: 100ms;
    border-bottom: solid black 1px;
}
#sobre-link {
    padding: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
}
#sobre-link a {
    text-decoration: none;
    color: black;
    padding: 10px;
}
#sobre-link a:hover {
    transition-duration: 100ms;     
    border-bottom: solid black 1px;
}
</style>