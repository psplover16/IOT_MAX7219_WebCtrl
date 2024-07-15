<template>
登入
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from "../store";
defineProps({
    msg: String,
})
const count = ref(0)
const { usescreenWidth } = useStore();
</script>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>