---
title: Development test Page
---

<script setup>
import * as pkg from "vue-toastification"
const { useToast } = pkg

const toast = useToast();

const myMethod = () => {
  toast("Test!", {
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: "button",
    rtl: false
    });
};
</script>

<button class="toast-button" @click="myMethod">Show Info Toast</button>

<style>
.toast-button {
  padding: 10px 20px;
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.toast-button:hover {
  background-color: #005a9e;
}
</style>