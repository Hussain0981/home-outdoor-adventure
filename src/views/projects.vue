<template>
    <section class="bg-gray-100">
        <div>
            <heroSection :data="data" />
        </div>
        <!-- end of hero section -->

        <div class="w-[85%] mx-auto py-20">
            <div class="flex gap-x-4 items-center">
                <h3 class="text-[14px] font-montserrat font-extrabold">Adventur</h3>
                <span class="h-1 bg-[#FB2056] w-[100px] rounded-md -mt-1"></span>
            </div>
            <div>
                <h2 class="py-2 mt-3">Water Sports</h2>
                <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
            </div>
            <div id="swiper" class="py-8 ">
                <swiper-container slides-per-view="3" :breakpoints="{
                    400: {
                        slidesPerView: 1.5,
                    },
                    600: {slidesPerView: 2},

                    1024: {
                        slidesPerView: 3,
                    },
                }"  spaceBetween="20" loop="true" pagenation pagination-clickable="true">
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/water-sports-02.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/water-sports-03.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/water-sports-04.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/water-sports-01.jpg"
                            alt="">
                    </swiper-slide>
                </swiper-container>
            </div>


            <!-- second swiper -->
            <div class="flex gap-x-4 items-center mt-20">
                <h3 class="text-[14px] font-montserrat font-extrabold">Snow Adventure</h3>
                <span class="h-1 bg-[#FB2056] w-[100px] rounded-md -mt-1"></span>
            </div>
            <div>
                <h2 class="py-2 mt-3">Winter Sports</h2>
                <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
            </div>
            <div id="swiper" class="py-8 ">
                <swiper-container slides-per-view="3" :breakpoints="{
                    400: {
                        slidesPerView: 1.5,
                    },
                    600: {slidesPerView: 2},

                    1024: {
                        slidesPerView: 3,
                    },
                }"  spaceBetween="20" loop="true" pagenation pagination-clickable="true">
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-01-nzqdakvd9y6ql3cjzkfjdcrr6o5msw2mv8o8ug2dqw.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-02-nzqdabgzdltvczq7igd9of558tfynx1bhy5e1ogbh4.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-03-nzqd8khsnpfnr49oq759jd19g02dc73axafuw51p20.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/winter-sports-04-nzqd8b3erd2sj0nc932zufeni5cp781zjzx03dfms8.jpg"
                            alt="">
                    </swiper-slide>
                </swiper-container>
            </div>



            <!-- 3rd swiper -->
            <div class="flex gap-x-4 items-center mt-20">
                <h3 class="text-[14px] font-montserrat font-extrabold">Forest Tours</h3>
                <span class="h-1 bg-[#FB2056] w-[100px] rounded-md -mt-1"></span>
            </div>
            <div>
                <h2 class="py-2 mt-3">Camping</h2>
                <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
            </div>
            <div id="swiper" class="py-8 ">
                <swiper-container slides-per-view="3" :breakpoints="{
                    400: {
                        slidesPerView: 1.5,
                    },
                    600: {slidesPerView: 2},

                    1024: {
                        slidesPerView: 3,
                    },
                }"  spaceBetween="20" loop="true" pagenation pagination-clickable="true">
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/camp-1-nzqd81p0v0pxax0zrz0q5hs1kan1290o6pe5altkig.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/camp-2-nzqd7cbdqhr6lg1uw61ss66liw44af7x37s1c4v76g.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/camp-3-nzqd6qp3daxl6ex9eepdotmzv12oddu3c8rvarr95k.jpg"
                            alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img style="border-radius: 5px;"
                            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/elementor/thumbs/camp-4-nzqd6hapgykpybawxan3zw0dx6d08esryy90i056vs.jpg"
                            alt="">
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    </section>
</template>
<script setup>
import heroSection from '@/components/hero-section.vue';
import { register } from 'swiper/element/bundle';
register();
const data = {
    backgroundImage: new URL('@/components/photos/projects.jpg', import.meta.url).href,
    mainText: 'Projects'
}   
</script>