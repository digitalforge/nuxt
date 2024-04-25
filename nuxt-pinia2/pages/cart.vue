<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Your Basket</h2>
    <div class="card text-xl" v-if="cartStore.cart.length">
      <!-- Prodcuts list -->
      <div
        v-for="product in cartStore.cart"
        class="flex gap-8 justify-between items-center"
      >
        <div class="flex items-center gap-5">
          <img
            :src="product.img"
            :alt="product.title"
            class="object-scale-down"
          />
          <p class="text-white">{{ product.title }}</p>
          <ProductQuantity :product="product" />
          <p class="text-white">{{ product.price * product.quantity }} coins</p>
        </div>

        <button class="btn" @click="cartStore.removeFromCart(product)">
          <span>Remove</span>
        </button>
      </div>
      <!-- Total -->
      <div class="text-right pt-4 mt-4 border-t-2">
        <span class="text-white">Total amount to pay: </span>
        <span class="text-secondary">{{ cartStore.cartTotal }}</span>
      </div>
    </div>
    <div v-else>
      <p class="text-white text-2xl text-center my-8">
        There are no items in your basket
      </p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped></style>
