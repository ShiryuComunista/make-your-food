<template>
  <form class="max-w-sm mx-auto">
    <div class="flex items-center space-x-4 rtl:space-x-reverse space-y-[5px]">
      <label
        for="select-{{ title }}"
        class="text-sm font-medium text-[#ed9121] dark:text-[#ed9121]"
      >
        {{ title }}
      </label>
      <input
        type="text"
        id="select-{{ title }}"
        v-model="internalValue"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[35px]"
        required
      />
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
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      internalValue: this.modelValue,
    }
  },
  watch: {
    modelValue(newValue) {
      this.internalValue = newValue
    },
    internalValue(newValue) {
      this.$emit('update:modelValue', newValue)
    },
  },
}
</script>
