import { defineStore } from 'pinia'

const cartUri = 'http://localhost:4000/cart/'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },
    totalItems() {
      return this.cart.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },
  },
  actions: {
    async getCart() {
      const data = await $fetch(cartUri)
      this.cart = data
      //console.log(this.cart)
    },
    async addToCart(product) {
      //check to see if the product already exists
      const exists = this.cart.find(p => {
        return p.id === product.id
      })

      //if it does exist, just update the quantity
      if (exists) {
        this.incQuantity(product)
      }

      if (!exists) {
        this.cart.push({ ...product, quantity: 1 })

        //now make post request to update the JSON
        await $fetch('http://localhost:4000/cart/', {
          method: 'post',
          body: JSON.stringify({ ...product, quantity: 1 }),
        })
      }
    },
    async deleteFromCart(product) {
      this.cart = this.cart.filter(p => p.id !== product.id)

      //NOTE - make delete request from the json server so its up to date
      await $fetch('http://localhost:4000/cart/' + product.id, {
        method: 'DELETE',
      })
    },
    async incQuantity(product) {
      let updatedProduct
      this.cart = this.cart.map(p => {
        if (p.id === product.id) {
          p.quantity++
          updatedProduct = p
        }
        return p
      })

      //make put reqest
      await $fetch('http://localhost:4000/cart/' + product.id, {
        method: 'PUT',
        body: JSON.stringify(updatedProduct),
      })
    },
    async decQuantity(product) {
      let updatedProduct
      this.cart = this.cart.map(p => {
        if (p.id === product.id && p.quantity > 1) {
          p.quantity--
          updatedProduct = p
        }
        return p
      })

      //make put reqest
      if (updatedProduct) {
        await $fetch('http://localhost:4000/cart/' + product.id, {
          method: 'PUT',
          body: JSON.stringify(updatedProduct),
        })
      }
    },
  },
})
