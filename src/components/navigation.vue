<template>
  <div class="relative">
    <!-- Main Navigation -->
    <div
      :class="['flex justify-between items-center px-4 md:px-10 py-3 md:py-4 bg-opacity-80 md:fixed w-full z-50 text-white font-medium text-sm', 
       currentScroll ? 'bg-black' : 'bg-transparent']">
      <!-- Logo -->
      <div id="logo">
        <RouterLink to="/">
          <img class="w-[150px] h-[42px] hidden md:block" src="../components/photos/white-logo-150x42.png" alt="">
          <img class="md:hidden" src="../components/photos/logo-120x34.png" alt="">
        </RouterLink>
      </div>

      <!-- Navigation Links -->
      <div id="nav" class="flex items-center space-x-10">
        <nav>
          <ul :class="[
            'md:flex flex-col md:flex-row md:space-x-8 font-noto md:text-white md:bg-transparent md:-translate-x-0 text-black bg-white md:w-auto w-full md:py-0 absolute md:relative top-[58px] md:top-0 left-0 z-10 transition-all duration-200 ',
            isShow ? 'translate-x-0' : '-translate-x-full'
          ]">
            <RouterLink @click="isShow = false"
              class="font-medium block py-[10px] hover:text-red-500  md:hover:text-gray-300 transition-all border-b-[1px] md:border-0 w-full md:w-auto pl-4 md:pl-0 duration-150"
              to="/"> Home </RouterLink>
            <RouterLink @click="isShow = false"
              class="font-medium block py-[10px] hover:text-red-500  md:hover:text-gray-300 transition-all border-b-[1px] md:border-0 w-full md:w-auto pl-4 md:pl-0 duration-150"
              to="/about"> About </RouterLink>
            <RouterLink @click="isShow = false"
              class="font-medium block py-[10px] hover:text-red-500  md:hover:text-gray-300 transition-all border-b-[1px] md:border-0 w-full md:w-auto pl-4 md:pl-0 duration-150"
              to="/services"> Services </RouterLink>
            <RouterLink @click="isShow = false"
              class="font-medium block py-[10px] hover:text-red-500  md:hover:text-gray-300 transition-all border-b-[1px] md:border-0 w-full md:w-auto pl-4 md:pl-0 duration-150"
              to="/projects"> Projects </RouterLink>
            <RouterLink @click="isShow = false"
              class="font-medium block py-[8px] hover:text-red-500  md:hover:text-gray-300 transition-all md:border-0 w-full md:w-auto pl-4 md:pl-0 duration-150"
              to="/contactUs"> Contact </RouterLink>
          </ul>
        </nav>


        <!-- Mobile Menu Button -->
        <div
          class="menu-btn bg-[#FB2056] w-[42px] h-[35px] rounded-md text-xl md:hidden cursor-pointer flex items-center justify-center"
          @click="toggleMenu">
          <i :class="isShow ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </div>

        <!-- Action Button (Visible only on Desktop) -->
        <div id="btn" class="hidden md:block">
          <button>Take Action</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isShow = ref(false)

function toggleMenu() {
  isShow.value = !isShow.value

}

const currentScroll = ref(false);

const handleScroll = () => {
  currentScroll.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>
<style scoped>
.router-link-active {
  border-bottom: 1px solid red;
}
</style>