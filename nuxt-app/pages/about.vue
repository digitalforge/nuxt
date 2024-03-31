<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi qui, quam
      deleniti fuga hic dolorem, rerum eum quis maxime a illum totam facilis
      amet dolore labore incidunt, cum ipsa. Aliquid.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tempore
      fuga facere perspiciatis sunt suscipit autem adipisci recusandae molestiae
      dolores quisquam nobis officia molestias aliquam necessitatibus, tempora
      maiores magnam quos.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
//const { data } = await useFetch('/api/ninja?name=mario')
// const { data } = await useFetch('/api/ninja?name=mario', {
//   method: 'POST',
//   body: { age: 30 },
// })

const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
</style>
