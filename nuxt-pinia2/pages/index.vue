<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">All Products</h2>
    <div class="grid grid-cols-2 gap-7">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
//fetch data from the API

// this is the desctructured version of the code below
const { data: products } = await useFetch('http://localhost:4000/products')

// this is the full version of the code above

//const products2 = ref([])

// const getData = () => {
//   let data = fetch('http://localhost:4000/products')
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       //console.log(data)
//       products2.value = data
//     })
// }

// onMounted(() => {
//   getData()
// })
</script>
<style lang="scss" scoped></style>
