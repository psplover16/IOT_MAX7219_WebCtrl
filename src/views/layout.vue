<template>
    <table border="0" class="table">
        <tr>
            <td><label for="checkbox">紅外線開關</label></td>
            <td><input type="checkbox" id="checkbox" v-model="infraredCtrl"></td>
        </tr>
        <tr>
            <td><label for="checkbox">馬達開關</label></td>
            <td><input type="checkbox" id="checkbox" v-model="motorCtrl"></td>
        </tr>
        <tr>
            <td>
                <hr>
            </td>
            <td>
                <button type="button" @click="pushMqtt">送出上述資料</button>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <router-link to="/max7219">更新max7219資料</router-link>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { ref } from 'vue'
import { pubData } from "@/utils/mqttt.js";
defineProps({
    msg: String,
})


const infraredCtrl = ref(false);
const motorCtrl = ref(false);

const pushMqtt = () => {
    pubData('max7219-setting', (infraredCtrl.value ? '1' : '0') + (motorCtrl.value ? '1' : '0'))
}

</script>

<style scoped>
.table {
    margin: 50px auto 0 auto;

    tr {
        td:nth-child(1) {
            label{
                margin-right: 20px;
            }
        }
    }
}
</style>