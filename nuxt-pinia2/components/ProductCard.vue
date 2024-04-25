<template>
  <div class="card flex items-center gap-8">
    <img :src="product.img" :alt="product.title" />
    <div>
      <p class="text-2xl text-secondary">{{ product.title }}</p>
      <p class="text-xl text-gray-50">{{ product.description }}</p>
      <p class="text-lg text-secondary my-3">
        {{ product.price }} Silver coins
      </p>
      <button class="btn" @click="addToBasket()" :disabled="isPending">
        <span v-if="!isPending">Add to Basket</span>
        <span v-else>Adding to Basket...</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()
const isPending = ref(false)

const addToBasket = async () => {
  console.log('Adding to basket...')
  isPending.value = true
  await cartStore.addToCart(product)
  setTimeout(() => {
    isPending.value = false
  }, 1000)
  // isPending.value = false
}
//one way to define props
// const props = defineProps({
//   product: {
//     type: Object,
//     required: true,
//   },
// })

//another way to define props
const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped></style>
