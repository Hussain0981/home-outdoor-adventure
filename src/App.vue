<script setup>
import {  RouterView } from 'vue-router'
import navigation from './components/navigation.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <navigation />
  <RouterView />
  <Footer />
</template>
