<template>
  <div class="calendar-container align-content-center text-center">
    <a href="#" id="cal-month-prev1">
      <img class="my-4" src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/chevron-up-480.png" width="40">
    </a>

    <div id="cal-container"></div>
    
    <a href="#" id="cal-month-next1">
      <img class="my-4" src="https://cdn4.iconfinder.com/data/icons/arrows-9/100/arrow-12-512.png" width="40">
    </a>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex'
import calendar from '../assets/js/calendar'

export default {
  data(){
    return {
    }
  },
  created(){

  },
}
</script>
