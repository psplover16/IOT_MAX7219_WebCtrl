<template>

    <table border="1" @touchstart="handlePointer(true)" @touchend="handlePointer(false)" @touchmove="handleTouchMove()"
        @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mousemove="handleMouseMove" v-for="j in tableNum">
        <tr v-for="rowk in row">
            <td v-for="colk in col" :data-col="colk" :data-row="rowk" :data-tableNum="j"
                :class="[noticeWord[j - 1]?.[rowk - 1]?.[colk - 1] ? 'bgred' : 'bgwhite']">
            </td>
        </tr>
    </table>
    <!-- <button @click="console.log(noticeWord)">確認</button> -->
    <!-- <button @click="penMode = penMode == 1 ? 0 : 1">{{ penMode == 1 ? 'pen' : 'eraser' }}</button> -->
</template>

<script setup>
import { ref, reactive, onMounted, defineEmits } from 'vue'
import { useStore } from "../store";
const props = defineProps({
    penMode: Number,
})
const count = ref(0)
const { usescreenWidth } = useStore();
// const penMode = ref(1); // 1是筆 0是橡皮擦

const tableNum = 16;
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

const canHover = ref(false);

const handlePointer = (v) => {
    canHover.value = v;
}

const changeWord = (num, row, col) => {
    if (!canHover.value) return;
    noticeWord.value[num][row][col] = props.penMode;
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
    const num = element.getAttribute("data-tableNum");
    if (col) {
        changeWord(num - 1, row - 1, col - 1);
    }
}
// 
const handleMouseMove = (event) => {
    // 获取鼠标坐标
    const x = event.clientX;
    const y = event.clientY;

    // 获取滑过的元素
    const element = document.elementFromPoint(x, y);

    // 处理滑过的元素
    const col = element.getAttribute("data-col");
    const row = element.getAttribute("data-row");
    const num = element.getAttribute("data-tableNum");
    if (col) {
        changeWord(num - 1, row - 1, col - 1);
    }
};

const handleMouseUp = () => {
    handlePointer(false);
};

const handleMouseDown = () => {
    handlePointer(true);
};
// 
//
const emit = defineEmits(['getNoticeWord']);
const getNoticeWord = () => {
    emit('getNoticeWord', noticeWord.value);
}

onMounted(() => {
    for (let i = 0; i < tableNum; i++) {
        noticeWord.value[i] = noticeWord.value[i] || [];
        for (let ri = 0; ri < row; ri++) {
            noticeWord.value[i][ri] = noticeWord.value[i][ri] || [];
            for (let ci = 0; ci < col; ci++) {
                noticeWord.value[i][ri][ci] = 0;
            }
        }
    }
    getNoticeWord();
})
</script>

<style scoped>
table {
    width: calc(100% / 8);
    height: 50%;
    background-color: blue;
    border: 1px solid black;
}

.read-the-docs {
    color: #888;
}

td {
    width: calc(100% / 8);
    height: calc(100% / 8);
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