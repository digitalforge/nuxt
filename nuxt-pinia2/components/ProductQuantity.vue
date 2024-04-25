<template>
  <div class="flex">
    <button class="btn" @click="cartStore.decreaseQuantity(product)">-</button>
    <p class="py-1 px-4 mx-1 rounded-sm text-lg bg-gray-200">
      {{ product.quantity }}
    </p>
    <button class="btn" @click="cartStore.increaseQuantity(product)">+</button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'
const { product } = defineProps(['product'])

const cartStore = useCartStore()
</script>

<style lang="scss" scoped></style>
