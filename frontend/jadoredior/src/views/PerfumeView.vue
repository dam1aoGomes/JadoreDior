<script setup>
const {id} = defineProps({
    id : {
        type: String,
        required: true,
    }
})

console.log(id)
</script>

<template>
    {{ id }}    
</template>