<template>
    <div class="countdown-container">
      <div v-for="(item, index) in countdownItems" :key="item.label" class="countdown-item">
        <svg class="progress-ring" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" stroke="white" stroke-width="2" fill="none"/>
          <circle 
            class="progress" 
            cx="60" cy="60" r="54" 
            stroke="#d6d4d4" 
            stroke-width="2" 
            fill="none" 
            :style="getProgressStyle(index)"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div class="content">
          <div class="number">{{ formatTime(item.value) }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetDate: new Date(2025, 0, 1, 0, 0, 0),
        countdownItems: [
          { label: 'Days', value: 0, max: 30 },
          { label: 'Hours', value: 0, max: 24 },
          { label: 'Minutes', value: 0, max: 60 },
          { label: 'Seconds', value: 0, max: 60 }
        ],
        circumference: 2 * Math.PI * 54
      }
    },
    mounted() {
      this.updateCountdown()
      this.countdownInterval = setInterval(this.updateCountdown, 1000)
    },
    beforeUnmount() {
      clearInterval(this.countdownInterval)
    },
    methods: {
      updateCountdown() {
        const currentDate = new Date()
        const difference = this.targetDate - currentDate
  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
  
        this.countdownItems = [
          { label: 'Days', value: days, max: 30 },
          { label: 'Hours', value: hours, max: 24 },
          { label: 'Minutes', value: minutes, max: 60 },
          { label: 'Seconds', value: seconds, max: 60 }
        ]
      },
      formatTime(value) {
        return value.toString().padStart(2, '0')
      },
      getProgressStyle(index) {
        const item = this.countdownItems[index]
        const percent = (item.value / item.max) * 100
        const offset = this.circumference - (percent / 100) * this.circumference
        return {
          strokeDasharray: this.circumference,
          strokeDashoffset: offset
        }
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Kaisei+Opti&family=Konkhmer+Sleokchher&family=Koulen&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Kaisei+Opti&family=Konkhmer+Sleokchher&family=Koulen&family=Linden+Hill:ital@0;1&display=swap');
  .countdown-container {
    display: flex;
    gap: 120px
  }
  
  .countdown-item {
    position: relative;
    width: 120px;
    height: 120px;
  }
  
  .progress-ring {
    position: absolute;
    width: 180%;
    height: 180%;
  }
  
  .content {
    position: absolute;
    top: 100%;
    left: 90%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  }
  
  .number {
    font-size: 40px;
    font-weight: bold;
    color: white;
    font-family: "Konkhmer Sleokchher", system-ui;
  }
  
  .label {
    font-size: 16px;
    color: white;
    text-transform: capitalize;
    font-family: "Linden Hill", serif;
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;
  }
  </style>