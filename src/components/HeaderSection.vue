<template>
  <header
    class="relative h-[28vh] w-full bg-cover bg-center opacity-80"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <!-- Conteúdo adicional, se necessário -->
  </header>
</template>

<script>
import bgImage from '@/assets/bg.png' // Certifique-se que o caminho está correto

export default {
  name: 'HeaderSection',
  data() {
    return {
      bgImage,
    }
  },
}
</script>
