<template>
  <div
    class="w-fit h-[50vh] pt-24 pb-24 px-10 bg-slate-100 rounded-lg border-2 border-[#ed9121] py-10 relative"
  >
    <h2
      class="text-2xl rounded-r-lg bg-[#ed9121] font-semibold whitespace-nowrap text-white px-4 py-2 mb-10 absolute left-0 top-4"
    >
      Monte seu Pedido
    </h2>
    <div class="space-y-5">
      <CustomSelect title="Selecione seu pão" v-model="localDelivery.bread" :options="bread" />
      <CustomSelect title="Selecione sua carne" v-model="localDelivery.meats" :options="meats" />
      <CustomSelect title="Selecione sua salada" v-model="localDelivery.salad" :options="salad" />
      <CustomSelect title="Selecione sua bebida" v-model="localDelivery.drink" :options="drink" />
      <CustomSelect
        title="Selecione seu acompanhamento"
        v-model="localDelivery.sideDish"
        :options="sideDish"
      />
      <CustomCheckbox label1="Comer no local" label2="Para viagem" v-model="localDelivery.local" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import CustomSelect from './CustomSelect.vue'
import CustomCheckbox from './CustomCheckbox.vue'

export default defineComponent({
  name: 'CardRequest',
  components: {
    CustomSelect,
    CustomCheckbox,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const meats = ['Bovino', 'Suíno', 'Frango']
    const bread = [
      'Pão branco italiano',
      'Pão Integral',
      'Pão com Sementes',
      'Pão de Queijo e Ervas',
    ]
    const salad = ['Alface', 'Tomate', 'Cebola', 'Pepino', 'Pimentão', 'Azeitona']
    const drink = ['Água', 'Refrigerante', 'Milkshake']
    const sideDish = ['Cookies', 'Maçã', 'Batata frita', 'Brownie']

    const localDelivery = reactive({ ...props.modelValue })

    watch(
      localDelivery,
      (newValue) => {
        emit('update:modelValue', { ...newValue })
      },
      { deep: true },
    )

    watch(
      () => props.modelValue,
      (newValue) => {
        Object.assign(localDelivery, newValue)
      },
      { deep: true },
    )

    return {
      localDelivery,
      meats,
      bread,
      sideDish,
      drink,
      salad,
    }
  },
})
</script>
