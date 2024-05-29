<script setup>
definePageMeta({
  layout: 'image',
})

useSeoMeta({
  title: "TESTING | Review Gambar"
})

const config = useRuntimeConfig()
const route = useRoute()
const { slug } = route.params

const { data: { value } } = await useFetch(`${config.public.baseUrl}/reviews/review-image/${slug}`, { lazy: true, server: true, mode: 'no-cors' })
const datas = value.data
const mediaInfo = getSettingMediaResolution(slug)
</script>

<template>
  <div>
    <p class='text-lg text-dark'>Resolusi: {{ mediaInfo.resolution }}</p>
    <div class="mt-5">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
        <img v-for="(item, i) in datas" :src="`${config.public.baseMediaUrl}/images/${item.path_image}`" alt=""
          class="rounded" :width="mediaInfo.widthMedia" :height="mediaInfo.heightMedia" :key="i" />
      </div>
    </div>
  </div>
</template>