<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})

//fetch the products from the fakestore api
//const { data: products } = await useFetch('https://fakestoreapi.com/products')
const products = await fetch('https://fakestoreapi.com/products') // api for the get request
  .then(response => response.json())
  .then(data => data)
</script>

<style lang="scss" scoped></style>
