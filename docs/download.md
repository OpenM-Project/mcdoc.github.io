---
title: Download Page
---

# Downloads (Only Bedrock Edition)


## What is Minecraft?

Minecraft is an android game that takes players into a limitless world of creativity and adventure. The game is set in a procedurally generated three-dimensional world consisting of blocks that players can mine, create and build at their own discretion. In survival mode, players must explore the world, gather resources, and fight off monsters that come out at night. In peace mode, monsters disappear, allowing players to focus solely on creativity. Players can build everything from simple houses to intricate castles, huge cities, and even functioning machines. The item creation system allows players to turn raw materials into tools, weapons, and building blocks, giving them endless possibilities for creativity.


## Download 
<!-- <br> -->

You can download Minecraft from the official, **not** modified sources:

<script setup>
import { useToast } from "vue-toastification";
import { ref } from "vue";

// Get toast interface
const toast = useToast();

const isAndroid = /Android/.test(navigator.userAgent);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const isWindows = /Windows/.test(navigator.userAgent);

const myMethod = () => {
  let message = "";
  if (isIOS) {
    message = "App Store successfully opened!";
    console.log("User is on iOS, opening App Store.");
  } else if (isWindows) {
    message = "Microsoft Store successfully opened!";
    console.log("User is on Windows, opening Microsoft Store.");
  } else if (isAndroid) {
    message = "PlayStore successfully opened!";
    console.log("User is on Windows, opening Microsoft Store.");
  } else {
    message = "Unsupported platform.";
    console.log("User is on an unsupported platform.");
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
if (isIOS) {
  storeLink.value = "itms-apps://itunes.apple.com/app/id479516143";
} else if (isWindows) {
  storeLink.value = "ms-windows-store://pdp/?ProductId=9NBLGGH2JHXJ";
} else if (isAndroid) {
  storeLink.value = "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe";
}

const crackLink = ref("");
if (isIOS) {
  crackLink.value = "https://ipaomtk.com/minecraft-ipa/";
} else if (isWindows) {
  crackLink.value = "https://mcenters.net/";
} else if (isAndroid) {
  crackLink.value = "https://misike12.github.io/modscraft_mcpe_apk-archive/";
}

console.log("Crack link set to:", crackLink.value);
</script>

<div class="linkcard">
  <a :href="storeLink" @click="myMethod">
    <p class="description"><b>Download Official Minecraft</b><br><span>Click here to download!</span></p>
    <div class="logo">
         <img alt="Logo" width="70px" height="70px" src="/assets/images/download.svg" class="no-viewerjs"/>
    </div>
    <p class="small-gray-text">🛈 Auto Detected</p>
  </a>
</div>

## Or...

...download Minecraft from **un**official, *modified* sources for ***FREE***:


<div class="linkcard">
  <a :href="crackLink" target=”_blank”>
    <p class="description"><b>Download Cracked Minecraft</b><br><span>Click here to download!</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="/assets/images/download.svg" class="no-viewerjs"/>
    </div>
    <p class="small-gray-text">🛈 Auto Detected</p>
  </a>
</div>

<style>
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