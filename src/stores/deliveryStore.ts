import { defineStore } from 'pinia'
import { postDelivery, type DeliveryData } from '../api/postDelivery'

interface DeliveryState {
  deliveryData: unknown | null
  loading: boolean
  error: string | null
}

interface submitDeliveryType {
  id: string
}

export const useDeliveryStore = defineStore('delivery', {
  state: (): DeliveryState => ({
    deliveryData: null,
    loading: false,
    error: null,
  }),
  actions: {
    async submitDelivery(data: DeliveryData): Promise<submitDeliveryType> {
      console.log('submitDelivery', data)
      this.loading = true
      try {
        const response = await postDelivery(data)
        this.deliveryData = response
        return response
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        this.error = 'Erro ao enviar pedido'
        throw new Error('Erro ao enviar pedido')
      } finally {
        this.loading = false
      }
    },
  },
})
