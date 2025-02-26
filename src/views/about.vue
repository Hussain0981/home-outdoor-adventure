<template>
    <section class="bg-gray-100">
        <div>
            <heroSection :data="data" />
        </div>
        <!-- End of hero sectioin -->
         <div class="grid md:grid-cols-2 md:px-10  py-10 md:py-14 items-center">
            <div class="flex flex-col gap-y-7 px-4 py-2 md:px-20 md:py-6">
                <h2>Our MissioN</h2>
                <span class="h-1 bg-[#FB2056] w-[70px] rounded-none"></span>
                <p class="mt-1 md:mt-0">Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.</p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div class="md:px-12 md:py-12 py-7 px-3">
                <img style="box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, 0.3);" class="rounded-md" src="../components/photos/outdoor-image-02-768x513.jpg"  alt="">
            </div>
         </div>

         <div class="grid md:grid-cols-2  md:px-10 justify-center items-top">
            <div class="flex flex-col gap-y-3 md:gap-y-7 md:px-20 md:py-6 px-4">
                <h4>Extraordinary Experiences</h4>
                <span class="h-[2px] bg-[#FB2056] w-[70px] rounded-full"></span>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.</p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div class="flex flex-col gap-y-3 md:gap-y-7 px-4 mt-6 md:mt-0 md:px-20 py-6">
                <h4>Our Core Values</h4>
                <span class="h-[2px] bg-[#FB2056] w-[70px] rounded-full"></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.    </p>
                <ul class="mt-5 md:mt-0">
                    <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class="text-[14px] font-medium text-black">Locavit liberioris possedit</p></li>
                    <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class="text-[14px] font-medium text-black">Diremit mundi mare undae</p></li>
                    <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class="text-[14px] font-medium text-black">Spectent tonitrua mutastis</p></li>
                </ul>
            </div>
         </div>
    </section>
  </template>
  
  <script setup>
  import heroSection from '@/components/hero-section.vue';
  
  const data = {
    backgroundImage: new URL('@/components/photos/servece-hero.jpg', import.meta.url).href,
    mainText: 'Who we Are?'
  };
  </script>

  
  