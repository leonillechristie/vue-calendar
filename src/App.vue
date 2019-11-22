<template>
  <div>
      <Navbar />
      <div class="daysOfTheWeek row mx-auto my-3 d-flex justify-content-center">
        <h5 v-for="item in items" class="mx-5 daysHeader">
          {{ item.day }}
        </h5>
      </div>

      <div class="container-fluid row">
        <div class="col-lg-3 m-auto">
          <Charts/>
        </div>

        <div class="col-lg-6 m-auto">
          <Calendar/>
        </div>

        <div class="col-lg-3 m-auto">
          <Events/>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Charts from './components/LeftColumn.vue'
import Calendar from './components/MainContent.vue'
import Events from './components/RightColumn.vue'

export default {
  components: {
    Navbar,
    Charts,
    Calendar,
    Events
  },
  computed: { },
  data() {
    return {
      items: [
      { day: 'SUN' },
      { day: 'MON' },
      { day: 'TUE' },
      { day: 'WED' },
      { day: 'THU' },
      { day: 'FRI' },
      { day: 'SAT' }
      ]
    }
  }
}
</script>

<style style="scss">
@import './assets/css/style.css';
@import './assets/css/navbar.css';
@import './assets/css/calendar.css';
@import './assets/css/events.css';
</style>
