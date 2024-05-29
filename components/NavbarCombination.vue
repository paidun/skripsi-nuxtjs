<script>
export default {
  data() {
    return {
      isOpenImageNav: false,
      isOpenVideoNav: false,
      isOpenToogleNav: false,
      hoveredIndex: null,
      navigations: {
        images: [
          {
            name: '480p (SD)',
            link: '480p'
          },
          {
            name: '720p (HD)',
            link: '720p'
          },
          {
            name: '1080p (FULL HD)',
            link: '1080p'
          },
          {
            name: '2K',
            link: '2k'
          },
          {
            name: '4K',
            link: '4k'
          },
        ],
        videos: [
          {
            name: '480p (SD)',
            link: '480p'
          },
          {
            name: '720p (HD)',
            link: '720p'
          },
          {
            name: '1080p (FULL HD)',
            link: '1080p'
          },
          {
            name: '2K',
            link: '2k'
          },
          {
            name: '4K',
            link: '4k'
          },
        ]
      },
    };
  },
  methods: {
    handleClickOutside(e) {
      if (this.$refs.imageRef &&
        this.$refs.imageRef.contains &&
        !this.$refs.imageRef.contains(e.target) &&
        this.isOpenImageNav) {
        this.isOpenImageNav = false
      }
      if (this.$refs.videoRef &&
        this.$refs.videoRef.contains &&
        !this.$refs.videoRef.contains(e.target) &&
        this.isOpenVideoNav
      ) {
        this.isOpenVideoNav = false
      }

    },
    handleMouseEnter(index) {
      this.hoveredIndex = index
    },
    handleToogleNav() {
      this.isOpenToogleNav = !this.isOpenToogleNav
    },
    handleMouseLeave() {
      this.hoveredIndex = null
    },
    handleImageNavigation() {
      this.isOpenImageNav = !this.isOpenImageNav
    },
    handleVideoNavigation() {
      this.isOpenVideoNav = !this.isOpenVideoNav
    }
  },
  mounted() {
    window.addEventListener('mousedown', this.handleClickOutside);
  },
}
</script>

<template>
  <nav class="flex justify-between items-center border relative z-30">
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <NuxtLink to="/" class="text-3xl font-bold py-2 uppercase text-black">
            Testing Skripsi
          </NuxtLink>
        </div>
        <div class="flex items-center px-4">
          <button type="button" class="block lg:hidden absolute right-3 px-2 py-1 " v-on:click="handleToogleNav">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div
            :class="`${!isOpenToogleNav ? 'invisible opacity-0 lg:visible lg:opacity-100' : 'block'} p-3 absolute py-5 bg-white shadow-lg rounded-lg max-w-[150px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all`">
            <ul class="flex flex-col gap-y-2 lg:flex-row lg:items-center md:gap-x-10">
              <li class="hover:text-slate-700 pb-1 lg:pb-0 border-b lg:border-0">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="hover:text-slate-700 relative pb-1 lg:pb-0 border-b lg:border-0">
                <button class="flex items-center space-x-1" v-on:click="handleImageNavigation">
                  <span>Images</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-3.5 h-3.5 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div v-if="isOpenImageNav"
                  :class="`border rounded bg-white w-36 max-w-md absolute top-full  lg:mt-2 -ms-8 -left-full lg:ms-3 ${isOpenImageNav ? 'block' : 'hidden'}`"
                  ref="imageRef">
                  <div v-for="(imageNav, i) in navigations.images" :key="i">
                    <NuxtLink :to="`/review-combination/image/${imageNav.link}`"
                      :class="{ 'text-slate-600 bg-slate-50': i === hoveredIndex, 'p-1.5 block border-b': true }"
                      @mouseenter="handleMouseEnter(i)" @mouseleave="handleMouseLeave">
                      {{ imageNav.name }}
                    </NuxtLink>
                  </div>

                </div>
              </li>
              <li class="hover:text-slate-700 relative pb-1 lg:pb-0 border-b lg:border-0">
                <button class="flex items-center space-x-1" v-on:click="handleVideoNavigation">
                  <span>Videos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-3.5 h-3.5 mt-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div v-if="isOpenVideoNav"
                  :class="`border rounded bg-white w-36 max-w-md absolute top-full  lg:mt-2 -ms-8 -left-full lg:ms-3 ${isOpenVideoNav ? 'block' : 'hidden'}`"
                  ref="videoRef">

                  <NuxtLink v-for="(videoNav, i) in navigations.videos"
                    :to="`/review-combination/video/${videoNav.link}`" :key="i"
                    :class="{ 'text-slate-600 bg-slate-50': i === hoveredIndex, 'p-1.5 block border-b': true }"
                    @mouseenter="handleMouseEnter(i)" @mouseleave="handleMouseLeave">
                    {{ videoNav.name }}
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>