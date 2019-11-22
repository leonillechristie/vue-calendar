<template>
<div class="charts-container">
  <div id="cal-date" style="display: none;">
    <select id="cal-mth"></select>
    <select id="cal-yr"></select>
    <input id="cal-set" type="button" value="SET"/>
  </div>
  
  <canvas id="myChart" width="400" height="400"></canvas>

</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex'
import calendar from '../assets/js/calendar'

export default {
  data(){
    return {
      datasets: [{
        data: [10, 20, 30]
      }],

      labels: [
        'Red',
        'Yellow',
        'Blue'
      ]
    }
  },
  created(){
    var ctx = document.getElementById('myChart');
    var ctx = document.getElementById('myChart').getContext('2d');

    var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
  },
}
</script>

<script>

  
</script>