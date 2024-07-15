<template>
{{ usescreenWidth().min640.toString() }}
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)


import { useStore } from "../store";
const { usescreenWidth } = useStore();
// usescreenWidth().min640 >>>>> 直接讀值與操作



</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
