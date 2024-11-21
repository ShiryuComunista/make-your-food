import axios from 'axios'

export interface DeliveryData {
  delivery: {
    bread: string
    meats: string
    salad: string
    drink: string
    sideDish: string
    local: boolean
  }
  address: {
    postalCode: string
    address: string
    neighborhood: string
    city: string
    state: string
    complement: string
  }
  payment: {
    attachment: File | null
    fileName: string | null
  }
}

export const postDelivery = async (data: DeliveryData) => {
  try {
    const response = await axios.post('http://localhost:3001/v1/delivery', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    return response.data
  } catch (error) {
    console.error('Erro ao enviar pedido:', error)
    throw error
  }
}
