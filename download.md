---
title: Download Page
---

# Downloads

<br>

<script setup>
import { useToast } from "vue-toastification";
import { ref } from "vue";

// Get toast interface
const toast = useToast();

const myMethod = () => {
  // Since you returned `toast` from setup(), you can access it now
  toast("Microsoft Store successfully opened!", {
    timeout: 4000,
    pauseOnFocusLoss: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    closeButton: "button"
    });
};
</script>

<div class="linkcard">
  <a href="ms-windows-store://pdp/?ProductId=9NBLGGH2JHXJ" @click="myMethod">
    <p class="description"><b>Download Minecraft for Windows</b><br><span>Click here to download!</span></p>
    <div class="logo">
        <img alt="Logo" width="70px" height="70px" src="/assets/images/minecraft-launcher.webp" class="no-viewerjs"/>
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