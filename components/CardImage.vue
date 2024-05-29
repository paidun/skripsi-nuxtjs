<template>
  <div>
    <img :src="sourceImage" alt="" class="rounded" :width="widthImage" :height="heightImage" />
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
  name: "CardImage",
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
    sourceImage: {
      type: String,
      required: true,
    },
    widthImage: {
      type: String,
      required: true
    },
    heightImage: {
      type: String,
      required: true
    }
  },
};
</script>