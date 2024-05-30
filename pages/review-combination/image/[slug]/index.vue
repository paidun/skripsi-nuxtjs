<script setup>

definePageMeta({
  layout: 'combination'
})
useSeoMeta({
  title: "TESTING | Kombinasi Gambar"
})
const config = useRuntimeConfig()
const route = useRoute()
const { slug } = route.params
const { data: { value } } = await useFetch(`${config.public.baseUrl}/reviews/review-combination-image/img-${slug}`, { lazy: false, server: true })
const datas = value.data
const mediaInfo = getSettingMediaResolution(`img-${slug}`)

</script>

<template>

  <section id="review combination" class='mt-16'>
    <div class="container">
      <h1 class='text-3xl font-semibold text-dark'>Review Kombinasi Gambar</h1>
      <p class='text-lg text-dark'>Resolusi: {{ mediaInfo.resolution }}</p>
      <div class="my-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardImage :name="item.name" :area="item.area" v-for="(item, i) in datas" :widthImage="mediaInfo.widthMedia"
            :reviewText="item.review_text" :reviewDate="item.review_date" :rating="item.rating"
            :heightImage="mediaInfo.heightMedia" :key="i + 1"
            :sourceImage="`${config.public.baseMediaUrl}/images/${item.path_image}`" />
        </div>
      </div>
    </div>
  </section>
</template>