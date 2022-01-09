<template>
  <section class="bg-white shadow rounded overflow-hidden">
    <div class="flex flex-wrap">
      <img
        alt
        class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center bg-gray-500"
        loading="lazy"
        :src="product.thumbnail"
      />
      <div class="lg:w-1/2 w-full p-6">
        <h1 class="text-gray-900 text-3xl font-medium mb-1">
          {{ product.title }}
        </h1>
        <p class="leading-relaxed">{{ product.description }}</p>

        <p class="mt-6">
          <span class="font-semibold text-2xl text-orange">$ {{ product.price.toFixed(2) }}</span>
        </p>

        <div class="flex flex-wrap items-center mt-6">
          <div class="flex-1 w-0">
            <button class="button button-orange w-full rounded-full" @click.prevent="handlerAddProductToCart(product)">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    fillStar(n, rating) {
      return n <= rating ? 'currentColor' : 'none'
    },
    handlerAddProductToCart(product) {
      this.$emit('addProductToCart', product)
    },
  },
}
</script>
