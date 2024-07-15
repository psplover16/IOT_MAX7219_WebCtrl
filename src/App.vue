<template>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <router-view></router-view>
  <button @click="pubData('max7219-mqtt1', '要傳送的訊息')">發送mqtt</button>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from "vue";
import { connectMQTT, pubData } from "@/utils/mqttt.js";



// const pubData = () => {
//   const topic = 'max7219-mqtt1';
//   mqttClient.value.publish(topic, "要傳送的訊息");
// }

const a = (za) => {
  console.log(za);
}
onMounted(async () => {
  const data = await connectMQTT(a);
  // console.log(message.toString());
});
</script>








<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
