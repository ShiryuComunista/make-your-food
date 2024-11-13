<script>
import Header from '@/components/HeaderNavbar.vue'
import Section1 from '@/components/Section1.vue'
import HeaderSection from '@/components/HeaderSection.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Section1,
    HeaderSection,
  },
  data() {
    return {
      name: 'Ainda não sei',
    }
  },
}
</script>

<template>
  <div>
    <HeaderSection />
    <Header />
    <Section1 />
  </div>
</template>
