<template>
  <div>
    <main>
      <Navbar />
      <div class="container-fluid">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  computed: { }
}
</script>

<style>
  @import './assets/css/style.css';
</style>