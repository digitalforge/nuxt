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

/* THIS IS THE EASIER WAY OF DOING IT*/
//const { data: products } = await useFetch('https://fakestoreapi.com/products')

/**THIS IS USING THE FETCH API */
const products = await fetch('https://fakestoreapi.com/products') // api for the get request
  .then(response => response.json())
  .then(data => data)

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [{ name: 'description', content: 'Nuxt Dojo Merch' }],
})
</script>

<style lang="scss" scoped></style>
