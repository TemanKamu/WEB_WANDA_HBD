<template>
    <div class="relative overflow-hidden bg-[#FDDFE1]" style="height: 110vh;">
        <div id="leaves">
            <div class="absolute bottom-[-120px] left-[-90px] rotate-[45deg]" style="width: 400px;">
                <img 
                    src="/assets/main_content/assets/leaves.png" 
                    alt="Leaves" 
                    class="" 
                >
            </div>
            <div class="absolute bottom-[13px] left-[-110px] rotate-[56deg]" style="width: 400px;">
                <img 
                    src="/assets/main_content/assets/leaves.png" 
                    alt="Leaves" 
                    class="" 
                >
            </div>
            <div class="absolute bottom-[-80px] left-[70px] rotate-[30deg]" style="width: 400px;">
                <img 
                    src="/assets/main_content/assets/leaves.png" 
                    alt="Leaves" 
                    class="" 
                >
            </div>
        </div>
        <div id="flowersAndBranch">
            <div class="absolute top-[-50px] left-[-50px] z-10">
                <img class="w-60" src="/assets/main_content/assets/single-flower.png" alt="">
            </div>
            <div class="absolute top-[35px] left-[-60px] rotate-[-18deg]">
                <img class="w-90" src="/assets/main_content/assets/flower-branch.png" alt="">
            </div>
        </div>
        <div id="manyFlowers">
            <div class="absolute right-[-50px] top-[-230px] rotate-[90deg]">
                <img src="/assets/main_content/assets/many-flower.png" alt="" width="450px">
            </div>
            <div class="absolute right-[-220px] top-[-130px] rotate-[95deg]">
                <img src="/assets/main_content/assets/many-flower.png" alt="" width="450px">
            </div>
        </div>
        <div id="manyBallons">
            <div class="absolute right-[-80px] bottom-[-100px]">
                <img src="/assets/main_content/assets/many-ballons.png" width="400px" alt="">
            </div>
        </div>
        <div id="content" class="relative z-10 mt-[-15px]">
            <div id="imgAndText" class="ml-[120px]">
                <div data-aos="fade-right">
                    <div class="relative z-0">     
                        <img class="border-white border-8 rotate-90 h-48 w-48 object-cover ml-[60px] mt-[50px]"
                         src="/assets/main_content/wanda_photo/pic2.jpg" alt=""
                         style="box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6); backdrop-filter: blur(0px);"> 
                    </div>
                    <div class="relative z-10">
                        <img class="border-white border-8 h-64 w-64 object-cover ml-[120px] mt-[-50px] z-0"
                         src="/assets/main_content/wanda_photo/pic_rect.jpg" alt=""
                         style="box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6); backdrop-filter: blur(0px);"> 
                    </div>
                    <div class="relative z-0" >
                        <img class="border-white border-8 w-96 h-48 object-cover ml-[263px] mt-[-370px] z-0"
                         src="/assets/main_content/wanda_photo/pic_land.jpg" alt="" 
                         style="box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6); backdrop-filter: blur(0px);"> 
                    </div>
                </div>
                <div class="relative z-0 left-[390px] top-[15px]" data-aos="fade-left">  
                    <div >
                        <header class="junge-regular text-6xl w-80 leading-tight p-3 rounded-t-xl" style="background-color: rgba(255, 255, 255); color: #5C4E5A; box-shadow: 5px 0 0 0 rgba(0, 0, 0, 0.2);">
                            <p>Happy Birthday !</p>
                        </header>
                    </div>
                    <div >
                        <div class="junge-regular text-2xl leading-tight p-3.5 rounded-b-xl rounded-tr-xl w-[40%] mt-[-10px]" style="background-color: rgba(255, 255, 255); box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.2)">
                            <span>Selamat ulang tahun yang ke-17 tahun sayangku! Wahhh gak kerasa udah gede bocilkuu, semoga wanda panjang umur, ditambahkan rezeki, jadi anak yang berbakti ke orangtua dan jadi anak yang solehah !</span>
                            <br>
                            <div class="bg-[#FF8AE6] text-white p-3 mt-2 w-32 rounded-2xl border-white border-2 shadow-xl hover:bg-[#ff76e1]">
                                <RouterLink to="/hbd#secondContent" class="font-bold inria-serif-regular ">Explore !</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute 2xl:right-[284px] xl:right-[284px] top-0 text-white" data-aos="fade-left">
                <span class="koho-regular" style="font-size: 320px;">17</span>
                <span class="koho-regular" style="font-size: 100px;">y.o</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
    .koho-extralight {
    font-family: "KoHo", sans-serif;
    font-weight: 200;
    font-style: normal;
    }

    .koho-light {
    font-family: "KoHo", sans-serif;
    font-weight: 300;
    font-style: normal;
    }

    .koho-regular {
    font-family: "KoHo", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    }

    .koho-medium {
    font-family: "KoHo", sans-serif;
    font-weight: 500;
    font-style: normal;
    }

    .koho-semibold {
    font-family: "KoHo", sans-serif;
    font-weight: 600;
    font-style: normal;
    }

    .koho-bold {
    font-family: "KoHo", sans-serif;
    font-weight: 700;
    font-style: normal;
    }

    .koho-extralight-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 200;
    font-style: italic;
    }

    .koho-light-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 300;
    font-style: italic;
    }

    .koho-regular-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 400;
    font-style: italic;
    }

    .koho-medium-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 500;
    font-style: italic;
    }

    .koho-semibold-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 600;
    font-style: italic;
    }

    .koho-bold-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 700;
    font-style: italic;
    }
    .junge-regular {
    font-family: "Junge", serif;
    font-weight: 400;
    font-style: normal;
    }
    .inria-serif-regular {
    font-family: "Inria Serif", serif;
    font-weight: 400;
    font-style: normal;
    }
</style>