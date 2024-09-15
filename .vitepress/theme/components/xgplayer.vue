// https://vitepress.yiov.top/components.html#%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE

<template>
    <div id="mse"></div>
</template>

<script setup lang="ts">
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";
import { onMounted } from 'vue'

interface propsType {
    url: string
    poster: string
}

const props = withDefaults(defineProps<propsType>(), {
    url: '',
    poster: '',
})

onMounted(() => {
    new Player({
        id: 'mse', // Placeholder id
        volume: 0, // Default mute
        lang: "en", // Set to Chinese

        autoplay: false, // Disable autoplay
        // autoplayMuted: true,// Enable autoplay with muted
        fluid: true,  // Fluid layout, automatically adjusts aspect ratio
        controls: true, // Enable controls, set to false to hide
        leavePlayerTime: 0, // Delay time to hide control bar after mouse leaves, default is 3000ms
        download: true, // Enable download
        keyShortcut: true, // Enable hotkeys

        url: props.url, // URL passed in
        poster: props.poster, // Video poster passed in

        start: {
            isShowPause: true // Show play button when paused
        }

    })

})

</script>

<style scoped>
#mse {
    flex: auto;
}
</style>