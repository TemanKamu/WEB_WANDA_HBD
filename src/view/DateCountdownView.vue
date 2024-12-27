<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ProgressBarDay from "../components/ProgressBarDay.vue";

// Daftar gambar background
const backgroundImages = [
  "/assets/main_content/wanda_photo/pic_land.jpg",
  "/assets/main_content/wanda_photo/pic2.jpg", // Tambahkan gambar lain yang Anda inginkan
  "/assets/main_content/wanda_photo/pic3.jpg",
];

// Reactive variable untuk gambar saat ini
const currentImageIndex = ref(0);
const currentImage = ref(backgroundImages[0]);

// Fungsi untuk mengubah gambar
function changeBackgroundImage() {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % backgroundImages.length;
  currentImage.value = backgroundImages[currentImageIndex.value];
}

// Setup interval untuk rotasi gambar
let imageRotationInterval;

onMounted(() => {
  imageRotationInterval = setInterval(changeBackgroundImage, 5000); // Ganti gambar setiap 5 detik
  updateButtonStyle(); // Update warna tombol saat komponen dimuat
});

onBeforeUnmount(() => {
  clearInterval(imageRotationInterval);
});

// Reactive state untuk buttonStyle
const buttonStyle = ref({
  width: "18%",
  backgroundColor: "rgba(255, 255, 255, 0.36)",
  color: "rgba(0, 0, 0, 0.6)",
});

// Fungsi untuk memperbarui warna tombol berdasarkan tanggal
function updateButtonStyle() {
  const today = new Date();
  const targetDate = new Date(2025, 0, 1, 0, 0, 0);
  if (today >= targetDate) {
    buttonStyle.value = {
      width: "18%",
      backgroundColor: "#FFFFFF", // Warna putih
      color: "#000000", // Warna hitam
    };
  }
}
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Gunakan transisi untuk efek fade yang halus -->
    <transition name="fade">
      <img
        :key="currentImage"
        :src="currentImage"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
      />
    </transition>

    <!-- Overlay dengan opacity -->
    <div
      class="absolute inset-0"
      style="background-color: rgba(242, 194, 192, 0.54)"
    ></div>

    <div class="absolute inset-0 mt-[90px]">
      <h1 class="flex justify-center text-7xl text-white z-10">
        WANDA BIRTHDAY
      </h1>

      <div class="flex justify-center  mt-3">
        <div class="flex bg-white justify-center items-center font-medium rounded-sm scale-150" style="width: 9%;">
          01 JANUARY 2025
        </div>
      </div>

      <div class="flex justify-center mt-[40px] me-[99px]">
        <ProgressBarDay />
      </div>

      <div class="flex justify-center mt-[150px]">
        <RouterLink to="/intro" class="rounded-xl p-5 text-5xl text-center"
        :style="buttonStyle">
          GO !</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Kaisei+Opti&family=Koulen&display=swap");

* {
  font-family: "Koulen", sans-serif;
  font-style: normal;
}

/* Tambahkan transisi fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
