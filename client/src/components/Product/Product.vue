<template>
  <div class="w-full bg-white shadow rounded pb-5 flex flex-col overflow-hidden">
    <div class="block relative h-48 overflow-hidden">
      <img
        :src="product.thumbnail"
        loading="lazy"
        class="object-cover object-center w-full h-full block bg-gray-500"
      />
    </div>
    <div class="px-3 flex-1">
      <h2 class="text-gray-900 text-base font-medium my-3">
        {{ product.title }}
      </h2>
      <p class="mb-3 text-lg font-bold text-orange">$ {{ product.price.toFixed(2) }}</p>
    </div>
    <div class="px-3">
      <router-link
        :to="`/product/${product.id}`"
        class="button button-orange w-full rounded-full"
        >View Details</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>
