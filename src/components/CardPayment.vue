<template>
  <div
    class="w-[40vh] h-[50vh] flex flex-col justify-between items-center pt-10 pb-10 px-5 bg-slate-100 rounded-lg border-2 border-[#ed9121] relative"
  >
    <h2
      class="text-2xl rounded-r-lg bg-[#ed9121] font-semibold whitespace-nowrap text-white px-4 py-2 absolute left-0 top-4"
    >
      Método de Pagamento
    </h2>
    <div class="flex flex-col items-center py-14">
      <img :src="paymentImg" alt="Método de Pagamento" class="w-[230px] object-contain mb-6" />
      <div class="grid grid-cols-2 gap-2 items-center">
        <label
          for="file_input"
          class="flex items-center justify-center font-semibold text-white bg-[#ed9121] px-4 py-2 rounded cursor-pointer"
        >
          Comprovante
          <input
            id="file_input"
            type="file"
            class="hidden"
            @change="handleFileUpload"
            accept="image/*,.pdf"
          />
        </label>
        <span class="text-gray-700 text-sm truncate max-w-[12rem]">
          {{ localPayment.fileName || 'Nenhum arquivo selecionado' }}
        </span>
      </div>
    </div>
    <button
      class="flex items-center font-semibold space-x-2 rounded-s-lg bg-[#ed9121] text-white px-4 py-2 absolute bottom-5 right-0"
      @click="submitForm"
    >
      <span>Fazer pedido</span>
      <PaperAirplaneIcon class="w-5 h-5 text-white" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import { PaperAirplaneIcon } from '@heroicons/vue/16/solid'
import paymentImg from '../assets/payment.png'

export default defineComponent({
  name: 'CardPayment',
  components: {
    PaperAirplaneIcon,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ['submitForm', 'update:modelValue'],
  setup(props, { emit }) {
    const localPayment = reactive({
      attachment: props.modelValue.attachment || null,
      fileName: props.modelValue.fileName || '',
    })

    watch(
      () => props.modelValue,
      (newValue) => {
        localPayment.attachment = newValue.attachment || null
        localPayment.fileName = newValue.fileName || ''
      },
      { deep: true },
    )

    const handleFileUpload = (e: Event) => {
      const fileInput = e.target as HTMLInputElement
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0]

        localPayment.attachment = file
        localPayment.fileName = file.name

        emit('update:modelValue', {
          attachment: file,
          fileName: file.name,
        })
      }
    }

    const submitForm = () => {
      if (!localPayment.attachment) {
        alert('Por favor, selecione um comprovante de pagamento')
        return
      }
      emit('submitForm')
    }

    return {
      localPayment,
      paymentImg,
      handleFileUpload,
      submitForm,
    }
  },
})
</script>
