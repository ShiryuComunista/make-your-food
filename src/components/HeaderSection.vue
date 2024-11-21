<template>
  <header
    class="relative h-[28vh] w-full bg-cover bg-center opacity-80"
    :style="{ backgroundImage: `url(${bgImage})` }"
  ></header>
</template>

<script lang="ts">
import bgImage from '@/assets/bg.png'

export default {
  name: 'HeaderSection',
  data() {
    return {
      bgImage,
    }
  },
}
</script>
