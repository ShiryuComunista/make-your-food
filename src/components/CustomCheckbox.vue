<template>
  <form class="max-w-sm mx-auto">
    <div class="flex mt-8 justify-between items-center">
      <div class="flex items-center">
        <input
          id="checkbox1"
          type="checkbox"
          :checked="modelValue"
          @change="updateValue(true)"
          class="w-4 h-4"
        />
        <label for="checkbox1" class="ms-2 text-sm font-medium text-[#ed9121]">
          {{ label1 }}
        </label>
      </div>

      <div class="flex items-center">
        <input
          id="checkbox2"
          type="checkbox"
          :checked="!modelValue"
          @change="updateValue(false)"
          class="w-4 h-4"
        />
        <label for="checkbox2" class="ms-2 text-sm font-medium text-[#ed9121]">
          {{ label2 }}
        </label>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomCheckbox ',
  props: {
    label1: {
      type: String,
      required: true,
    },
    label2: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    updateValue(newValue: boolean) {
      this.$emit('update:modelValue', newValue)
    },
  },
})
</script>
