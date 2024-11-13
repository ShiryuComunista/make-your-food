<template>
  <form class="max-w-sm mx-auto">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <label for="meat-select" class="text-sm font-medium text-[#ed9121] dark:text-[#ed9121]">
        {{ title }}
      </label>
      <select
        id="meat-select"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-[35px] w-full"
      >
        <option v-for="(item, index) in values" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('values')
})
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
}
</script>
