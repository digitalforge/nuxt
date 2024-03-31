export default defineEventHandler(async event => {
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_O7aqsRfijkO34E3RE8ans0Nn5OeesQ2c5XjwAJTJ'
  )

  return data
  //handle query params
  //const { name } = getQuery(event)

  //handle post data
  //const { age } = await readBody(event)

  // api call with private key
  // why not go with 'useFetch' ? when we are using server routes go with '$fetch' instead

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`,
  // }
})
