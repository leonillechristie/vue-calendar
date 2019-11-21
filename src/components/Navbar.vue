<template>
  <div class="navbar-container">
    <b-navbar toggleable="lg" type="light" class="nav-parent">
        <div>
            <div class="badge-container">
              <div class="milestone"><span class="milestone-count">1</span><span class="badge">2</span></div>
              <div class="label-container"><small class="text-muted milestone-label">Milestone 1</small></div>
            </div>
        </div>
        
        <div class="divider-vertical mx-4"></div>

        <div class="row">
          <div class="ml-4 mr-2 text-center settings-container">
            <img id="calendar-settings" src="https://cdn0.iconfinder.com/data/icons/time-date/24/calendar-date-empty-512.png" width="25">
            <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label">Month</small></div>
          </div>

          <div class="mx-2 text-center settings-container">
            <img id="calendar-settings" src="https://cdn0.iconfinder.com/data/icons/time-date/24/calendar-date-empty-512.png" width="25">
            <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label">Week</small></div>
          </div>

          <div class="ml-2 mr-5 text-center settings-container">
            <img id="calendar-settings" src="https://cdn0.iconfinder.com/data/icons/time-date/24/calendar-date-empty-512.png" width="25">
            <div id="calendar-settings" class="label-container"><small class="text-muted milestone-label">Day</small></div>
          </div>
        </div>
        
        <img src="https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/previous-512.png" width="30">
        <div class="mx-3 row" id="month-headers" ></div>
        <img src="https://cdn2.iconfinder.com/data/icons/arrows-vol-1-1/32/right-512.png" width="30">
    </b-navbar>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created() {
    
  }
}
</script>

<style>
  .testStyle {
    font-size: 1.5em; 
    cursor: pointer;
    margin: auto;
  }

</style>

