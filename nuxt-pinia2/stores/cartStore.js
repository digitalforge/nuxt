import { defineStore } from 'pinia'

const cartServer = 'http://localhost:4000/cart/'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotal: state => {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },
    totalItems: state => {
      return state.cart.reduce((total, item) => {
        return total + item.quantity
      }, 0)
    },
    // cartTotal() {
    //   let totalPrice = 0
    //   this.cart.forEach(item => {
    //     totalPrice += item.price * item.quantity
    //   })
    //   return totalPrice
    // },
  },
  actions: {
    async getCart() {
      const cartItems = await $fetch(cartServer)
      this.cart = cartItems
    },
    async addToCart(product) {
      // check first to see if the item in cart exists
      const itemExists = this.cart.find(p => p.id === product.id)

      if (itemExists) {
        this.increaseQuantity(product)
      }

      if (!itemExists) {
        this.cart.push({ ...product, quantity: 1 })
        await $fetch(cartServer, {
          method: 'POST',
          body: JSON.stringify({ ...product, quantity: 1 }),
        })
      }
    },
    async removeFromCart(product) {
      this.cart = this.cart.filter(p => p.id !== product.id)

      await $fetch(cartServer + product.id, {
        method: 'DELETE',
      })
    },

    async increaseQuantity(product) {
      //NOTE - a little bit of explination for this - you can't just update 1 item in the JSON server you have to send the entire item to the server with put method
      let updatedProduct

      this.cart = this.cart.map(p => {
        if (p.id === product.id) {
          p.quantity++
          updatedProduct = p
        }
        return p
      })

      //NOTE - Now we have to updat the JSON server
      await $fetch(cartServer + product.id, {
        method: 'PUT',
        body: JSON.stringify(updatedProduct),
      })
    },

    async decreaseQuantity(product) {
      let updatedProduct

      this.cart = this.cart.map(p => {
        if (p.id === product.id && p.quantity > 1) {
          p.quantity--
          updatedProduct = p
        }
        return p
      })

      //NOTE - Now we have to update the JSON server
      await $fetch(cartServer + product.id, {
        method: 'PUT',
        body: JSON.stringify(updatedProduct),
      })
    },
  },
})
