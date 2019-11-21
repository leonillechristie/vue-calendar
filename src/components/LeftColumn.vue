<template>
  <div id="cal-date">
    <select style="display:none;" id="cal-mth"></select>
    <select style="display:none;" id="cal-yr"></select>
    <input style="display:none;" id="cal-set" type="button" value="SET"/>
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
