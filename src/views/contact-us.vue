<template>
    <section class="bg-gray-100">
        <div>

            <heroSection :data="myData" />
        </div>
        <!-- end of hero section -->

        <div class="md:w-[85%] px-4 md:px-0 mx-auto grid md:grid-cols-2 py-10 items-start gap-x-10">
            <div class="flex flex-col gap-6 md:p-3">
                <h2 class="py-5">We're Ready, Let's Talk.</h2>
                <input
                    class="w-full border border-gray-300 px-4 py-3 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-100 ease-in-out"
                    type="text" placeholder="Your Name" />

                <input type="email" name="" id="" placeholder="Your Email"
                    class="w-full border border-gray-300 px-4 py-3 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-100 ease-in-out">
                <textarea name="" id="" placeholder="Messege"
                    class="w-full border border-gray-300 px-4 py-3 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-100 ease-in-out"></textarea>
                <button>Send messege</button>
            </div>
            <div class="flex flex-col gap-y-4 p-3 mt-7 md:mt-0">
                <h2 class="py-3">Contact Info</h2>
                <div>
                    <h4>Address</h4>
                    <p> Shaheed coloney Dhakki P/O Dhakki tehsil Tangi Distric Charsadda</p>
                </div>
                <div>
                    <h4>Email Us</h4>
                    <p>khasty936@gmail.com</p>
                </div>
                <div>
                    <h4>Call NO</h4>
                    <p>+92-3441921091</p>
                </div>
                <h4>Follow Us</h4>
                <div class="flex gap-x-3">
                    <span class="bg-[#FB2056] hover:bg-[#942642] transition-all duration-100 w-8 h-8 rounded-full text-white relative"><i class="fa-brands fa-youtube absolute flex items-center justify-center h-full w-full text-xl"></i></span>
                    <span class="bg-[#FB2056] hover:bg-[#942642] transition-all duration-100 w-8 h-8 rounded-full text-white relative"><i class="fa-brands fa-facebook absolute flex items-center justify-center h-full w-full text-xl"></i></span>
                    <span class="bg-[#FB2056] hover:bg-[#942642] transition-all duration-100 w-8 h-8 rounded-full text-white relative"><i class="fa-brands fa-twitter absolute flex items-center justify-center h-full w-full text-xl"></i></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import heroSection from '@/components/hero-section.vue';
const myData = {
    backgroundImage: new URL('@/components/photos/contact.jpg', import.meta.url).href,
    mainText: 'Contact Us'
}
</script>