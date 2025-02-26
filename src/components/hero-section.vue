<template>
    <section>
        <div class="relative h-full w-full">
            <div class="md:h-[92vh] w-full h-[40vh] bg-cover bg-center" :style="{ backgroundImage: `url(${data.backgroundImage})` }">
            </div>
            <div class="absolute bg-black opacity-50 inset-0"></div>
            <div class="absolute top-0 left-0 text-white flex items-center justify-center h-full w-full"><h1>{{ data.mainText }}</h1></div>
        </div>
        
    </section>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    data: {
        type: Object
    }
})

</script>