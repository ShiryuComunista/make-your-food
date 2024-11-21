<template>
  <form class="max-w-sm mx-auto">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <label
        for="select-{{ title }}"
        class="text-sm font-medium text-[#ed9121] dark:text-[#ed9121]"
      >
        {{ title }}
      </label>
      <select
        v-model="selectedValue"
        id="select-{{ title }}"
        class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-[35px] w-full"
      >
        <option v-for="(item, index) in options" :key="index" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: false,
    },
  },
  data() {
    return {
      selectedValue: this.modelValue || '',
    }
  },
  watch: {
    selectedValue(newValue) {
      this.$emit('update:modelValue', newValue)
    },
  },
}
</script>
