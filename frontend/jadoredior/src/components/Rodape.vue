<script setup>

</script>

<template>
    <div class="rodape">
        <div class="servico-cliente">
            <h4>Serviço ao cliente</h4>
            <a href="">Contato</a>
            <a href="">Entrega e Devoluções</a>
            <a href="">FAQ</a>
        </div>
        <div class="a-maison-dior">
            <h4>A Maison Dior</h4>
            <a href="">Termos e condições legais</a>
            <a href="">Politica de privacidade</a>
            <a href="">Preferencias de cookies</a>
        </div>
        <div class="siga-nos">
            <h4>Siga-nos</h4>
            <a href="">Instragram</a>
            <a href="">Facebook</a>
            <a href="">X</a>
        </div>
    </div>
</template>

<style scoped>
.rodape {
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    font-family: "Gothic A1", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.rodape .servico-cliente {
    display: flex;
    flex-direction: column;
    color: white;
}
.rodape .servico-cliente a {
    text-decoration: none;
    color: white;
}
.rodape .servico-cliente a:hover {
    border-bottom: solid white 1px;
}
.rodape .a-maison-dior {
    display: flex;
    flex-direction: column;
    color: white;
}
.rodape .a-maison-dior a {
    text-decoration: none;
    color: white;
}
.rodape .a-maison-dior a:hover {
    border-bottom: solid white 1px;
}
.rodape .siga-nos {
    display: flex;
    flex-direction: column;
    color: white;
}
.rodape .siga-nos a {
    text-decoration: none;
    color: white; 
}
.rodape .siga-nos a:hover {
    border-bottom: solid white 1px;
}
</style>