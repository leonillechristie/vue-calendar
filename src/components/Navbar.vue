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

        <div class="calendar-settings row">
          <div class="ml-4 mr-2 text-center">
            <img src="https://cdn0.iconfinder.com/data/icons/time-date/24/calendar-date-empty-512.png" width="25">
            <div class="label-container"><small class="text-muted milestone-label">Month</small></div>
          </div>

          <div class="mx-2 text-center">
            <img src="https://cdn0.iconfinder.com/data/icons/time-date/24/calendar-date-empty-512.png" width="25">
            <div class="label-container"><small class="text-muted milestone-label">Week</small></div>
          </div>

          <div class="ml-2 mr-4 text-center">
            <img src="https://cdn0.iconfinder.com/data/icons/time-date/24/calendar-date-empty-512.png" width="25">
            <div class="label-container"><small class="text-muted milestone-label">Day</small></div>
          </div>
        </div>
        
    </b-navbar>
  </div>
</template>
