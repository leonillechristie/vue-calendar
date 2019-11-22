<template>
  <!-- <div>
    <tr v-for="event in events"
      :key="event.event_id">
      <th scope="row" class="bodyTable">{{ event.item_id }}</th>
      <td class="bodyTable">{{ event.event_name }}</td>
      <td class="bodyTable">{{ event.location }}</td>
      <td class="bodyTable">{{ event.start_time }}</td>
      <td class="bodyTable">{{ event.end_time }}</td>
    </tr>
  </div> -->

  <table id="events-table"  class="table">
    <tbody v-for="event in events" :key="event.event_id">
      <tr>
        <th class="calendar-time px-0">8 <span>AM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">9 <span>AM</span></th>
        <th class="event-none"></th>
        <th class="event-a">
          <span class="event-detail">{{event.name.title}} {{event.name.first}}</span>
        </th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">10 <span>AM</span></th>
        <th class="event-none"></th>
        <th class="event-a">
          <span class="event-detail">{{event.location.city}}</span>
        </th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">11 <span>AM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">12 <span>PM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">1 <span>PM</span></th>
        <th class="event-c">
          <span class="event-detail">{{event.name.title}} {{event.name.first}} </span>
        </th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">2 <span>PM</span></th>
        <th class="event-c"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">3 <span>PM</span></th>
        <th class="event-c"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">4 <span>PM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">5 <span>PM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">6 <span>PM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-b">
          <span class="event-detail">{{event.name.title}} {{event.name.first}}</span>
        </th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">7 <span>PM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-b">
          <span class="event-detail">{{event.location.city}}</span>
        </th>
        <th class="event-none"></th>
      </tr>
      <tr>
        <th class="calendar-time px-0">8 <span>PM</span></th>
        <th class="event-none"></th>
        <th class="event-none"></th>
        <th class="event-b"></th>
        <th class="event-none"></th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters, mapActions } from 'vuex'
import calendar from '../assets/js/calendar'

export default {
  computed:  mapState({
    events: state => state.calendar.events,
  }),
  created () {
    this.$store.dispatch('calendar/fetchEvents')
  }
}
</script>
