<template>
    <div>
      <!-- Pilih salah satu class sesuai ketebalan yang diinginkan -->
      <div v-bind:class="diagonalClass" class="flex">
        <div id="img" class="flex flex-col" data-aos="fade-right">
          <div class="mt-[115px] ml-[130px]">
            <div class="flex">
              <div id="card-custom"  class="w-[200px] bg-white h-72 p-1 rotate-[-16deg] relative border border-black scale-[1.5]">
                <img class="w-full h-[200px] object-cover" src="/assets/main_content/wanda_photo/pic_rect.jpg" alt="">
              </div>
              <div id="card-custom" class="w-[200px] bg-white h-72 p-1 rotate-[16deg] relative left-[-20px] top-[10px] border border-black  scale-[1.5]">
                <img class="w-full h-[200px] object-cover" src="/assets/main_content/wanda_photo/pic2_horizontal.jpg">
              </div>
            </div>
            <div id="card-custom" class="w-[300px] bg-white p-1 h-52 border border-black relative left-[40px] top-[-10px] z-10 scale-[1.4]">
              <img class="w-full h-[200px] object-cover" src="/assets/main_content/wanda_photo/pic_land.jpg" alt="">
            </div>
          </div>
        </div>
        <div id="memoriesWithYou" data-aos="fade-left">
          <div class="card-custom bg-white border-[11px] border-black p-3 rounded-xl ml-[190px] mt-9" style="width: 700px; height: 600px">
            <div id="contentCard">
              <h1 class="junge-regular" style="font-size: 30px;">Memories With You</h1>
              <p class="junge-regular" style="height: 470px;">{{ textGroups[page] }}</p>
            </div>
            <div id="cardFooter" class="flex justify-between">
                <button @click="previousPage" class="border-2 border-black p-2 junge-regular rounded-xl text-center w-32 hover:bg-black transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 ..." v-if="page !== 0">Previous</button>
                <button @click="nextPage" class="border-2 border-black p-2 junge-regular rounded-xl text-center w-24  hover:bg-black transition ease-in-out delay-150 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 ..." v-if="page < textGroups.length - 1">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        diagonalClass: 'diagonal-thin', // Default class
        page: 0,
        textGroups: [ 
          "Halo Sayangku! Tidak terasa sekali wanda sudah berumur 17 Tahun ! Wanda sudah gede! Upi harap semoga wanda di umur ke-17 Tahun ini diberi rezeki yang melimpah, Kesehatan yang baik, dan cita-cita bisa tercapai, Amin! Dulu... Waktu kita pertama ketemu upi sebenarnya tidak ingin membuka hati untuk perempuan mana-pun karena Waktu itu upi percaya kalau ada perempuan yang mendekati upi berarti hanya ingin memanfaatkan upi, But... Wanda sangat berbeda! Sifat wanda menunjukan bahwa Wanita yang sedang mendekati upi ini adalah Wanita yang akan sangat mencintai dan menyayangi Upi! Wanda sangat setia! sehingga upi sampai membuka hati upi untuk wanda! Upi sangat Bahagia dengan wanda, Terimakasih telah menjadi bagian dari hidup upi wanda!, tanpa ada dirimu hidup upi akan selalu Monocron dan tertekan, wanda telah menyalamatkan upi dari kehidupan upi yang sangat menyakitkan, upi ingat dulu waktu wanda minta alamat upi waktu pertama kali, upi kira dede mau ngirim sesuatu gitu tapi pembayaran-nya COD, terus habistu pas sudah datang barangnya wanda kabur, HAHAHAH Sungguh aneh OVT Upi yang dulu, tapi ternyata wanda beneran ngasih upi sesuatu, Yaitu, Obat-obatan buat upi yang sedang sakit, Makasih sayang atas semua Effort-mu dan maaf upi dulu berprasangka buruk waktu pertama kita pacaran, setelah upi minum obat wanda, wanda bilang kalau wanda besok UAS Matematika, So Upi jadi guru dadakan HAHAHAHA, tiba-tiba banget dulu jadi guru dadakan, tapi dengan menjadi upi guru dadakan,",
          "etidaknya upi sedikit bisa membantu wanda memahami Pelajaran Matematika, Yakan dari pada wanda pusing sendiri belajar, mending upi temenin, habistu selesai UAS Wanda Berhasil melewati semuanya! Upi ngasih wanda sebuah hadiah, Yaitu Buku Novel AU dengan Judul 'Butterflies', wanda senang banget waktu itu upi kasih buku, sampe-sampe pagi,siang dan malam wanda keasikan baca buku, upi senang hadiah pemberian upi bisa membuat wanda senang! upi juga ingat waktu pertama kali upi bikin kue buat wanda, kue yang upi bikin waktu itu adalah brownies, upi pikir waktu bikin brownies bakal gagal soalnya baru pertama kali bikin kue, eh tau-nya pas sudah dimasak brownies-nya jadi sesuai harapan upi! dan rasanya pun luar biasa enak, upi pun kirim brownies-nya ke wanda, pas sudah sampe di wanda, upi kira cuman wanda aja yang makan brownies upi, EH TERNYATA MAMA WANDA IKUT MAKAN JUGA, Diluar perkiraan upi, upi takut banget browniesnya gak enak, Eh taunya alhamdulillah kata mama wanda enak aja HEHEHE, waktu sebelum upi ulang tahun, wanda sangat bekerja keras demi memberikan hadiah yang spesial buat upi, bikin surat-surat buat upi, bikin cookies,Baju,bunga,kotak obat, dan lain-lain. Banyak waktu,tenaga, dan uang yang wanda keluarkan buat memberikan hadiah untuk upi, Terimakasih sayang atas semua yang wanda kasih, upi sangat menghargainya, maaf telah bikin wanda kecapean apalagi saat menyiapkan hadiahnya",
          ", wanda sedang sakit🥺🥺, jadi tenaga yang wanda gunakan sangat banyak🥺🥺, upi membayangkan di posisi wanda aja sudah badmood, tapi... wanda meng-usahakan untuk memberikan hadiah buat upi, Makasih sayang hadiahnya dan maaf telah membuat wanda kecapean 🥺🥺💗💗. setelah beberapa bulan, upi bikin rencana mau pergi ke tempat wanda, soal-nya upi pengen banget ketemu wanda, awal-nya niat-nya waktu upi ulang tahun, upi ke tempat wanda, eh taunya ga diizinin, jadi upi pengen banget tempat wanda, upi pengen ngerasain satui, upi juga sangat pengen di manja-manjain wanda 🥺🥺, setelah satu bulan upi ulang tahun, upi pun minta izin lagi ke orang tua ke satui, AND UPI DIIZININNNN, Upi sangat bersyukur diizinin sama ortu, dan setelah itu pun upi bikin rencana sama halim buat ke satui, setelah semua rencana di buat, upi dan halim pun pergi ke satui mulai dari Jam 6 Pagi, dalam perjalanan ke satui banyak rintangan-rintangan yang upi lewati, seperti hampir ketabrak truk, debu yang banyak banget dan kesusahan dalam mencari makan, Tapi rintangan-rintangan itu tidak membuat upi menyerah ke satui, dan setelah ratusan kilometer dilewati, AKHIRNYA UPI SAMPAI DI SATUI, upi bersyukur banget bisa sampe disatui, akhirnya upi bisa melihat wanda secara langsung, setelah sudah sampai di satui upi langsung pergi ke pantai batu seperti yang sudah direncanakan, upi pun menikmati suasana pantai batu sambil menunggu wanda datang, waktu itu upi sedang main air lalu tiba-tiba halim ngomong 'Itu pacar kamu kah fi?'' lalu upi pun menoleh 'Dimana lim?'",
          "Setelah halim menunjuk ke arah wanda, upi pun seperti melihat bidadari yang baru turun dari surga, upi pun menghampiri wanda, upi bingung waktu itu mau ngapain karena malu dan salting, eh taunya wanda ngajak upi ke ayunan, jadi upi ikutin, di perjalanan menuju ayunan upi dengan pede menggenggam tangan wanda, rasanya seperti memegang dunia dan seisinya, dan kita pun sampai di ayunan, waktu duduk, wanda dengan tiba-tiba menyandarkan kepala wanda ke bahu upi, upi terkejut dan gugup, dalam hati 'ini gua harus nagapain anjir' wanda pun langsung ngomong kalo wanda bikin mau trend tiktok, hehe iya sih soalnya sebelum upi ke tempat wanda kita sudah bikin rencana bikin ini dan itu, dan sudah waktunya kita bikin! trend pertama upi harus meletakkan kepala upi ke paha wanda terus rambut upi dipasangin clip-clip rambut lucuuu, terus setelah itu kita bikin trend ke-dua yaitu trend pantai, kita pertama harus menggenggam tangan, lalu kita lari ke arah laut, and kita pun melakukannya, lucu banget kalo di ingat-ingat, setelah kita bikin trend kedua, kaki wanda kemasukan pasir, upi pun dengan inisiatif membersihkan kaki wanda, anda you know what ? KAKI WANDA MUNGIL AND LUCU BANGETTTTT PLISSSSSS, rasanya pengen lagi deh pegang kakinya, lucu bangett, setelah itu lanjut bikin trend selanjut yaitu upi harus memegang kamera lalu diarahkan ke-upi dengan timing lagu-nya yang sudah pas, wanda langsung memeluk upi, for first time upi dipeluk oleh orang paling upi cintai, rasanya semua masalah hidup menghilang begitu saja, setelah kita bikin",
          "trend, kita Kembali ke dataran sambil keliling-keliling pantai nyari tempat teduh, setelah itu kita duduk di sebuah pondok disana dan kita bikin trend lagi! yaitu trend cubit pipi pacar! HAHAAHHHAH Plis empuk banget pipi wanda rasanya pengen lagi deh cubit-cubit pipinya, setelah kita bikin trend itu kita Kembali ke tempat awal yaiu di parkiran, kita Waktu itu mau pergi ke RTH, Waktu di RTH Rasanya jadi teringat taman kamboja yang ada dibanjar, soalnya mirip, kita nyari tempat duduk lalu setelah itu you know what, Kita Bikin Trend lagi! Trend yang paling-paling upi suka yaitu trend cium pacar, HAHAHAH SETELAH BIKIN TREND RASANYA KAYA BARU CIUM HAL PALING EMPUK DI DUNIAAA, PENGEN LAGII!! Habis bikin trend itu kita pun kepanasan banget HAHAHAH Soalnya di RTH panas banget dan anehnya ada orang joggin disana, sangat-sangar di luar nalar, kita pun habis ke RTH Pergi ke MR.DIY Waktu sudah di dalam MR.DIY Sebenarnya bingung mau beli apa, jadi idenya kita pergi ke bagian aksesoris, disitu upi kayak di rasa di tantang harus memilih hadiah yang wanda pengen, upi bingun mau beli apa jadi upi beli ikat rambut,cincin, dan sendal pink lucu buat wandaku manisku, HEHEHEH LUCU BANGETTT, apalagi Waktu itu wanda ada nyoba mahkota, Waktu wanda make kaya LUCU BANGETTT THE REAL MY RATU IBLIS, habis dari MR.DIY Kita pun pergi ke Rocket Chicken karena kita berdua kelaparan, upi disitu masih ingat banget pesan nasi, dan ayam bagian paha Bawah lalu minumannya milo dan lemon tea oiya upi juga pesan rocket chicken bagian dada buat halim",
          ", kesian inya nemenin upi pas dating malah jadi nyamuk, AND HARGA ROCKET CHICKEN DI SATUI SANGATLAH MEMBINGUNGKAN harganya hampir 100.000 upi bingung masa cumin pesan 3 paket harga-nya hampir 100.000 perasaan kalo di Banjarmasin sudah dapat 4-5 paket, tapi ya gapapa lah buat ceweku yang tercinta, kita pun makan pas upi sudah habis, eh Taunya wanda gak habis jadi upi bilang '1x suap lagi, ni upi suapin sayang' AND WANDA PUN MAUUUU, FOR FIRST TIME UPI NYUAPIN MAKANAN KE ORANG YANG PALING UPI CINTAI, HAHAHHA RASANYA KAYA SUDAH JADI ABAH, HAHAHAHAH LUCUU BANGETT APALAGI WAKTU MAKAN PIPINYA MBUL MBUL, LUCU BANGETTT HAHAHAHA, setelah makan pun kita ber foto-foto mirror dulu sebelum anterin wanda pulang kerumah, setelah itu-pun kita ke rumah wanda, Waktu itu harinya sudah mau hujan, jadi vibes drama-nya kaya kerasa gitu lo hehehehe, sebelum wanda pergi ke dalam rumah, upi Waktu itu minta satu hal yaitu cium pipi upi, wanda pun kangsung mencium pipi upi, rasanya aku sudah tidak bisa berkata-kata lagi, seperti merasakan surga, nikmat yang tanpa batas, setelah itu pun upi pergi ke pantai menemui halim, upi di pantai dari jam 3 - 4 Sore dan sebelum kami pulang, kami foto-foto dulu di pantai batu, membuat kenangan indah, setelah itu pun kami pulang ke Banjarmasin, kami sampai di Banjarmasin jam setengan 9 malam, Waktu dirumah rasanya kaya capek banget, tapi kalo dingat-ingat siang tapi Waktu sama wanda kaya capek-nya hilang sendiri, dipikir-pikir kapan lagi yaa ketemu",
          "wanda, pengen bangett gitu ketemu wanda lagi, upi kangen banget sama wanda, belum beberapa jam meninggalkan wanda tapi kangen banget gitu masih, pegennya wanda disebelah upi, harus ada di samping upi, dimana pun itu. Malam itu pun upi lanjut call sama wanda seperti biasanya, and sebelum wanda bobo upi dongengin dede dulu, upi pengen dede bisa mendapatkan tidur yang nyenyak, setelah wanda bobo upi pun juga bobo. setelah itu kita pun mendapatkan ujian dari allah yaitu ujian melewati masa-masa banyak masalah, kita selalu bertengkar tapi untung-nya kita bisa meredam emosi kita, itu-lah yang mempertahankan hubungan ini sampai sekarang, upi berdoa, semoga kita menjadi pasangan selamanya dan menjadi pasangan paling Bahagia didunia. Sekarang sebentar lagi ulang tahun wanda, upi harus memberikan yang terbaik untuk wanda dan sebentar lagi juga upi akan Kembali ke-satui untuk menemui wanda, bedanya SEKARANG UPI MENGINAP DI SATUI YEYYYY, upi pengen lebih lama di satui, agar bisa berasama wanda terus-menerus, ulang tahun wanda kali ini upi harus memberikan yang terbaik, upi pengen wanda bisa senang dan Bahagia dengan semua hadiah yang upi berikan. mungkin sampai sini saja 'Memories With You' sungguh cerita kita sangat indah dan penuh kasih sayang dan cinta bukan ? Upi bersyukur wanda adalah pacar dan calon istri upi di masa depan, karena hanya wanda saja upi bisa mendapatkan kebahagiaan yang upi impikan, Terimakasih sayangku, I Love you so much and more 💗💗💗"
        ],
     };
    },
    methods: {
      setThickness(thickness) {
        this.diagonalClass = thickness;
      },
      nextPage() {
        if (this.page < this.textGroups.length + 1 ) {      
          this.text = this.textGroups[this.page];
          this.page = this.page + 1;
        }
      },
      previousPage(){
        if(this.page !== 0){
          this.page = this.page - 1;
          this.text = this.textGroups[this.page - 1];
          console.log(this.page);
        }
      }
    },
  };
  </script>
  
<style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
  .diagonal-thin {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 48px,
      black 48px,
      black 49px, /* border 1px */
      #ffcdd2 49px,
      #ffcdd2 98px,
      black 98px,
      black 99px, /* border 1px */
      transparent 99px
    );
  }
  .junge-regular {
    font-family: "Junge", serif;
    font-weight: 400;
    font-style: normal;
  }
</style>