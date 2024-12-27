<script setup>
import '../assets/css/afterCountdown.css'
import songUrl from '/assets/intro/song/hbd.mpeg?url'
import { ref, onMounted, nextTick } from 'vue'
import { gsap, Expo, Elastic } from 'gsap'
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router'

// Refs
const songElement = ref(null)
const hbdChatbox = ref(null)
const wishHbd = ref(null)

// Data variables (keep previous ones)
const name = ref('Wanda')
const greetingText = ref('I really like your name btw!')
const birthdayText = ref("It's your birthday!! :D")
const chatboxText = ref('Happy birthday Wanda! semoga apaa yang kamu inginkan akan terwujud! dan semoga kamu selalu bahagia!')
const sendButtonText = ref('Send')

// Paths and other data (keep previous ones)
const songSrc = ref(songUrl)

// Animation Timeline
const animationTimeline = () => {
try {
  const splitChars = (element) => {
    if (!element) return
    element.innerHTML = element.textContent
      .split('')
      .map(char => `<span>${char}</span>`)
      .join('')
  }

  // Prepare elements for animation
  nextTick(() => {
    const textBoxChars = hbdChatbox.value
    if (!textBoxChars) {
        console.warn('Chatbox element not found')
        return
    }
    splitChars(textBoxChars)

    // Animation configurations
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
    }

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
    }

    // GSAP Timeline
    const tl = gsap.timeline()

    tl.to(".containers", { 
      duration: 0.6, 
      visibility: "visible" 
    })
    .from(".one", { 
      duration: 0.7, 
      opacity: 0, 
      y: 10 
    })
    .from(".two", { 
      duration: 0.4, 
      opacity: 0, 
      y: 10 
    })
    .to(".one", { 
      duration: 0.7, 
      opacity: 0, 
      y: 10,
      delay: 3.5 
    })
    .to(".two", { 
      duration: 0.7, 
      opacity: 0, 
      y: 10,
      delay: -1 
    })
    .from(".three", { 
      duration: 0.7, 
      opacity: 0, 
      y: 10 
    })
    .to(".three", { 
      duration: 0.7, 
      opacity: 0, 
      y: 10,
      delay: 3 
    })
    .from(".four", { 
      duration: 0.7, 
      scale: 0.2, 
      opacity: 0 
    })
    .from(".fake-btn", { 
      duration: 0.3, 
      scale: 0.2, 
      opacity: 0 
    })
    .staggerTo(".hbd-chatbox span", 1.5,{ 
      visibility: "visible" 
    }, 0.05)
    .to(".fake-btn", 0.1, {
        backgroundColor: "#ff48d7",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "#FF8AE6",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
        0.3
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    return tl
  })
} catch (error) {
    console.error("Animation error:", error)
}

}

// Music and Animation Initialization
onMounted(() => {
  Swal.fire({
    title: 'Do you want to play music in the background?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed && songElement.value) {
      songElement.value.play()
    }
    animationTimeline()
  })
})

// Method to restart animation
const restartAnimation = () => {
  animationTimeline().restart()
}
</script>
<template>
    <div class="containers">
      <audio ref="songElement" class="song" loop>
        <source :src="songSrc" type="audio/mpeg">
        Your browser isn't invited for super fun audio time.
      </audio>
  
      <div class="one">
        <h1 class="one">
          Hi
          <span id="name">{{ name }}</span>
        </h1>
        <p class="two" id="greetingText">{{ greetingText }}</p>
      </div>
  
      <div class="three">
        <p>{{ birthdayText }}</p>
      </div>
  
      <div class="four">
        <div class="text-box">
          <p class="hbd-chatbox" ref="hbdChatbox">
            {{ chatboxText }}
          </p>
          <p class="fake-btn">Send</p>
        </div>
      </div>
  
      <div class="five">
        <p class="idea-1">That's what I was going to do.</p>
        <p class="idea-2">But then I stopped.</p>
        <p class="idea-3">
            I realised, I wanted to do something
          <strong>special</strong>
          .
        </p>
        <p class="idea-4">Because, </p>
        <p class="idea-5">
          You are Special
          <span>:]</span>
        </p>
        <p class="idea-6">
          <span>S</span>
          <span>O</span>
        </p>
      </div>
  
      <div class="six">
        <img src="/assets/intro/wanda_kiyowo_1.jpg" alt="profile" class="profile-picture"/>
        <img src="/assets/intro/hat.svg" alt="hat" class="hat" />
        <div class="wish">
          <h3 class="wish-hbd">Happy Birthday!</h3>
          <h5 id="wishText">May Allah always protect Wanda from all dangers ;]</h5>
        </div>
      </div>
  
      <div class="seven">
            <div class="baloons">
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon2.svg" alt="" />
                <img src="/assets/intro/ballon1.svg" alt="" />
                <img src="/assets/intro/ballon3.svg" alt="" />
            </div>
      </div>
  
      <div class="eight">
        <svg 
          v-for="n in 9" 
          :key="n" 
          viewBox="0 0 40 40" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
  
      <div class="nine">
        <p>Okay, now come back and tell me if you liked it.</p>
        <p 
          id="replay" 
          @click="restartAnimation"
        >
        Let's explore more!
        </p>
        <p class="mt-4">
          <RouterLink class="btn bg-pink-300 text-white p-4 rounded-lg" to="/hbd">Next page</RouterLink>
        </p>
        <p class="last-smile">:]</p>
      </div>
    </div>
</template>
