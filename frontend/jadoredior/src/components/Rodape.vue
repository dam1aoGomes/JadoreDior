<script setup>

</script>

<template>
    <div class="rodape">
        <div class="servico-cliente">
            <h5>Serviço ao cliente</h5>
            <a href="">Contato</a>
            <a href="">Entrega e Devoluções</a>
            <a href="">FAQ</a>
        </div>
        <div class="a-maison-dior">
            <h5>A Maison Dior</h5>
            <a href="">Termos e condições legais</a>
            <a href="">Politica de privacidade</a>
            <a href="">Preferencias de cookies</a>
        </div>
        <div class="siga-nos">
            <h5>Siga-nos</h5>
            <a href="">Instragram</a>
            <a href="">Facebook</a>
            <a href="">X</a>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap');
a {
    text-decoration: none;
    color: white;
    margin: 5px;
}
.rodape {
    margin-top: 20px;
    background-color: black;
    min-height: 35vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Gothic A1", sans-serif;
    font-weight: 200;
    font-style: normal; 
}
.rodape .servico-cliente {
    display: flex;
    flex-direction: column;
    color: white;
    margin-right: 30px;
}
.rodape .a-maison-dior {
    display: flex;
    flex-direction: column;
    color: white;
}
.rodape .siga-nos {
    display: flex;
    flex-direction: column;
    color: white;
}
</style>