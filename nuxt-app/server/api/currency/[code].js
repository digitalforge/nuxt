export default defineEventHandler(async event => {
  const { code } = event.context.params
  console.log(code)
  const { currencyKey } = useRuntimeConfig()

  //const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

  //const { data } = await $fetch(uri)
  let data
  if (!data) {
    console.log('No data')
  }

  return code
})
