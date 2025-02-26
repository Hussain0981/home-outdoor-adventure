<template>
    <section class="bg-gray-100">
        <div>
            <heroSection :data = 'data' />
        </div>
        <!-- end hero section -->

        <div>
            <div class="flex flex-col justify-center items-center gap-y-4  py-10 md:py-20 w-[90%] md:w-[50%] mx-auto">
                <h2 class="text-[24px] ">It's Time to Start Your Adventures</h2>
                <span class="h-[3px] bg-[#FB2056] w-[100px] rounded-md"></span>
                <p class="text-center">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ullamcorpe pulvinar.</p>
            </div>
        </div> 
        <section class="md:w-[80%] w-full px-4 md:px-0  mx-auto">
            <div>
                <div class="grid md:grid-cols-2 gap-x-20 gap-y-10">
                    <div class="flex flex-col items-center justify-center gap-y-3 p-2">
                        <img class="rounded-md" style="box-shadow: 10px 10px 1px 1px rgba(0, 0, 0, 0.2);" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-03.jpg" alt="">
                        <h4 class="pt-6">Backpacking Trips</h4>
                        <p class="text-center px-2">Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-y-3 p-2">
                        <img class="rounded-md" style="box-shadow: 10px 10px 1px 1px rgba(0, 0, 0, 0.2);" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/services-2.jpg" alt="">
                        <h4 class="pt-6">Family Hiking Trips</h4>
                        <p class="text-center px-2">Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-y-3 p-2">
                        <img class="rounded-md" style="box-shadow: 10px 10px 1px 1px rgba(0, 0, 0, 0.2);" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/services-3.jpg" alt="">
                        <h4 class="pt-6">Water Sports</h4>
                        <p class="text-center px-2">Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    </div>
                    <div class="flex flex-col items-center justify-center gap-y-3 p-2">
                        <img class="rounded-md" style="box-shadow: 10px 10px 1px 1px rgba(0, 0, 0, 0.2);" src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2021/02/outdoor-image-01.jpg" alt="">
                        <h4 class="pt-6">Winter Sports</h4>
                        <p class="text-center px-2">Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    </div>
                </div>
            </div>
            <!-- end cards design -->

            <div>
                <div class="grid md:grid-cols-2 py-10 px-1 md:px-0 md:py-28 gap-x-10 font-robo">
                    <div class="flex flex-col gap-y-5">
                        <h4 class="md:text-[24px] text-[20px]">Why Outdoor Adventure</h4>
                        <span class="h-[2px] bg-[#FB2056] w-[70px] rounded-md"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <ul class="pt-8 md:mt-0">
                            <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class=" font-medium text-black">Experience: Locavit liberioris possedit</p></li>
                            <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class=" font-medium text-black">Reputation: Diremit mundi mare undae</p></li>
                            <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class=" font-medium text-black"> Guide Experience: Spectent tonitrua mutastis</p></li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-y-5 mt-10 md:mt-0">
                        <h4 class="md:text-[24px] text-[20px]">What You Get</h4>
                        <span class="h-[2px] bg-[#FB2056] w-[70px] rounded-md"></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <ul class="pt-8 md:mt-0">
                            <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class=" font-medium text-black"> Private Hike: Locavit liberioris possedit</p></li>
                            <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class=" font-medium text-black"> Transportation: Diremit mundi mare undae</p></li>
                            <li class="flex gap-x-2 py-1"><span><i class="fa-solid fa-arrow-right text-[#FB2056]"></i></span><p class=" font-medium text-black"> Great Facilities: Spectent tonitrua mutastis</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script setup>
import heroSection from '@/components/hero-section.vue';
const data = {
    backgroundImage : new URL('@/components/photos/service-image.jpg', import.meta.url).href,
    mainText : 'Services'
}
</script>
