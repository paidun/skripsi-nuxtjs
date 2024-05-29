<template>
  <div>
    <video class="rounded-sm aspect-video object-fill" :width="widthVideo" :height="heightVideo" preload="none"
    :poster="poster" controls muted>
      <source :src="sourceVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="w-full">
      <div class="flex justify-between items-center">
        <h3 class="text-base font-semibold">{{ name }}</h3>
        <h3 class="text-sm truncate">Rating: {{ rating }}</h3>
      </div>
      <div class="flex justify-between items-center">
        <h3 class="text-base font-semibold">{{ area }}</h3>
        <h3 class="text-sm truncate">{{ reviewDate }}</h3>
      </div>
      <p class='line-clamp-2'>{{ reviewText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVideo",
  props: {
    name: {
      type: String,
      default: '',
    },
    area: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
    },
    reviewDate: {
      type: String,
      default: ''
    },
    reviewText: {
      type: String,
      default: ''
    },
    sourceVideo: {
      type: String,
      default: '',
    },
    widthVideo: {
      type: String,
      default: ''
    },
    heightVideo: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    },
  },
};
</script>