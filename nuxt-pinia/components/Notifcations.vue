<template>
  <div
    ref="noteAddedRef"
    class="fixed bottom-10 right-10 bg-white text-primary p-4 transition-all rounded-md translate-x-12 opacity-0 duration-500"
  >
    <div class="text-xl flex items-center gap-3">
      <img class="w-8" :src="props.image" v-if="props.image" />{{ props.text }}
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()
const noteAddedRef = ref(null)

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: ' ',
  },
  image: {
    type: String,
    default: '',
  },
})

watch(
  () => cartStore.notifyObject,
  newVal => {
    if (newVal && cartStore.notifyObject) {
      noteAddedRef.value.classList.add('show-notification')
      setTimeout(() => {
        noteAddedRef.value.classList.remove('show-notification')
      }, 3000)
    }
  }
)

const emits = defineEmits(['update:modelValue', 'generateText'])
</script>

<style lang="scss" scoped></style>
