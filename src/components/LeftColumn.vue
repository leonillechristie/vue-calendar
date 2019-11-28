<template>
<div class="charts-container">
  <div class="pie-container pl-5 row m-auto">
    <div class="donut-labels" style="align-self: center;">
      <h6>TOTAL SALES</h6>
      <div class="current-month row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #81cd4e;"></div>
        <small class="my-0 mx-2">CURRENT MONTH</small>
      </div>
      <div class="last-month row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #dadcde;"></div>
        <small class="my-0 mx-2">LAST MONTH</small>
      </div>
    </div>
    <div id="pieChart"></div>
  </div>

  <div class="stacked-donut-container row m-auto">
    <div id="stackedDonut"></div>

    <div class="donut-labels" style="align-self: center;">
      <h6>TOTAL SCHEDULED</h6>
      <h6>HOURS</h6>
      <div class="completed-tasks row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #81cd4e;"></div>
        <small class="my-0 mx-2">SERVICE</small>
      </div>
      <div class="late-tasks row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #f06177;"></div>
        <small class="my-0 mx-2">CALLS</small>
      </div>
      <div class="coming-tasks row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #41b5e7;"></div>
        <small class="my-0 mx-2">DEMOS</small>
      </div>
    </div>
  </div>

  <div class="donut-container pl-5 row m-auto">
    <div class="donut-labels" style="align-self: center;">
      <h6>TOTAL TASKS</h6>
      <div class="completed-tasks row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #f06177;"></div>
        <small class="my-0 mx-2">COMPLETED</small>
      </div>
      <div class="late-tasks row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #81cd4e;"></div>
        <small class="my-0 mx-2">PAST DUE</small>
      </div>
      <div class="coming-tasks row m-auto" style="align-items: center;">
        <div style="height: 10px; width: 10px; background-color: #dadcde;"></div>
        <small class="my-0 mx-2">COMING UP</small>
      </div>
    </div>
    <div id="donutChart"></div>
  </div>

  <div id="cal-date" style="display: none;">
    <select id="cal-mth"></select>
    <select id="cal-yr"></select>
    <input id="cal-set" type="button" value="SET"/>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex'
import calendar from '../assets/js/calendar'

export default {
  data(){
    return {
      pieData: {lastMonth: 2000, currentMonth: 1500},
      donutData: { pastDue: 15, complete: 30, comingUp:65 },
      stackedData: {
        service: [10, 5, 5],
        calls: [60, 150, 0],
        demo: [50, 60, 250],
      },
      chartWidth: 250,
      chartHeight: 250,
      chartMargin: 40,
     }
  },
  mounted(){
    this.createDonut(); 
    this.pieChart();
    this.stackedDonutChart();
  },
  methods: {
    pieChart() {
      var radius = Math.min(this.chartWidth, this.chartHeight) / 2 - this.chartMargin

      var svg = d3.select("#pieChart")
        .append("svg")
          .attr("width", this.chartWidth)
          .attr("height", this.chartHeight)
        .append("g")
          .attr("transform", "translate(" + this.chartWidth / 2 + "," + this.chartHeight / 2 + ")");

      var color = d3.scaleOrdinal()
        .domain(this.pieData)
        .range(["#dadcde", "#81cd4e" ])

      var pie = d3.pie()
        .value(function(d) {return d.value; })

      var data_ready = pie(d3.entries(this.pieData))
             
      svg
        .selectAll('pie-chart')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
          .innerRadius(0)
          .outerRadius(radius)
          .startAngle(function(d) { return d.startAngle + Math.PI/1.17; })
          .endAngle(function(d) { return d.endAngle + Math.PI/1.17; })
        )
        .attr('fill', function(d){ return(color(d.data.key)) })
        .attr("stroke", "white")
        .style("stroke-width", "3px")
        .append("title")
          .text(function(d) { return d.data.value; });
    },
    createDonut() {
      var radius = Math.min(this.chartWidth, this.chartHeight) / 2 - this.chartMargin

      var svg = d3.select("#donutChart")
      .append("svg")
        .attr("width", this.chartWidth)
        .attr("height", this.chartWidth)
      .append("g")
        .attr("transform", "translate(" + this.chartWidth / 2 + "," + this.chartHeight / 2 + ")");

      var color = d3.scaleOrdinal()
        .domain(this.donutData)
        .range(["#f06177", "#81cd4e", "#dadcde"])

      var pie = d3.pie()
        .value(function(d) {return d.value; })
      var data_ready = pie(d3.entries(this.donutData))

      svg
      .selectAll('donut-chart')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(55)     
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "3px")
      .append("title")
        .text(function(d) { return d.data.value; });
    },
    stackedDonutChart() {      
      var arc = d3.arc()
      var color = d3.scaleOrdinal()
        .domain(this.pieData)
        .range(["#81cd4e", "#f06177", "#41b5e7"]);

      var pie = d3.pie().sort(null);

      var svg = d3.select("#stackedDonut")
        .append("svg")
        .attr("width", this.chartWidth)
        .attr("height", this.chartHeight)
        .append("g")
        .attr("transform", "translate(" + this.chartWidth / 2 + "," + this.chartHeight / 2 + ")");

      var gs = svg.selectAll("g").data(d3.values(this.stackedData)).enter().append("g");
      let cwidth = 15;
      var path = gs.selectAll("path")
        .data(function(d) {return pie(d); })
        .enter().append("path")
        .attr("fill", function(d, i) { return color(i); })
        .attr("d", function(d, i, j) { return arc.innerRadius(10+cwidth*i).outerRadius(cwidth*(i+1))(d); });
    }
  }
}
</script>
