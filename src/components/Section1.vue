<template>
  <section class="bg-yellow-100 py-[8vh] flex justify-center items-center">
    <div
      class="w-fit h-fit pt-24 pb-24 px-10 bg-slate-100 rounded-lg border-2 border-[#ed9121] py-10 relative"
    >
      <h2
        class="text-2xl rounded-r-lg bg-[#ed9121] font-semibold whitespace-nowrap text-white px-4 py-2 mb-10 absolute left-0 top-4"
      >
        Monte o seu Pedido
      </h2>
      <div class="space-y-5">
        <Forms title="Selecione seu pão" :values="bread" />
        <Forms title="Selecione sua carne" :values="meats" />
        <Forms title="Selecione sua salada" :values="salad" />
        <Forms title="Selecione sua bebida" :values="drink" />
        <Forms title="Selecione seu acompanhamento" :values="sideDish" />
        <button
          class="flex items-center font-semibold space-x-2 rounded-s-lg bg-[#ed9121] text-white px-4 py-2 absolute bottom-5 right-0"
        >
          <span>Fazer pedido</span>
          <PaperAirplaneIcon class="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid' // Atualize para a estrutura correta
import Forms from './Forms.vue'

export default {
  name: 'Section1',
  components: {
    Forms,
    PaperAirplaneIcon, // Registra o ícone da nova estrutura
  },
  setup() {
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
    return {
      meats,
      bread,
      sideDish,
      drink,
      salad,
    }
  },
}
</script>
