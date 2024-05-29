<script setup>
definePageMeta({
  layout: 'video',
})
useSeoMeta({
  title: "TESTING | Review Video"
})
const config = useRuntimeConfig()
const route = useRoute()
const { slug } = route.params

const { data: { value } } = await useFetch(`${config.public.baseUrl}/reviews/review-video/${slug}`, { lazy: true, server: true, mode: 'no-cors' })
const datas = value.data
const mediaInfo = getSettingMediaResolution(slug)
const posterVideo = `poster-${mediaInfo.resolution}.png`;
</script>

<template>
  <div>
    <p class='text-lg text-dark'>Resolusi: {{ mediaInfo.resolution }}</p>
    <div class="mt-5">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
        <video v-for="(item, i) in datas" :key="i + 1" class="rounded-sm aspect-video object-fill"
          :width="mediaInfo.widthMedia" :height="mediaInfo.heightMedia" preload="none"
          :poster="`${config.public.baseMediaUrl}/videos/${posterVideo}`" controls muted>
          <source :src="`${config.public.baseMediaUrl}/videos/${item.path_video}`" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>