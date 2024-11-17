<template>
  <div class="linkcard">
    <a :href="storeLink" @click="myMethod">
      <p class="description"><b>Download Official Minecraft</b><br><span>Click here to download!</span></p>
      <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="/assets/images/download.svg" class="no-viewerjs"/>
      </div>
      <p class="small-gray-text">🛈 Auto Detected</p>
    </a>
  </div>

  <h2>Or...</h2>

  <p>...download Minecraft from <strong>un</strong>official, <em>modified</em> sources for <strong><em>FREE</em></strong>:</p>

  <div class="linkcard">
    <a :href="crackLink" target="_blank">
      <p class="description"><b>Download Cracked Minecraft</b><br><span>Click here to download!</span></p>
      <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="/assets/images/download.svg" class="no-viewerjs"/>
      </div>
      <p class="small-gray-text">🛈 Auto Detected</p>
    </a>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import { ref } from "vue";

const toast = useToast();
const isAndroid = /Android/.test(navigator.userAgent);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isWindows = /Windows/.test(navigator.userAgent);

const myMethod = () => {
  let message = "";
  if (isIOS) {
    message = "App Store successfully opened!";
  } else if (isWindows) {
    message = "Microsoft Store successfully opened!";
  } else if (isAndroid) {
    message = "PlayStore successfully opened!";
  } else {
    message = "Unsupported platform.";
  }

  toast(message, {
    timeout: 4000,
    pauseOnFocusLoss: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    closeButton: "button"
  });
};

const storeLink = ref("");
const crackLink = ref("");

if (isIOS) {
  storeLink.value = "itms-apps://itunes.apple.com/app/id479516143";
  crackLink.value = "https://ipaomtk.com/minecraft-ipa/";
} else if (isWindows) {
  storeLink.value = "ms-windows-store://pdp/?ProductId=9NBLGGH2JHXJ";
  crackLink.value = "https://mcenters.net/";
} else if (isAndroid) {
  storeLink.value = "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe";
  crackLink.value = "https://misike12.github.io/modscraft_mcpe_apk-archive/";
}
</script>

<style scoped>
.linkcard {
  position: relative;
}

.small-gray-text {
  position: absolute;
  bottom: -21px;
  left: 5px;
  font-size: 0.6em;
  color: gray;
}
</style> 