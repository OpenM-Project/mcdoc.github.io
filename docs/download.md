---
title: Download Page
---

<div class="flex flex-col items-center justify-center p-6" style="background-color: var(--vp-c-default-4);">
  <h1 class="text-4xl font-bold mb-3 text-white">Download Minecraft</h1>
  <p class="text-[var(--vp-c-text-dark-1)] mb-4">Choose your platform to get started!</p>

  <div class="flex space-x-4 mb-6">
    <a :href="officialLink" @click="myMethod" target="_blank" class="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-white">
      <span class="z-10 pr-2 text-white">Official Minecraft</span>
      <div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
        <div class="mr-3.5 flex items-center justify-center">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </a>
    <a :href="crackedLink" target="_blank" class="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-white">
      <span class="z-10 pr-2 text-white">Cracked Minecraft</span>
      <div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
        <div class="mr-3.5 flex items-center justify-center">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </a>
  </div>

  <div class="mb-6">
    <label for="platform-select" class="text-[var(--vp-c-text-dark-1)] mb-2">Select Platform: </label>
    <select id="platform-select" class="bg-gray-800 text-white rounded-md p-2" @change="selectPlatform($event.target.value)">
      <option value="" disabled selected>Select your platform</option>
      <option value="Windows">Windows</option>
      <option value="Android">Android</option>
      <option value="iOS">iOS</option>
    </select>
  </div>

  <div class="text-center mb-6">
    <h2 class="text-[var(--vp-c-text-dark-1)]">Minecraft</h2>
    <p class="text-[var(--vp-c-text-dark-1)]">Mojang</p>
    <p class="text-[var(--vp-c-text-dark-1)]">In-app purchases</p>
    <p class="text-[var(--vp-c-text-dark-1)]">4.4 ⭐ (5.19 M reviews)</p>
    <p class="text-[var(--vp-c-text-dark-1)]">50 M+ downloads</p>
    <p class="text-[var(--vp-c-text-dark-1)]">Content rating: PEGI 7</p>
  </div>

  <div class="mb-6">
    <h3 class="text-xl font-bold text-[var(--vp-c-text-dark-1)]">About the Game</h3>
    <p class="text-[var(--vp-c-text-dark-1)]">CREATE: Build anything you can imagine in your own infinite world, which is unique in every gameplay.</p>
    <p class="text-[var(--vp-c-text-dark-1)]">EXPLORE: Discover environments, resources, and mobs, and build your way through a world full of surprises.</p>
    <p class="text-[var(--vp-c-text-dark-1)]">SURVIVE: Experience unforgettable adventures as you face mysterious enemies.</p>
    <p class="text-[var(--vp-c-text-dark-1)]">PLAY WITH OTHERS: Have fun with your friends in cross-platform play.</p>
  </div>

  <div class="mb-6">
    <h3 class="text-xl font-bold text-[var(--vp-c-text-dark-1)]">Screenshots</h3>
    <div class="grid grid-cols-2 gap-4">
      <img src="https://dl.openm.tech/images/screenshot_01.webp" alt="Screenshot 1" class="rounded-lg">
      <img src="https://dl.openm.tech/images/screenshot_02.webp" alt="Screenshot 2" class="rounded-lg">
      <img src="https://dl.openm.tech/images/screenshot_03.webp" alt="Screenshot 3" class="rounded-lg">
      <img src="https://dl.openm.tech/images/screenshot_04.webp" alt="Screenshot 4" class="rounded-lg">
      <img src="https://dl.openm.tech/images/screenshot_05.webp" alt="Screenshot 5" class="rounded-lg">
    </div>
  </div>

  <div class="mb-6">
    <h3 class="text-xl font-bold text-[var(--vp-c-text-dark-1)]">Support</h3>
    <p class="text-[var(--vp-c-text-dark-1)]">SUPPORT: <a href="https://www.minecraft.net/help" class="text-blue-400">minecraft.net/help</a></p>
    <p class="text-[var(--vp-c-text-dark-1)]">MORE INFORMATION: <a href="https://www.minecraft.net/" class="text-blue-400">minecraft.net</a></p>
  </div>
</div>

<script setup>
import { ref, onMounted } from 'vue';

const officialLink = ref('ms-windows-store://pdp/?ProductId=9NBLGGH2JHXJ');
const crackedLink = ref(' https://github.com/M-Community-Dev/Downloads/');
const selectedPlatform = ref('');

const selectPlatform = (platform) => {
  switch (platform) {
    case 'Windows':
      officialLink.value = 'ms-windows-store://pdp/?ProductId=9NBLGGH2JHXJ';
      crackedLink.value = ' https://github.com/M-Community-Dev/Downloads/';
      break;
    case 'Android':
      officialLink.value = 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe';
      crackedLink.value = 'https://misike12.github.io/modscraft_mcpe_apk-archive/';
      break;
    case 'iOS':
      officialLink.value = 'https://apps.apple.com/app/minecraft/id479516143';
      crackedLink.value = 'https://ipaomtk.com/minecraft-ipa/';
      break;
    default:
      return;
  }
};

const detectPlatform = () => {
  const userAgent = navigator.userAgent;
  if (/Windows/.test(userAgent)) {
    selectedPlatform.value = 'Windows';
  } else if (/Android/.test(userAgent)) {
    selectedPlatform.value = 'Android';
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    selectedPlatform.value = 'iOS';
  } else {
    selectedPlatform.value = '';
  }
  selectPlatform(selectedPlatform.value);
};

onMounted(() => {
  detectPlatform();
});
</script>