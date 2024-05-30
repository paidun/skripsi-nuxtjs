<script setup>
definePageMeta({
  layout: 'header'
})

useSeoMeta({
  title: "TESTING | Review Text"
})
const config = useRuntimeConfig()
const { data: { value } } = await useFetch(`${config.public.baseUrl}/reviews/review-text`, { lazy: false, server: true })
const datas = value.data

</script>

<template>
  <section id="review text" class='mt-16'>
    <div class="container">
      <h1 class='text-3xl font-semibold text-dark'>Review Text</h1>
      <div class="my-6">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase border-b text-center">
              <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50">
                  No
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50">
                  Area
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50">
                  Rating
                </th>
                <th scope="col" class="px-6 py-3">
                  Review
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-gray-200 " v-for="(item, i) in datas" key={i}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 text-center">
                  {{ i + 1 }}
                </th>
                <td class="px-6 py-4 text-center capitalize">
                  {{ item.name }}
                </td>
                <td class="px-6 py-4 text-center bg-gray-50 capitalize">
                  {{ item.area }}
                </td>
                <td class="px-6 py-4 text-center capitalize">
                  {{ item.review_date }}
                </td>
                <td class="px-6 py-4 text-center bg-gray-50 capitalize">
                  {{ item.rating }}
                </td>
                <td class="px-6 py-4 normal-case">
                  {{ item.review_text }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>