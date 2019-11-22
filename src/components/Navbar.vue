<template>
  <div class="navbar-container">
    <b-navbar toggleable="lg" type="light" class="nav-parent" style="">
      <div>
        <div class="badge-container">
          <div class="milestone"><span class="milestone-count">1</span><span class="badge">2</span></div>
          <div class="label-container"><small class="text-muted milestone-label">Milestone 1</small></div>
        </div>
      </div>
      
      <div class="divider-vertical mx-4"></div>

      <div class="row">
        <div v-if="isActive" class="ml-4 mr-2 text-center settings-container">
          <img id="calendar-settings" src="../assets/img/cal-ac.png" width="25">
          <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label active-month">Month</small></div>
        </div>

        <div v-else class="ml-4 mr-2 text-center settings-container">
          <img id="calendar-settings" src="../assets/img/cal-in.png" width="25">
          <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label">Month</small></div>
        </div>

        <div class="mx-2 text-center settings-container">
          <img id="calendar-settings" src="../assets/img/cal-in.png" width="25">
          <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label">Week</small></div>
        </div>

        <div class="ml-2 mr-5 text-center settings-container">
          <img id="calendar-settings" src="../assets/img/cal-in.png" width="25">
          <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label">Day</small></div>
        </div>
      </div>
      
      <div class="row" style="width: 1%;">
        <div class="col-12">
          <a href="#" id="cal-month-prev">
            <img src="https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/previous-512.png" width="30">
          </a>
        </div>
        <div class="col-12" style="margin-top: 10px;">
          <span id="cal-year"></span>
        </div>
      </div>

      <div class="mx-3 row" id="month-headers"></div>
      <a href="#" id="cal-month-next">
        <img src="https://cdn2.iconfinder.com/data/icons/arrows-vol-1-1/32/right-512.png" width="30">
      </a>

    </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isActive: true,
    }
  },
  created() {

  }
}
</script>

<style>
  .active-month {
    color: #60beec!important;
  }
</style>