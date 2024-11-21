<template>
  <div
    class="w-fit h-[50vh] pt-24 pb-24 px-10 bg-slate-100 rounded-lg border-2 border-[#ed9121] py-10 relative"
  >
    <h2
      class="text-2xl rounded-r-lg bg-[#ed9121] font-semibold whitespace-nowrap text-white px-4 py-2 mb-10 absolute left-0 top-4"
    >
      Endereço para Entrega
    </h2>
    <div class="space-y-5">
      <TextField title="CEP" v-model="internalValue.postalCode" />
      <TextField title="Endereço" v-model="internalValue.address" />
      <TextField title="Bairro" v-model="internalValue.neighborhood" />
      <TextField title="Cidade" v-model="internalValue.city" />
      <TextField title="Estado" v-model="internalValue.state" />
      <TextField title="Complemento" v-model="internalValue.complement" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, watch } from 'vue'
import TextField from './TextField.vue'

export default {
  name: 'CardAddress',
  components: {
    TextField,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const internalValue = reactive({ ...props.modelValue })

    watch(
      internalValue,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true },
    )

    return { internalValue }
  },
}
</script>
