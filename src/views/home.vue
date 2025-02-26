<template>
  <div>
    <section class="relative h-auto md:h-full w-full">
      <div
        class="hero-section bg-[url('../components/photos/home-image.jpg')] h-[70vh] md:h-screen  w-full bg-cove bg-center bg-no-repeat">
      </div>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div id="text"
        class="absolute inset-0 items-center justify-center h-auto md:h-screen w-full text-white flex flex-col gap-y-5">
        <span id="main-text" class="text-[20px] md:text-[24px] font-bold">Explore the Colourful World</span>
        <span id="design" class="h-0.5 w-[70px] bg-[#FB2056] rounded-lg"></span>
        <h1>A Wonderful Gift</h1>
        <div id="btn">
          <button class="mt-12">learn more</button>
        </div>
      </div>
    </section>
    <!-- hero section end -->

    <section class="bg-slate-100 py-10">
      <section class="relative flex items-center justify-center flex-col-reverse" >
        <div class="w-full md:w-[70%]  mx-auto text-center py-8 px-4">
          <p class="text-xl "> 
            "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."
          </p>
          <p class=" py-2">
            - Adam Sendler
          </p>
        </div>
        <div>
          <img class="md:absolute top-8 left-28 w-[100px] h-auto"
            src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2018/11/quote-1.png" alt="">
        </div>
      </section>

      <!-- upcoming events -->
      <section>
        <div class="flex flex-col gap-4 items-center w-full md:mt-20 mt-4  py-2 " 
>
          <h2 class="px-2">Upcoming Events</h2>
          <span class="h-0.5 w-[100px] bg-[#FB2056] rounded-md"></span>
        </div>
        <div class="md:grid grid-cols-2 w-full md:w-[80%] px-4 mx-auto gap-x-20 py-16">
          <div class="flex flex-col gap-4 items-center justify-center text-center pb-10 md:pb-0">
            <img class="rounded-md mb-6" style="box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, 0.1);"
              src="../components/photos/hiking-v1.jpg" alt="">
            <h4>Everest Camp Trek</h4>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
            <button><i class="fa-solid fa-arrow-right text-white mr-2"></i>Learn More</button>
          </div>
          <div class="flex flex-col gap-4 items-center justify-center text-center">
            <img class="rounded-md mb-6" style="box-shadow: 10px 10px 2px 1px rgba(0, 0, 0, 0.1);"
              src="../components/photos/walking-v1.jpg" alt="">
            <h4>Everest Camp Trek</h4>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
            <button><i class="fa-solid fa-arrow-right text-white mr-2"></i>Learn More</button>
          </div>
        </div>
      </section>

      <!-- full images -->
      <section class="mt-10">
        <div
          class="relative h-[70vh] md:h-screen w-full bg-cover bg-center object-fit bg-fixed bg-[url('../components/photos/hero-image.jpg')]">
          <div class="bg-black absolute opacity-70 inset-0"></div>

          <!-- text on image (overly) -->
          <div class="absolute inset-0 grid md:grid-cols-2 h-full w-full px-4 py-4" >
            <div class="h-full w-full"></div>
            <div class="h-full w-full flex flex-col gap-4 md:gap-8 z-20 justify-center pr-10">
              <h2 class="text-white">Explore The World</h2>
              <span class="h-0.5 w-[100px] bg-[#FB2056] rounded-md"></span>
              <p class="text-white">Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. Fert his.
                Recessit mentes praecipites locum caligine sui egens erat. Silvas caeli regna.</p>
              <button><i class="fa-solid fa-arrow-right text-white mr-2"></i>Learn More</button>
            </div>
          </div>
        </div>
      </section>


      <!-- last Footer section -->
      <section>
        <div class="md:grid grid-cols-[40%_30%_30%] px-4 md:px-0 md:w-[80%] mx-auto py-20 gap-4">
          <div class="flex flex-col gap-6 pr-10 pb-10 md:pb-0">
            <h2>Upcoming Tours & Destination</h2>
            <span class="h-0.5 w-[70px] bg-[#FB2056] rounded-md"></span>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut
              nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit
              sublime flexi nullus.</p>
            <button><i class="fa-solid fa-arrow-right text-white mr-2"></i>Learn More</button>
          </div>
          <div class="flex flex-col gap-4 mb-4 md:mb-0" >
              <img class="rounded-md" src="../components/photos/outdoor-image-01.jpg" alt=""
              
              >
              <img class="rounded-md" src="../components/photos/image-1.jpg" alt=""
              
              >
          </div>
          <div class="flex flex-col gap-4">
              <img class="rounded-md" src="../components/photos/snow-1.jpg" alt=""
              
              >
              <img class="rounded-md" src="../components/photos/outdoor-image-04.jpg" alt=""
              
              >
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
@media screen and (max-width: 500px) {
  #text h1 {
    font-size: 30px;
  }

  #main-text {
    font-size: 20px;
  }
}
</style>