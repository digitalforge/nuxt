<template>
  <div class="m-8">
    <header class="wrapper flex justify-between">
      <NuxtLink to="/">
        <h1 class="text-secondary text-5xl">Adventure Store</h1>
      </NuxtLink>
      <NuxtLink to="/cart">
        <div class="flex items-center">
          <p v-if="cartStore.totalItems > 0" class="text-white">
            {{ cartItemText }} ready for checkout
          </p>
          <span class="material-icons-outlined text-secondary text-5xl"
            >shopping_bag</span
          >
        </div>
      </NuxtLink>
    </header>
    <div class="wrapper"><slot /></div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()

const cartItemText = computed(() => {
  return cartStore.totalItems === 1
    ? cartStore.totalItems + ' item'
    : cartStore.totalItems + ' items'
})

cartStore.getCart()
</script>

<style></style>
