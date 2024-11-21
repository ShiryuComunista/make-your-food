<template>
  <section class="bg-yellow-100 py-[8vh] flex justify-center items-center overflow-y-hidden">
    <form @submit.prevent="handleSubmit" class="space-x-12 flex flex-row">
      <CardRequest v-model="formData.delivery" :key="formKey" />
      <CardAddress v-model="formData.address" :key="formKey" />
      <CardPayment v-model="formData.payment" :key="formKey" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import CardAddress from './CardAddress.vue'
import CardPayment from './CardPayment.vue'
import CardRequest from './CardRequest.vue'
import { useDeliveryStore } from '../stores/deliveryStore'
import { useToast } from 'vue-toastification'

export default defineComponent({
  name: 'CustomSection',
  components: {
    CardRequest,
    CardAddress,
    CardPayment,
  },
  setup() {
    const formKey = ref(0)

    const initialFormData = () => ({
      delivery: {
        bread: '',
        meats: '',
        salad: '',
        drink: '',
        sideDish: '',
        local: false,
      },
      address: {
        postalCode: '',
        address: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: '',
      },
      payment: {
        attachment: null,
        fileName: null,
      },
    })

    const formData = reactive(initialFormData())

    const toast = useToast()
    const deliveryStore = useDeliveryStore()

    const handleSubmit = async () => {
      try {
        const response = await deliveryStore.submitDelivery(formData)

        if (response.id) {
          toast.success(`Pedido feito com sucesso: ${response.id}`)
          Object.assign(formData, initialFormData())
          formKey.value++
        } else {
          toast.error('Erro ao realizar pedido!')
        }
      } catch (error) {
        toast.error('Erro ao realizar pedido!')
        console.log(error)
      }
    }

    return { formData, handleSubmit, formKey }
  },
})
</script>
