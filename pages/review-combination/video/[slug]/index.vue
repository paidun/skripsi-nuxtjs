<script setup>

definePageMeta({
  layout: 'combination'
})
useSeoMeta({
  title: "TESTING | Kombinasi Video"
})
const config = useRuntimeConfig()
const route = useRoute()
const { slug } = route.params
const { data: { value } } = await useFetch(`${config.public.baseUrl}/reviews/review-combination-video/vid-${slug}`, { lazy: true, server: true, mode: 'no-cors' })
const datas = value.data
const mediaInfo = getSettingMediaResolution(`vid-${slug}`)
const posterVideo = `poster-${mediaInfo.resolution}.png`;
</script>

<template>

  <section id="review combination" class='mt-16'>
    <div class="container">
      <h1 class='text-3xl font-semibold text-dark'>Review Kombinasi Video</h1>
      <p class='text-lg text-dark'>Resolusi: {{ mediaInfo.resolution }}</p>
      <div class="my-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardVideo :name="item.name" :area="item.area" v-for="(item, i) in datas" :widthVideo="mediaInfo.widthMedia"
            :reviewText="item.review_text" :reviewDate="item.review_date" :rating="item.rating"
            :heightVideo="mediaInfo.heightMedia" :key="i + 1"
            :sourceVideo="`${config.public.baseMediaUrl}/videos/${item.path_video}`"
            :poster="`${config.public.baseMediaUrl}/videos/${posterVideo}`" />
        </div>
      </div>
    </div>
  </section>
</template>