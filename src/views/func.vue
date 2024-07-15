<template>
    <table border="1" @touchstart="handlePointer(true)" @touchend="handlePointer(false)" @touchmove="handleTouchMove()">
        <tr v-for="rowk in row">
            <td v-for="colk in col" :data-col="colk" :data-row="rowk"
                :class="[noticeWord[rowk - 1]?.[colk - 1] ? 'bgred' : 'bgwhite']">
            </td>
        </tr>
    </table>
    <button @click="console.log(noticeWord)">確認</button>
    <button @click="penMode=penMode==1?0:1">{{ penMode==1?'pen':'eraser' }}</button>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from "../store";
defineProps({
    msg: String,
})
const count = ref(0)
const { usescreenWidth } = useStore();
const penMode = ref(1); // 1是筆 0是橡皮擦

const col = 8; // 有幾根直的
const row = 8; // 有幾根橫的


const noticeWord = ref(
    [
        // [1, 0, 0, 0, 0, 0, 0, 0],
        // [0, 1, 0, 0, 0, 0, 0, 0],
        // [0, 0, 0, 0, 0, 0, 0, 0],
        // [0, 0, 0, 0, 0, 0, 0, 0],
        // [0, 0, 0, 0, 0, 0, 0, 0],
        // [0, 0, 0, 0, 0, 0, 0, 0],
        // [0, 0, 0, 0, 0, 0, 0, 0],
        // [0, 0, 0, 0, 0, 0, 0, 0]
    ]
)

onMounted(() => {
    for (let ri = 0; ri < row; ri++) {
        noticeWord.value[ri] = noticeWord.value[ri] || [];
        for (let ci = 0; ci < col; ci++) {
            noticeWord.value[ri][ci] = 0;
        }
    }
})


const canHover = ref(false);

const handlePointer = (v) => {
    canHover.value = v;
}

const changeWord = (row, col) => {
    if (!canHover.value) return;    
    noticeWord.value[row][col] = penMode.value;
}

const handleTouchMove = () => {
    // 获取触摸点的坐标
    // console.log(event)
    const event = window.event;
    const touch = event.touches[0]
    const x = touch.clientX
    const y = touch.clientY

    // 获取滑过的元素
    const element = document.elementFromPoint(x, y)

    // 处理滑过的元素
    const col = element.getAttribute("data-col");
    const row = element.getAttribute("data-row");
    if (col) {
        changeWord(row - 1, col - 1);
    }
}

</script>

<style scoped>
.read-the-docs {
    color: #888;
}

td {
    width: 50px;
    height: 50px;
    text-align: center;
}

span {
    pointer-events: none;
    user-select: none;
}

.bgwhite {
    background-color: white;
}

.bgred {
    background-color: red;
}
</style>