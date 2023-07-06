<!--<template>-->
<!--  <div>-->
<!--    <video src="" controls autoplay></video>-->
<!--    <ul>-->
<!--      <li v-for="file in files" :key="file.magnet">-->
<!--        {{ file.fileName }}-->
<!--        <button @click="play(file)">Play</button>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { createApp, ref, reactive, computed } from "vue";-->
<!--import axios from "axios";-->

<!--createApp({-->
<!--  setup() {-->
<!--    let activeVideo = reactive({});-->
<!--    const files = ref([-->
<!--      {-->
<!--        magnet: "d50ba99f0c3cb2f3ae4483262a3ef5ab9e722eba",-->
<!--        fileName: "The.Fearway.2023.720p.BluRay.DD.5.1.x264-MegaPeer.mkv",-->
<!--      },-->
<!--      {-->
<!--        magnet: "b69e67697f8c1a60d39b5f20a2e0027276f20984",-->
<!--        fileName: "D:Mixed Baggage (2022).by.Alexandr.avi",-->
<!--      },-->
<!--    ]);-->

<!--    const videoUrl = computed(({ activeVideo }) => {-->
<!--      return activeVideo.fileName-->
<!--        ? `/stream/${activeVideo.magnet}/${activeVideo.fileName}`-->
<!--        : "";-->
<!--    });-->
<!--    const play = async (file) => {-->
<!--      const response = await axios.get(`/stream/add/${file.magnet}`);-->
<!--      activeVideo = file;-->
<!--    };-->
<!--    return {-->
<!--      files,-->
<!--      play,-->
<!--      activeVideo,-->
<!--    };-->
<!--  },-->
<!--}).mount("#app");-->
<!--</script>-->
