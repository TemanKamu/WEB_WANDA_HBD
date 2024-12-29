<template>
    <div class="bg-[#FDDFE1]" style="width: 100%; height: 120vh;">
        <div class="absolute w-full h-full z-0">
            <div class="w-full h-full flex justify-around">
                <div class="bg-white border border-black w-[160px]" style="height: 120vh;"></div>
                <div class="bg-white border border-black w-[160px]" style="height: 120vh;"></div>
                <div class="bg-white border border-black w-[160px] z-10 text-7xl text-center" style="height: 120vh;">
                    <div class="mt-52"  data-aos="fade-down">                 
                        <div class="koulen-regular mb-8" >
                            Q
                        </div>
                        <div class="koulen-regular mb-8">
                            U
                        </div>
                        <div class="koulen-regular mb-8">
                            I
                        </div>
                        <div class="koulen-regular mb-8">
                            Z
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white border border-black w-full h-[160px] absolute top-10" ></div>
            <div class="bg-white border border-black w-full h-[160px] absolute bottom-14" ></div>
        </div>
        <div class="w-full h-full relative flex z-10 scale-[0.9]" >
            <div class="bg-white w-[53%] h-[800px] border-[15px] border-[#FF45C8] rounded-xl ml-[100px] mt-[20px] p-10 regular-box-shadow"  data-aos="fade-right">
                <div id="screen">
                    <div class="h-[400px] bg-black border-[30px] border-[#FC9EE0] rounded-xl p-5 regular-box-shadow">
                        <div class="justify-center bg-white h-full iceland-regular">
                            <div class="flex flex-col items-center justify-center w-full h-full" v-if="onRestart === true">
                                <span class="text-4xl text-center">DO YOU WANNA RESTART GAME ??</span>
                                <div class="flex justify-center gap-5 w-[250px] text-3xl">
                                    <span class="underline" ref="yesRestart">YES</span>
                                    <span ref="noRestart">NO</span>
                                </div>
                            </div>
                            <div v-else class="w-full h-full">
                                <div class="flex items-center justify-center w-full h-full" v-if="page === 0">
                                    <span class="text-5xl">CLICK START !!!</span>
                                </div>
                                <div v-else-if="page === 1" class="p-2">
                                    <p class="text-5xl ml-3">TUTORIAL:</p>
                                    <ol class="list-decimal ml-14">
                                        <li class="text-2xl">klik analog untuk memilih jawaban</li>
                                        <li class="text-2xl">Untuk pindah soal, klik kanan atau kiri dua kali</li>
                                        <li class="text-2xl">klik analog yang ada di kiri untuk memilih jawaban </li>
                                        <li class="text-2xl">klik tombol yang ada di kanan untuk memilih jawaban yang sudah dipilih </li>
                                        <li class="text-2xl">Pilih Tombol "NEXT" Untuk lanjut ke soal selanjutnya</li>
                                    </ol>
                                    <!-- <p class="text-center text-2xl">NEXT >></p> -->
                                </div>
                                <div class="flex flex-col items-center justify-center w-full h-full" v-else-if="page === 2">
                                    <span class="text-7xl">READY ?</span>
                                    <div class="flex justify-center gap-5 w-[250px] text-3xl">
                                        <span class="underline" ref="yes">YES</span>
                                        <span ref="no">NO</span>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 3">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <p class="text-3xl">1. Apa Makanan Kesukaan Upi ?</p>
                                        <div class="text-xl  mt-auto">
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === 3).score }} </span>
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                        </div>
                                    </div>
                                    <div class=" flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-md w-[50%]" ref="jwbnA" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Ayam Asam Manis</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-md w-[50%]" ref="jwbnB" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Telur Pontianak</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-md w-[50%]" ref="jwbnC" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Ayam Bakar</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-md w-[50%]" ref="jwbnD" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Mie indommie Goreng</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-md w-[50%]" ref="jwbnE" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Telur Rebus</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-md w-[50%]" ref="jwbnF" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Gorengan</button>
                                        </div>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-10px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                               
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 4">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Apa hewan yang paling tidak upi sukai ?</span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                
                                        </div>
                                    </div>
                                    <div class=" flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnA" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Biawak</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnB" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Ular</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnC"style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Lalat</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnD"style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Sapi</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnE" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Nyamuk</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnF" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Semut</button>
                                        </div>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 5">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Apa Hobi Upi ?</span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                        </div>
                                    </div>
                                    <div class=" flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnA" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Gym</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnB" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Ngoding</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnC"style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Main Game</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnD"style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Nonton Film</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnE" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Belajar</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnF" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">Tidur</button>
                                        </div>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 6" ref="formQuestion">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Apa Kunci dari hubungan baik dan penuh Kasih sayang ? </span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <form class="h-full w-full">
                                            <textarea :disabled="statusFinish" class="w-full h-full border border-black p-2 text-xl resize-none" placeholder="Jawaban Wanda ..." ref="jwbnInput" v-model="formAnswer" autofocus></textarea>
                                        </form>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 7">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Berapa Lama Kita PDKT ?</span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                        </div>
                                    </div>
                                    <div class=" flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnA" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">3 Jam 23 Menit</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnB" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">3 Jam 30 Menit</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnC"style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">5 Jam 1 Menit</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnD"style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">4 Jam 30 Menit</button>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnE" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">1 Hari 3 Jam</button>
                                            <button class="bg-[#FF53DA] text-white p-2 rounded-lg text-lg w-[50%]" ref="jwbnF" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">1 Hari</button>
                                        </div>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 8" ref="formQuestion">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Hal Kecil Apa yang upi lakukan yang selalu bikin wanda spesial? </span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <form class="h-full w-full">
                                            <textarea :disabled="statusFinish" class="w-full h-full border border-black p-2 text-xl resize-none" placeholder="Jawaban Wanda ..." ref="jwbnInput" v-model="formAnswer" autofocus></textarea>
                                        </form>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 9" ref="formQuestion">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Apa mimpi atau tujuan yang ingin wanda capai bersama upi di masa depan? </span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <form class="h-full w-full">
                                            <textarea :disabled="statusFinish" class="w-full h-full border border-black p-2 text-xl resize-none" placeholder="Jawaban Wanda ..." ref="jwbnInput" v-model="formAnswer" autofocus></textarea>
                                        </form>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 10" ref="formQuestion">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Apa hal paling lucu atau aneh yang pernah kita lakukan bersama, tapi tetap membuatmu bahagia? </span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <form class="h-full w-full">
                                            <textarea :disabled="statusFinish" class="w-full h-full border border-black p-2 text-xl resize-none" placeholder="Jawaban Wanda ..." ref="jwbnInput" v-model="formAnswer" autofocus></textarea>
                                        </form>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 11" ref="formQuestion">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Menurut wanda, apa sifat terbaikku yang membuat hubungan kita lebih kuat? </span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <form class="h-full w-full">
                                            <textarea :disabled="statusFinish" class="w-full h-full border border-black p-2 text-xl resize-none" placeholder="Jawaban Wanda ..." ref="jwbnInput" v-model="formAnswer" autofocus></textarea>
                                        </form>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">NEXT</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex items-start w-full h-full p-1.5" v-else-if="page === 12" ref="formQuestion">
                                    <div class="flex flex-col border border-black bg-white rounded-lg p-3 w-[260px] h-full">
                                        <span class="text-3xl">{{ this.page - 2 }}. Apa hal yang paling kamu syukuri dari hubungan kita? </span>
                                        <div class="text-xl mt-auto">
                                            <span class="text-red-500" v-if="notAnswer === true">* Answer the question !</span>
                                            <span class="text-green-400" v-if="statusReport === true">Jumlah Nilai : {{ dataAnswerReport.find(item => item.page === this.page).score }} </span>

                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-4 gap-y-6 ml-3 w-[380px] h-full mt-3">
                                        <form class="h-full w-full">
                                            <textarea :disabled="statusFinish" class="w-full h-full border border-black p-2 text-xl resize-none" placeholder="Jawaban Wanda ..." ref="jwbnInput" v-model="formAnswer" autofocus></textarea>
                                        </form>
                                        <button class="bg-[#FF00C8] text-white mt-[-5px] rounded-lg h-[35px] text-2xl" ref="submitBtn" style=" box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);">FINISH</button>
                                        <p class="text-center text-3xl mt-[-15px]">{{ this.page - 2 }}/10</p>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center justify-center w-full h-full" v-else-if="page === 13 && statusReport === false">
                                    <span class="text-4xl">DO YOU REALLY WANNA FINSIH QUIZ ?</span>
                                    <div class="flex justify-center gap-5 w-[250px] text-3xl">
                                        <span class="underline" ref="back">BACK</span>
                                        <span ref="yesFinish">YES</span>
                                    </div>
                                </div>
                                <div class="text-5xl w-full h-full p-10" v-else-if="page === 14">
                                    <p class="text-center">TOTAL SCORE</p>
                                    <p class="text-center"><span class="text-green-400">{{ score }}</span>/100</p>
                                    <div class="p-2 bg-[#FC9EE0] text-3xl text-white w-fit rounded-md border border-black mx-auto mt-16" ref="report">
                                        <span>REPORT QUESTION</span>
                                    </div>
                                </div>
                                <div class="text-3xl" v-else>s</div>
                            </div>
                        </div>
                    </div>
                    <div id="buttonsBelowScreen">
                        <div class="flex justify-center gap-5 mt-3">
                            <button class="bg-[#FF23BD] text-white p-2 w-[100px] rounded-lg koulen-regular text-xl horizontal-box-shadow" @click="start" ref="startBtn">START</button>
                            <button class="bg-[#FD73D4] text-white p-2 w-[100px] rounded-lg koulen-regular text-xl horizontal-box-shadow" @click="restart" ref="restartBtn">RESTART</button>
                        </div>
                    </div>
                </div>
                <div id="controller" class="flex justify-between items-center mt-3">
                    <div id="analog" class="inline-flex flex-col items-center gap-0 p-0 analog-shadow scale-100">
                        <div id="upArrow" ref="upArrow" @click="handleClickTop" class="bg-[#FC9EE0] p-3 pb-5 rounded-t-lg">
                            <div class="triangle-mine bg-[#FD73D4] w-7 h-8"></div>
                        </div>
                        <div class="flex gap-0 p-0 m-0">
                            <div id="leftArrow" ref="leftArrow" @dblclick="previousPage" @click = "handleClickLeft" class="bg-[#FC9EE0] p-3 pb-5 rounded-t-lg rotate-[-90deg] mt-[-12px] mr-[3px] z-10">
                                <div class="triangle-mine bg-[#FD73D4] w-7 h-8"></div>
                            </div>
                            <div id="middleButton" class="bg-[#FC9EE0] p-3 w-[52px] h-[56px] mt-[-1px]">
                                <div class="circle-mine bg-[#FD73D4] w-7 h-7 p-1">
                                    <div class="circle-mine bg-[#FF5CCE] w-5 h-5"></div>
                                </div>
                            </div>
                            <div id="rightArrow" ref="rightArrow"@dblclick="nextPage" @click = "handleClickRight" class="bg-[#FC9EE0] p-3 pb-5 rounded-t-lg rotate-90 mt-[-12px] ml-[3px] z-10">
                                <div class="triangle-mine bg-[#FD73D4] w-7 h-8"></div>
                            </div>
                        </div>
                        <div id="bottomArrow" ref="bottomArrow"@click="handleClickBottom" class="bg-[#FC9EE0] p-3 pb-5 rounded-t-lg rotate-180 mt-[-10px]">
                            <div class="triangle-mine bg-[#FD73D4] w-7 h-8" ></div>
                        </div>
                    </div>
                    <div ref="clicker" class="scale-[2] mr-12 circle-shadow" @click="handleClicker">
                        <div class="circle-mine bg-[#FD73D4] w-13 h-12 p-3">
                            <div class="circle-mine bg-[#EE19AF] w-6 h-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                page: 0,
                onRestart: false,
                statusRestart: true,
                statusReady: true,
                rowAnswer: 1,
                realRowAnswer: 1,
                positionButton: "jwbnA",
                answer: "",
                dataAnswer: [],
                notAnswer: false,
                formQuestion: false,
                formAnswer: "",
                statusFinish: false,
                score: 0,
                statusReport: false,
                dataAnswerReport: [],
            }
        },
        methods: {
            nextPage() {
              if(this.page < 3 && this.page !== 2){
                 this.page = this.page + 1
              }
              if(this.page >= 3){
                console.log(this.notAnswer)
                if(this.answer !== "" && this.formQuestion === false){
                    let data = this.dataAnswer.filter((item) => {
                        return item.page === this.page
                    })
                    if(data.length > 0){
                        this.dataAnswer = this.dataAnswer.filter((item) => {
                            return item.page !== this.page
                        })
                    }
                    this.dataAnswer.push({
                        page: this.page,
                        rowAnswer: this.realRowAnswer,
                        answer: this.answer,
                        positionButton: this.answer ,
                        score: 0,
                    })
                    console.log(this.dataAnswer)
                    this.positionButton = "jwbnA"
                    this.rowAnswer = 1
                    this.answer = ""
                    this.notAnswer = false
                    this.page = this.page + 1
                }else if(this.formAnswer !== "" && this.formQuestion === true){
                    if(this.formAnswer === ""){
                            this.notAnswer = true
                        }else{
                            let data = this.dataAnswer.filter((item) => {
                                return item.page === this.page
                            })
                            if(data.length > 0){
                                this.dataAnswer = this.dataAnswer.filter((item) => {
                                    return item.page !== this.page
                                })
                            }
                            this.dataAnswer.push({
                                page: this.page,
                                formAnswer: this.formAnswer,
                                formQuestion: true,
                                score: 10
                            })
                            console.log(this.dataAnswer)
                            this.page = this.page + 1
                            this.notAnswer = false
                            this.positionButton = "jwbnA"
                            this.rowAnswer = 1
                            this.formAnswer = ""
                            this.formQuestion = false
                        }
                }else{
                    this.notAnswer = true
                }
              }             
            },
            previousPage() {
                if(this.page - 1 !== -1 && this.page - 1 !== 2 && this.page !== 14){
                    this.page = this.page - 1
                }
            },
            start(){
                this.$refs.startBtn.classList.add('scale-[1.2]')
                setTimeout(() => {
                    this.$refs.startBtn.classList.remove('scale-[1.2]')
                }, 100)
                if(this.page >= 3){
                    this.onRestart = true
                }else{
                    this.page = 1
                }
            },
            restart() {
                if(this.page !== 13){
                    this.$refs.restartBtn.classList.add('scale-[1.2]')
                    setTimeout(() => {
                        this.$refs.restartBtn.classList.remove('scale-[1.2]')
                    }, 100)
                     this.onRestart = true
                }
            },
            handleClicker(){
                this.$refs.clicker.classList.add('scale-[2.5]')
                setTimeout(() => {
                    this.$refs.clicker.classList.remove('scale-[2.5]')
                }, 100);
            
                if (this.page >= 2 && this.page < 13){
                    if(this.page === 2 && this.onRestart === false && this.formQuestion === false){
                        if(this.statusReady === true ){
                            this.page = 3
                        }else if (this.statusReady === false && this.onRestart === false){
                            this.page = 0
                            this.statusReady = true
                        }
                    }else if(this.page >= 3 && this.onRestart === false && this.formQuestion === false && this.page !== 13){
                        // this.answer = this.positionButton
                        if(this.answer === "jwbnA" || this.answer === "jwbnB" || this.answer === "jwbnC" || this.answer === "jwbnD" || this.answer === "jwbnE" || this.answer === "jwbnF"){
                            this.$refs.jwbnA.classList.remove('brightness-[0.8]')
                            this.$refs.jwbnB.classList.remove('brightness-[0.8]')
                            this.$refs.jwbnC.classList.remove('brightness-[0.8]')
                            this.$refs.jwbnD.classList.remove('brightness-[0.8]')
                            this.$refs.jwbnE.classList.remove('brightness-[0.8]')
                            this.$refs.jwbnF.classList.remove('brightness-[0.8]')
                        }
                        if(this.positionButton === "jwbnA"){
                            this.$refs.jwbnA.classList.add('brightness-[0.8]')
                             this.answer = "jwbnA"
                             this.realRowAnswer = 1
                        }else if(this.positionButton === "jwbnB"){
                            this.$refs.jwbnB.classList.add('brightness-[0.8]')
                            this.answer = "jwbnB"
                            this.realRowAnswer = 1
                        }else if(this.positionButton === "jwbnC"){
                            this.$refs.jwbnC.classList.add('brightness-[0.8]')
                            this.realRowAnswer = 2
                            this.answer = "jwbnC"
                        }else if(this.positionButton === "jwbnD"){
                            this.$refs.jwbnD.classList.add('brightness-[0.8]')
                            this.answer = "jwbnD"
                            this.realRowAnswer = 2
                        }else if(this.positionButton === "jwbnE"){
                            this.$refs.jwbnE.classList.add('brightness-[0.8]')
                            this.answer = "jwbnE"
                            this.realRowAnswer = 3
                        }else if(this.positionButton === "jwbnF"){
                            this.$refs.jwbnF.classList.add('brightness-[0.8]')
                            this.answer = "jwbnF"
                            this.realRowAnswer = 3
                        }else if(this.positionButton === "submitBtn"){
                            if(this.answer === ""){
                                this.notAnswer = true
                            }else{
                                let data = this.dataAnswer.filter((item) => {
                                    return item.page === this.page
                                })
                                if(data.length > 0){
                                    this.dataAnswer = this.dataAnswer.filter((item) => {
                                        return item.page !== this.page
                                    })
                                }
                                this.dataAnswer.push({
                                    page: this.page,
                                    rowAnswer: this.realRowAnswer,
                                    answer: this.answer,
                                    positionButton: this.answer,
                                    score: 0,
                                })
                                // console.log(this.dataAnswer)
                                this.positionButton = "jwbnA"
                                this.rowAnswer = 1
                                this.answer = ""
                                this.notAnswer = false
                                this.page = this.page + 1
                            }
                                                 
                        }
                    }else if(this.page >= 3 && this.onRestart === false && this.formQuestion === true && this.page !== 13){
                        if(this.formAnswer === ""){
                            this.notAnswer = true
                        }else{
                            let data = this.dataAnswer.filter((item) => {
                                return item.page === this.page
                            })
                            if(data.length > 0){
                                this.dataAnswer = this.dataAnswer.filter((item) => {
                                    return item.page !== this.page
                                })
                            }
                            this.dataAnswer.push({
                                page: this.page,
                                formAnswer: this.formAnswer,
                                formQuestion: true,
                                score: 10,
                            })
                            console.log(this.dataAnswer)
                            this.page = this.page + 1
                            this.notAnswer = false
                            this.positionButton = "jwbnA"
                            this.rowAnswer = 1
                            this.formAnswer = ""
                            this.formQuestion = false
                        }
                    }else if(this.statusRestart === true && this.page !== 1){
                        this.page = 0,
                        this.onRestart = false,
                        this.statusRestart = true,
                        this.statusReady = true,
                        this.rowAnswer = 1,
                        this.realRowAnswer = 1,
                        this.positionButton = "jwbnA",
                        this.answer = "",
                        this.dataAnswer = [],
                        this.notAnswer = false
                        this.formQuestion = false
                        this.formAnswer = ""
                        this.score = 0
                        this.statusFinish = false
                        this.dataAnswerReport = []
                        this.statusReport = false
                        console.log(true)
                    }else if(this.statusRestart === false && this.page !== 1){
                        this.statusRestart = true
                        this.onRestart = false
                        console.log(false)
                    }
                }else if(this.page === 13 && this.onRestart === false){
                    if(this.statusFinish === false){
                        this.page = this.page - 1
                        console.log("user back to previous page")
                    }else{
                        this.countResult();
                        this.page = 14
                        console.log("user go to finish")

                    }
                }else if(this.statusReport === true){
                    this.page = 3
                    console.log("User check report")
                }
               
            },
            handleClickRight() {
                this.$refs.rightArrow.classList.add('scale-[1.2]')
                setTimeout(() => {
                    this.$refs.rightArrow.classList.remove('scale-[1.2]')
                }, 100)
                if(this.page === 2 && this.onRestart === false && this.formQuestion === false && this.page !== 13 && this.page !== 14 && this.statusReport === false){
                    this.$refs.yes.classList.remove('underline') 
                    this.$refs.no.classList.add('underline')
                    this.statusReady = false
                }else if(this.onRestart === true){
                    this.$refs.noRestart.classList.add('underline')
                    this.$refs.yesRestart.classList.remove('underline')
                    this.statusRestart = false
                    console.log("Right: ",this.statusRestart)
                  
                }else if(this.page >= 3 && this.onRestart === false && this.formQuestion === false && this.page !== 13 && this.page !== 14 && this.statusReport === false){   
                    if(this.positionButton !== "submitBtn"){
                        if(this.rowAnswer ===    1){
                            if(this.answer !== "jwbnA"){
                                this.$refs.jwbnA.classList.remove('brightness-[0.8]')
                            }
                            this.$refs.jwbnB.classList.add('brightness-[0.8]')
                            this.positionButton = "jwbnB"
                        }else if(this.rowAnswer === 2){
                            if(this.answer !== "jwbnC"){
                                this.$refs.jwbnC.classList.remove('brightness-[0.8]')
                            }
                            this.$refs.jwbnD.classList.add('brightness-[0.8]')
                            this.positionButton = "jwbnD"
                        }else if (this.rowAnswer === 3){
                            if(this.answer !== "jwbnE"){
                                this.$refs.jwbnE.classList.remove('brightness-[0.8]')
                            }
                            this.$refs.jwbnF.classList.add('brightness-[0.8]')
                            this.positionButton = "jwbnF"
                        }  
                    }
                }else if(this.page === 13 && this.onRestart === false ){
                    this.$refs.yesFinish.classList.add('underline') 
                    this.$refs.back.classList.remove('underline')
                    this.statusFinish = true   
                    console.log(this.statusFinish)

                }
            },
            handleClickLeft() {
                this.$refs.leftArrow.classList.add('scale-[1.2]')
                setTimeout(() => {
                    this.$refs.leftArrow.classList.remove('scale-[1.2]')
                }, 100)
                if(this.page === 2 && this.onRestart === false){
                    this.$refs.yes.classList.add('underline')
                    this.$refs.no.classList.remove('underline') 
                    this.statusReady = true
                }else if(this.onRestart === true){
                    this.$refs.noRestart.classList.remove('underline')
                    this.$refs.yesRestart.classList.add('underline')
                    this.statusRestart = true
                    console.log("Left: ",this.statusRestart)
                }else if(this.page >= 3 && this.onRestart === false && this.formQuestion === false && this.page !== 13 && this.page !== 14 && this.statusReport === false){
                    if(this.positionButton !== "submitBtn"){
                        if(this.rowAnswer === 1){
                            if(this.answer !== "jwbnB"){
                                this.$refs.jwbnB.classList.remove('brightness-[0.8]')
                            }
                            this.$refs.jwbnA.classList.add('brightness-[0.8]')
                            this.positionButton = "jwbnA"
                        }else if(this.rowAnswer === 2){
                            if(this.answer !== "jwbnD"){
                                this.$refs.jwbnD.classList.remove('brightness-[0.8]')
                            }
                            this.$refs.jwbnC.classList.add('brightness-[0.8]')
                            this.positionButton = "jwbnC"
                        }else if (this.rowAnswer === 3){
                            if(this.answer !== "jwbnF"){
                                this.$refs.jwbnF.classList.remove('brightness-[0.8]')
                            }
                            this.$refs.jwbnE.classList.add('brightness-[0.8]')
                            this.positionButton = "jwbnE"
                        }
                    }
                }else if(this.page === 13 && this.onRestart === false){
                    this.$refs.yesFinish.classList.remove('underline') 
                    this.$refs.back.classList.add('underline')
                    this.statusFinish = false   
                }
            },
            handleClickTop(){
                this.$refs.upArrow.classList.add('scale-[1.2]')
                setTimeout(() => {
                    this.$refs.upArrow.classList.remove('scale-[1.2]')
                }, 100)
                if(this.page >= 3 && this.formQuestion === false && this.statusFinish === false && this.statusReport === false){
                    console.log(this.rowAnswer)
                    if(this.rowAnswer > 1){
                        this.rowAnswer = this.rowAnswer - 1
                    }
                    if(this.positionButton === "jwbnE"){
                        if(this.answer !== "jwbnE"){
                            this.$refs.jwbnE.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnC.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnC"
                    }else if(this.positionButton === "jwbnF"){
                        if(this.answer !== "jwbnF"){
                            this.$refs.jwbnF.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnD.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnD"
                    }else if(this.positionButton === "jwbnC"){
                        if(this.answer !== "jwbnC"){
                            this.$refs.jwbnC.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnA.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnA"
                    }else if(this.positionButton === "jwbnD"){
                        if(this.answer !== "jwbnD"){
                            this.$refs.jwbnD.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnB.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnB"
                    }else if(this.positionButton === "submitBtn"){
                        this.$refs.submitBtn.classList.remove('brightness-[0.8]')
                        this.$refs.jwbnE.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnE"
                        this.rowAnswer = 3;
                    }
                }else if(this.page >= 3 && this.formQuestion === true && this.statusFinish === false && this.statusReport === false){
                    this.$refs.jwbnInput.focus()
                    this.$refs.submitBtn.classList.remove('brightness-[0.8]')
                    this.positionButton = "jwbnA"
                }
            },
            handleClickBottom(){
                this.$refs.bottomArrow.classList.add('scale-[1.2]')
                setTimeout(() => {
                    this.$refs.bottomArrow.classList.remove('scale-[1.2]')
                }, 100)
                if(this.page >= 3 && this.formQuestion === false && this.page !== 14 && this.statusReport === false){
                    console.log(this.rowAnswer)
                    if(this.rowAnswer < 3){
                        this.rowAnswer = this.rowAnswer + 1
                    }
                    if(this.positionButton === "jwbnA"){
                        if(this.answer !== "jwbnA"){
                            this.$refs.jwbnA.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnC.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnC"
                    } else if(this.positionButton === "jwbnB"){
                        if(this.answer !== "jwbnB"){
                            this.$refs.jwbnB.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnD.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnD"
                    } else if(this.positionButton === "jwbnC"){
                        if(this.answer !== "jwbnC"){
                            this.$refs.jwbnC.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnE.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnE"
                    } else if(this.positionButton === "jwbnD"){
                        if(this.answer !== "jwbnD"){
                            this.$refs.jwbnD.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.jwbnF.classList.add('brightness-[0.8]')
                        this.positionButton = "jwbnF"
                    }else if(this.positionButton === "jwbnE"){
                        if(this.answer !== "jwbnE"){
                            this.$refs.jwbnE.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.submitBtn.classList.add('brightness-[0.8]')
                        this.positionButton = "submitBtn"
                    }else if( this.positionButton === "jwbnF"){
                        if(this.answer !== "jwbnF"){
                            this.$refs.jwbnF.classList.remove('brightness-[0.8]')
                        }
                        this.$refs.submitBtn.classList.add('brightness-[0.8]')
                        this.positionButton = "submitBtn"
                    }
                }else if(this.page >= 3 && this.formQuestion === true && this.page !== 14 && this.statusReport === false){
                    if(this.$refs.formQuestion.classList.contains('focus')){
                        this.$refs.formQuestion.classList.remove('focus')
                    }
                    this.$refs.submitBtn.classList.add('brightness-[0.8]')
                    this.positionButton = "submitBtn"
                }else if(this.page === 14){
                    this.$refs.report.classList.add('brightness-[0.8]')
                    this.statusReport = true
                }
            },
            countResult(){
                let data = []
                for(let i = 0; i < this.dataAnswer.length; i++){
                    if (this.dataAnswer[i].page === 3){
                        if(this.dataAnswer[i].answer === "jwbnB"){
                            this.score = this.score + 10
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 10
                            })
                        }else{
                            this.score = this.score + 8.75
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 8.75
                            })
                        }
                        console.log("Score Pilihann ganda 1:", this.score)
                    }else if(this.dataAnswer[i].page === 4){
                        if(this.dataAnswer[i].answer === "jwbnE"){
                            this.score = this.score + 10
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 10
                            })
                        }else{
                            this.score = this.score + 8.75
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 8.75
                            })
                        }
                        console.log("Score Pilihann ganda 2:", this.score)
                    }else if(this.dataAnswer[i].page === 5){
                        if (this.dataAnswer[i].answer === "jwbnB"){
                            this.score = this.score + 10
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 10
                            })
                        }else{
                            this.score = this.score + 8.75
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 8.75
                            })
                        }
                    }else if(this.dataAnswer[i].page === 7){
                        if(this.dataAnswer[i].answer === "jwbnA"){
                            this.score = this.score + 10
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 10
                            })
                        }else{
                            this.score = this.score + 8.75
                            data.push({
                                page: this.dataAnswer[i].page,
                                answer: this.dataAnswer[i].answer,
                                score: 8.75
                            })  
                        }
                    }else{
                        this.score = this.score + 10
                        data.push({
                            page: this.dataAnswer[i].page,
                            answer: this.dataAnswer[i].answer,
                            score: 10
                        })
                    }
                }
                this.dataAnswerReport = data
                this.statusReport = true

            }
        },
        watch: {
            page(newPage) {
                if(this.page === 13  && this.statusFinish === true){
                    this.page = 14
                }
                this.$nextTick(() => {
                    if(this.$refs.formQuestion){
                        console.log("Form Sudah muncul")
                        this.formQuestion = true
                    }else{
                        console.log("Form Belum muncul")   
                        this.formQuestion = false 
                    }
                })
                if(this.page === 13){
                    this.pageList = this.dataAnswer.map(item => item.page - 2)
                }else{
                    let data = this.dataAnswer.filter((item) => {
                            if(item.page === newPage){
                                return item
                            }
                        })
                    if(data.length > 0){
                        if(data[0].formQuestion === true){
                            this.formAnswer = data[0].formAnswer
                            this.formQuestion = true
                            this.notAnswer = false
                            
                        }else{
                            this.answer = data[0].answer
                            this.positionButton = data[0].answer
                            this.rowAnswer = data[0].rowAnswer
                            this.notAnswer = false
                            console.log(data[0])
                            // console.log(this.notAnswer)
                            this.$nextTick(() => {
                                if (this.$refs[data[0].answer]) {
                                    if(this.answer !== ""){
                                        this.$refs[data[0].answer].classList.add('brightness-[0.8]');
                                    }else{
                                        this.$refs[data[0].answer].classList.remove('brightness-[0.8]');
                                    }
                                }
                            });
                        }
                    }
                }
            }
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Iceland&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
    
    .koulen-regular {
        font-family: "Koulen", serif;
        font-weight: 400;
        font-style: normal;
    }
    .iceland-regular {
        font-family: "Iceland", serif;
        font-weight: 400;
        font-style: normal;
    }

    .koulen-regular {
        font-family: "Koulen", serif;
        font-weight: 400;
        font-style: normal;
    }
    .horizontal-box-shadow{
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2); 

    }
    .regular-box-shadow{
        box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.2); 
    }
    .triangle-mine{
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    .circle-mine{
        border-radius: 50%;
    }
    .analog-shadow {
        display: inline-flex;
        width: fit-content;
        height: fit-content;
        filter: drop-shadow(4px 4px 1px  rgba(0, 0, 0, 0.2));
    }
    .circle-shadow {
        display: inline-flex;
        width: fit-content;
        height: fit-content;
        filter: drop-shadow(3px 2px 1px  rgba(0, 0, 0, 0.3));
    }
    .shadow-button-answer{
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.4);
    }
</style>