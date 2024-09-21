<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from "@/stores/user_store";
import PerfumeCard from './PerfumeCard.vue';

const userStore = useUserStore();

const props = defineProps({
  perfumes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
<div class="dashboard">
    <div class="bem-vindo">
        <h3> Olá {{ userStore.username() }}, aqui está suas ações como administrador. </h3>
    </div>
    <div class="acoes">
        <div class="cadastro-perfume">
            <RouterLink to="/cadastro-perfume"><Button>Cadastrar novo perfume</Button></RouterLink>
        </div>
        <div class="editar-deletar-perfume">
            <h4>Editar ou deletar perfume</h4>
            <div class="perfumes">
                <PerfumeCard
                    v-for="perfume in perfumes"
                    :id="perfume.id"
                    :nome="perfume.attributes.nome"
                    :valor="perfume.attributes.valor"
                    :marca="perfume.attributes.marca"
                    :img_url="perfume.attributes.cover.data.attributes.url"
                    :show-buttons="true"
                />
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.dashboard {
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
}
.dashboard .bem-vindo {
    margin-top: 10vh;
    margin-left: 10%;
}
.dashboard .bem-vindo h3 {
    font-weight: 350;
}
.dashboard .acoes{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5vh;
}
.dashboard .acoes button {
    color: white;
    background-color: black;
    border: solid white 1px;
    padding: 10px;
    margin-left: 10%;
    margin-bottom: 2vh;
}
.dashboard .acoes button:hover {
    transition-duration: 500ms;
    color: black;
    background-color: white;
    border: solid black 1px;
}
.dashboard .acoes .editar-deletar-perfume {
    height: 50vh;
}
.dashboard .acoes .editar-deletar-perfume h4{
    margin-left: 10%;
}
.dashboard .acoes .editar-deletar-perfume .perfumes {
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
}
</style>