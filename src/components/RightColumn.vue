<template>
  <div>
    <tr v-for="event in events"
      :key="event.event_id">
      <th scope="row" class="bodyTable">{{ event.item_id }}</th>
      <td class="bodyTable">{{ event.event_name }}</td>
      <td class="bodyTable">{{ event.location }}</td>
      <td class="bodyTable">{{ event.start_time }}</td>
      <td class="bodyTable">{{ event.end_time }}</td>
    </tr>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex'
import calendar from '../assets/js/calendar'

export default {
  computed:  mapState({
    events: state => state.events,
  }),
  created () {
    this.$store.dispatch('events/fetchEvents')
  }
}
</script>
