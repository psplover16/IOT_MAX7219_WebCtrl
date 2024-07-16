<template>
    <div class="max7219">
        <div class="max7219View">
            <func :penMode="penMode" @getNoticeWord="getNoticeWord"></func>
        </div>
        <div class="btnGroup">
            <button @click="sendNoticeWord">send</button>
            <button @click="penMode = penMode == 1 ? 0 : 1">{{ penMode == 1 ? 'pen' : 'eraser' }}</button>
            <button @click="$router.push('/')">back</button>
        </div>
    </div>

</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import func from '@/components/func.vue';

const router = useRouter();
defineProps({
    msg: String,
})

const penMode = ref(1); // 1是筆 0是橡皮擦
const noticeWord = ref();
const getNoticeWord = (data) => {
    noticeWord.value = data;
}

const arrayChange = () => {
    const arr = noticeWord.value;
    const arrVal = [];

    arrVal[0] = arr[15];
    arrVal[1] = arr[14];
    arrVal[2] = arr[13];
    arrVal[3] = arr[12];
    arrVal[4] = arr[7];
    arrVal[5] = arr[6];
    arrVal[6] = arr[5];
    arrVal[7] = arr[4];
    arrVal[8] = arr[11];
    arrVal[9] = arr[10];
    arrVal[10] = arr[9];
    arrVal[11] = arr[8];
    arrVal[12] = arr[3];
    arrVal[13] = arr[2];
    arrVal[14] = arr[1];
    arrVal[15] = arr[0];
    return arrVal;
}
const arrToWord = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result += arrToWord(arr[i]);
        } else {
            result += arr[i];
        }
    }
    return result;
}
const sendNoticeWord = () => {
    console.log(noticeWord.value)
    console.log(arrayChange());
    console.log(arrToWord(arrayChange()));
    router.push('/');
}


</script>

<style scoped>
@media screen and (orientation: landscape) {
    .max7219View {
        aspect-ratio: 4 / 1;
        margin-top: calc((100vh - 25vw)/2);
    }
}

@media screen and (orientation: portrait) {
    .max7219View {
        aspect-ratio: 1/4;
    }
}

.max7219 {
    position: relative;
    height: 100%;
}

.max7219View {
    max-width: 100vw;
    max-height: calc(100vh - 30px);
    background-color: red;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-wrap: wrap;
}

.btnGroup {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}
</style>