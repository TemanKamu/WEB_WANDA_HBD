<!-- BackgroundImage.vue -->
<template>
    <div class="flex flex-col w-full bg-[#FFCCD0]" style="height: 120vh;">
      <header class="m-12 flex">
         <span class="koulen-regular text-white text-border text-7xl" data-aos="fade-right">SONG RELATED TO YOU</span>
         <img src="/assets/main_content/assets/arrow-sprial.png" alt="spiral-arrow" class="w-24 h-24 ml-8" data-aos="fade-down">
      </header>
      <main class="flex border border-black bg-[#FFADB4] mx-auto mt-[-14px] p-5 regular-box-shadow rounded-lg gap-12" style="width: 90%; height: 70%;" data-aos="fade-left">
        <div id="currentSong" class="bg-white border border-black rounde  d-lg regular-box-shadow w-[40%]">
            <header class="text-center mt-6">
              <p class="junge-regular text-[#7D7D7D]">PLAYING NOW</p>
              <p class="junge-regular text-black text-xl mt-1">{{ currentSong.title }}</p>
              <p class="junge-regular text-[#7D7D7D] mt-1">- {{ currentSong.artist }} -</p>
            </header>
            <main class="w-80 h-72 mx-auto mt-3 regular-box-shadow">
              <img :src="currentSong.img" class="w-full h-full object-cover" alt="">
            </main>
            <footer class="cursor-pointer">
              <div class="progress-container" @click="seek">
                <div class="progress-bar" :style="{ width: progress + '%' }"></div>
              </div>
              <div class="time-info">
                <span>{{ formatTime(currentTime) }}</span>
                <span>{{ formatTime(duration) }}</span>
              </div>
              <div class="w-full flex justify-center items-center mt-[-10px]">
                <div class="w-8 h-8 mr-5 mt-1.5" @click="toggleLoop">
                  <img src="/assets/main_content/assets/loop-song.png" class="object-contain" alt="">
                </div>
                <div class="text-3xl"  @click="previousSong">⏮</div>
                <div class="circle-mine border border-black w-20 h-20 p-6 scale-[0.6]" @click="togglePlay">
                  <p class="text-5xl mt-[-9px] ml-[-8px]" v-if="isPlaying">⏸ </p>
                  <p class="text-5xl mt-[-8px]" v-else>▶</p>
                </div>
                <div class="text-3xl" @click="nextSong">⏭</div>
                <div class="w-8 ml-5 mt-1.5" @click="toggleShuffle">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="shuffle" x="0" y="0" version="1.1" viewBox="0 0 29 29">
                  <path d="M23.5 10h-4.343a3.995 3.995 0 0 0-2.828 1.172l-6.657 6.657A4.003 4.003 0 0 1 6.843 19H2.5" style="fill:none;stroke:#000;stroke-width:2;stroke-miterlimit:10"></path>
                  <path d="M2.5 10h4.343c1.061 0 2.078.421 2.828 1.172l6.657 6.657a4.001 4.001 0 0 0 2.828 1.172H23.5" style="fill:none;stroke:#000;stroke-width:2;stroke-miterlimit:10"></path>
                  <path d="M21.5 12.412V7.588c0-.368.401-.596.717-.408l4.052 2.412a.474.474 0 0 1 0 .815l-4.052 2.412a.474.474 0 0 1-.717-.407zM21.5 21.412v-4.823c0-.368.401-.596.717-.408l4.052 2.412a.474.474 0 0 1 0 .815l-4.052 2.412a.475.475 0 0 1-.717-.408z"></path>
                </svg>
                </div>
              </div>
            </footer>
        </div>
        <div id="songList" class="w-[55%] flex flex-col justify-center items-center gap-[69px]">
            <div class="flex w-full h-[25%] gap-5 ">
              <div class="flex w-full h-full bg-white p-3 regular-box-shadow gap-2">
                  <div id="imgSongGroup" class=" w-[45%] h-[100%]">
                    <img src="/assets/main_content/wanda_photo/pic3.jpg" class="object-cover w-full h-full" alt="">
                  </div>
                  <div id="songDetailGroup" class="text-md w-[80%]">
                      <p class="junge-regular ">Just the way you are</p>
                      <p class="junge-regular text-[#7D7D7D]">Bruno Mars</p>
                      <p class="junge-regular text-[#7D7D7D]">00.00 - 03:56</p>
                      <button class="bg-[#ffaddd] w-[100%] py-1 mt-[17px] rounded-lg junge-regular border border-black hover:scale-[1.04] transition" @click="pickSong(0) ">PLAY</button>
                  </div>
              </div>
              <div class="flex w-full h-full bg-white p-3 regular-box-shadow gap-2">
                  <div id="imgSongGroup" class=" w-[45%] h-[100%]">
                    <img src="/assets/main_content/wanda_photo/pic_land.jpg" class="object-cover w-full h-full" alt="">
                  </div>
                  <div id="songDetailGroup" class="text-md w-[80%]">
                      <p class="junge-regular ">Blue</p>
                      <p class="junge-regular text-[#7D7D7D]">Yung Kai</p>
                      <p class="junge-regular text-[#7D7D7D]">00.00 - 03:34</p>
                      <button class="bg-[#ffaddd] w-[100%] py-1 mt-[17px] rounded-lg junge-regular border border-black hover:scale-[1.04] transition" @click="pickSong(1) ">PLAY</button>
                  </div>
              </div>
            </div>
            <div class="flex w-full h-[25%] gap-5">
              <div class="flex w-full h-full bg-white p-3 regular-box-shadow gap-2">
                  <div id="imgSongGroup" class=" w-[45%] h-[100%]">
                    <img src="/assets/main_content/wanda_photo/pic_rect.jpg" class="object-cover w-full h-full" alt="">
                  </div>
                  <div id="songDetailGroup" class="text-md w-[80%]">
                    <p class="junge-regular ">Nuts</p>
                    <p class="junge-regular text-[#7D7D7D]">Lil peep</p>
                    <p class="junge-regular text-[#7D7D7D]">00.00 - 01:25</p>
                    <button class="bg-[#ffaddd] w-[100%] py-1 mt-[17px] rounded-lg junge-regular border border-black hover:scale-[1.04] transition" @click="pickSong(2) ">PLAY</button>
                  </div>
                </div>
                <div class="flex w-full h-full bg-white p-3 regular-box-shadow gap-2">
                  <div id="imgSongGroup" class="bg-gray-300 w-[45%] h-[100%]">
                    <img src="/assets/main_content/wanda_photo/pic2.jpg" class="object-cover w-full h-full" alt="">
                  </div>
                  <div id="songDetailGroup" class="text-md w-[80%]">
                      <p class="junge-regular ">I Love You So</p>
                      <p class="junge-regular text-[#7D7D7D]">The Walters</p>
                      <p class="junge-regular text-[#7D7D7D]">00.00 - 02:40</p>
                      <button class="bg-[#ffaddd] w-[100%] py-1 mt-[17px] rounded-lg junge-regular border border-black hover:scale-[1.04] transition" @click="pickSong(3) ">PLAY</button>
                  </div>
              </div>
            </div>
            <div class="flex w-full h-[25%] gap-5">
              <div class="flex w-full h-full bg-white p-3 regular-box-shadow gap-2">
                  <div id="imgSongGroup" class="bg-gray-300 w-[45%] h-[100%]">
                    <img src="/assets/main_content/gallery/wanda_anime_3.jpg" class="object-cover w-full h-full" alt="">                    
                  </div>
                  <div id="songDetailGroup" class="text-md w-[80%]">
                      <p class="junge-regular ">We Fell in love in octover</p>
                      <p class="junge-regular text-[#7D7D7D]">Girl in Red</p>
                      <p class="junge-regular text-[#7D7D7D]">00.00 - 03.03</p>
                      <button class="bg-[#ffaddd] w-[100%] py-1 mt-[17px] rounded-lg junge-regular border border-black hover:scale-[1.04] transition" @click="pickSong(4) ">PLAY</button>
                  </div>
              </div>
              <div class="flex w-full h-full bg-white p-3 regular-box-shadow gap-2">
                  <div id="imgSongGroup" class="bg-gray-300 w-[45%] h-[100%]">
                    <img src="/assets/main_content/gallery/wanda_anime_4.jpg" class="object-cover w-full h-full" alt="">                    
                  </div>
                  <div id="songDetailGroup" class="text-md w-[80%]">
                      <p class="junge-regular ">Lovers Rock</p>
                      <p class="junge-regular text-[#7D7D7D]">TV Girl</p>
                      <p class="junge-regular text-[#7D7D7D]">00.00 - 03:27</p>
                      <button class="bg-[#ffaddd] w-[100%] py-1 mt-[17px] rounded-lg junge-regular border border-black hover:scale-[1.04] transition" @click="pickSong(5) ">PLAY</button>
                  </div>
              </div>
            </div>
        </div>
      </main>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        playlist: [
          {
            id: 1,
            title: "Just the way you are",
            artist: "Bruno Mars",
            url: "/assets/main_content/song/just_the_way_you_are.mp3",
            img: "/assets/main_content/wanda_photo/pic3.jpg"
          },
          {
            id: 2,
            title: "Blue",
            artist: "Yung Kai",
            url: "/assets/main_content/song/blue.mp3",
            img: "/assets/main_content/wanda_photo/pic_land.jpg"
          },
          {
            id: 3,
            title: "Nuts",
            artist: "Lil peep",
            url: "/assets/main_content/song/nuts.mp3",
            img: "/assets/main_content/wanda_photo/pic_rect.jpg"
          },
          {
            id: 4,
            title: "I Love You So",
            artist: "The walters",
            url: "/assets/main_content/song/i_love_you_so.mp3",
            img: "/assets/main_content/wanda_photo/pic2.jpg"
          },
          {
            id: 5,
            title: "We Fell In Love In October",
            artist: "Girl in red",
            url: "/assets/main_content/song/we_fell_in_love_in_october.mp3",
            img: "/assets/main_content/gallery/wanda_anime_3.jpg"
          },
          {
            id: 6,
            title: "Lovers Rock",
            artist: "TV Girl",
            url: "/assets/main_content/song/lovers_rock.mp3",
            img: "/assets/main_content/gallery/wanda_anime_4.jpg"
          },
        ],
        audio: null,
        currentSongIndex: 0,
        isPlaying: false,
        isLooping: false,
        isShuffled: false,
        currentTime: 0,
        duration: 0,
        isReady: false
      }
    },
    computed: {
        currentSong() {
          return this.playlist[this.currentSongIndex] || {}
        },
        progress() {
          return this.duration ? (this.currentTime / this.duration) * 100 : 0
        }
     },
     methods: {
      initAudio() {
        if (this.audio) {
          this.cleanupAudio();
        }

        this.audio = new Audio();
        this.audio.addEventListener('timeupdate', this.updateProgress);
        this.audio.addEventListener('ended', this.songEnded); // Penting!
        this.audio.addEventListener('loadedmetadata', this.loadedMetadata);
        this.audio.addEventListener('error', this.handleError);

        this.loadSong(this.currentSong.url);
      },

        cleanupAudio() {
          if (!this.audio) return
          
          this.audio.removeEventListener('timeupdate', this.updateProgress)
          this.audio.removeEventListener('ended', this.songEnded)
          this.audio.removeEventListener('loadedmetadata', this.loadedMetadata)
          this.audio.removeEventListener('error', this.handleError)
          this.audio.pause()
        },

        loadSong(url) {
          this.isReady = false
          this.audio.src = url
          this.audio.load()
          if (this.isPlaying) {
            this.audio.play().catch(this.handleError)
          }
        },

        handleError(error) {
          console.error('Error playing audio:', error)
          this.isReady = false
          this.isPlaying = false
        },

        loadedMetadata() {
          this.duration = this.audio.duration
          this.isReady = true
        },

        updateProgress() {
          this.currentTime = this.audio.currentTime
        },

        togglePlay() {
          if (!this.isReady) return

          this.isPlaying = !this.isPlaying
          if (this.isPlaying) {
            this.audio.play().catch(this.handleError)
          } else {
            this.audio.pause()
          }
        },

        previousSong() {
          if (this.isShuffled) {
            this.currentSongIndex = Math.floor(Math.random() * this.playlist.length)
          } else {
            this.currentSongIndex = (this.currentSongIndex - 1 + this.playlist.length) % this.playlist.length
          }
          this.loadSong(this.currentSong.url)
        },

        nextSong() {
          if (this.isShuffled) {
            this.currentSongIndex = Math.floor(Math.random() * this.playlist.length)
          } else {
            this.currentSongIndex = (this.currentSongIndex + 1) % this.playlist.length
          }
          this.loadSong(this.currentSong.url)
        },
        pickSong(index) {
          // Validasi index
          if (index < 0 || index >= this.playlist.length) {
            console.error('Invalid song index');
            return;
          }

          // Update current song index
          this.currentSongIndex = index;
          
          // Stop current playback if any
          if (this.audio) {
            this.audio.pause();
            this.currentTime = 0;
          }

          // Load and play the new song
          this.loadSong(this.currentSong.url);
          
          // Auto-play the selected song
          this.isPlaying = true;
          if (this.audio) {
            this.audio.play().catch(this.handleError);
          }
        },
        songEnded() {
          if (this.isLooping) {
            this.audio.currentTime = 0;
            this.audio.play().catch(this.handleError);
          } else {
            this.nextSong();
          }
        },

        toggleLoop() {
          this.isLooping = !this.isLooping;
          if (this.audio) {
            this.audio.loop = this.isLooping;
          }
          // Optional: Tambahkan indikator visual untuk loop icon
          const loopImg = document.querySelector('img[alt="loop-song"]');
          if (loopImg) {
            loopImg.style.opacity = this.isLooping ? '1' : '0.5';
          }
        },

        toggleShuffle() {
          this.isShuffled = !this.isShuffled;
          // Optional: Tambahkan indikator visual
          const shuffleIcon = document.querySelector('#shuffle');
          if (shuffleIcon) {
            shuffleIcon.style.stroke = this.isShuffled ? '#4CAF50' : '#000';
          }
        },

        seek(event) {
          if (!this.isReady) return

          const rect = event.target.getBoundingClientRect()
          const pos = (event.clientX - rect.left) / rect.width
          this.audio.currentTime = pos * this.duration
        },

        formatTime(seconds) {
          const minutes = Math.floor(seconds / 60)
          const remainingSeconds = Math.floor(seconds % 60)
          return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
        }
      },     
      mounted() {
        this.initAudio()
      },
      beforeDestroy() {
        this.cleanupAudio()
      }
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Junge&family=Kaisei+Decol&family=Kaisei+Opti&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
  .junge-regular {
    font-family: "Junge", serif;
    font-weight: 400;
    font-style: normal;
  }
  .koulen-regular {
        font-family: "Koulen", serif;
        font-weight: 400;
        font-style: normal;
  }
  .text-border {
        color: white; /* Warna teks */
        text-shadow: 
            -1px -1px 0 black, /* Bayangan di kiri atas */
            1px -1px 0 black,  /* Bayangan di kanan atas */
            -1px 1px 0 black,  /* Bayangan di kiri bawah */
            1px 1px 0 black;   /* Bayangan di kanan bawah */
    }
  .regular-box-shadow{
      box-shadow: 4px 4px 3px 0 rgba(0, 0, 0, 0.2); 
  }
  .progress-container {
    background: #ddd;
    border-radius: 5px;
    width: 80%;
    height: 6px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    cursor: pointer;
    position: relative;
  }

  .progress-bar {
    width: 50%;
    background: black;
    height: 100%;
    border-radius: 5px;
    transition: width 0.1s linear;
  }
  .time-info {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: black;
    font-family: "Junge", serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 7px;
  }
  .circle-mine{
     border-radius: 50%;
  }
</style>