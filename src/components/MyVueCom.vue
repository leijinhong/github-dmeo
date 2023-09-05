<template>
    <div>
        <div @click="handleClick">{{ title }}</div>
        <slot msg="hello Vue!"></slot>
    </div>
</template>

<script setup>
import { ref } from "vue";
const title = ref("我是vue文件");

const handleClick = () => {
    title.value += 1;
};
</script>
