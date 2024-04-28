<template>
  <div class="flex justify-center bg-[#FFF6E3] h-14 border-b-2 border-black">
    <Navbar />
  </div>

  <div class="">
    <RouterView />
  </div>

  <div class="">
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
