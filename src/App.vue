<template>
  <div>
    <main>
      <Navbar />
      <div class="daysOfTheWeek row mx-auto my-3 d-flex justify-content-center">
        <h5 v-for="item in items" class="mx-5 daysHeader">
        {{ item.day }}
        </h5>
      </div>

      <div class="container-fluid row">
            <div class="col-lg-3">
              <Charts/>
            </div>

            <div class="col-lg-6">
              <Calendar/>
            </div>

            <div class="col-lg-3">
              <Events/>
            </div>
      </div>
    </main>
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
  data(){
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

<style>
  @import './assets/css/style.css';
  @import './assets/css/calendar.css';

  .daysOfTheWeek {
    border-bottom: solid 1px #e3e3e4;
    background-color: #fbfbfd;
  }

  .daysHeader {
    color: #7f7f80;
  }
</style>