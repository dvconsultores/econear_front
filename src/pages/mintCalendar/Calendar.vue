<template>
  <section id="calendar" class="divcol gap2 card" style="--p:2em">
    <ModalCalendar ref="modalcalendar"></ModalCalendar>
    <section class="divcol gap2 card" style="--p:1.5em">
      <aside class="controls">
        <v-btn id="today" @click="setToday">Today</v-btn>

        <div class="center">
          <v-btn icon @click="$refs.calendar.prev()">
            <v-icon large color="var(--success)">mdi-chevron-left</v-icon>
          </v-btn>
          
          <span v-if="$refs.calendar" class="tfirst">{{ $refs.calendar.title }}</span>
          
          <v-btn icon @click="$refs.calendar.next()">
            <v-icon large color="var(--success)">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </aside>

      <v-calendar
        ref="calendar"
        v-model="focus"
        color="primary"
        :events="events"
        :event-color="getEventColor"
        :type="type"
        @click:event="showEvent"
        @click:more="console('more')"
        @click:date="console('date')"
        @change="updateRange"
        locale="en"
      ></v-calendar>
    </section>
    
    <aside id="container-legend" class="start gap2">
      <div class="center">
        <div class="marker" style="--color: var(--success)" />
        <span>Upcoming</span>
      </div>
      <div class="center">
        <div class="marker" style="--color: var(--warning)" />
        <span>New</span>
      </div>
      <div class="center">
        <div class="marker" style="--color: var(--error)" />
        <span>Drops</span>
      </div>
    </aside>
  </section>
</template>

<script>
import ModalCalendar from './ModalCalendar.vue'
export default {
  name: "calendar",
  i18n: require("./i18n"),
  components: { ModalCalendar },
  data() {
    return {
      focus: '',
      type: 'month',
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    console(key) {
      console.log(key)
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.$refs.modalcalendar.modalCalendar = true))
      }

      if (this.selectedOpen) {
        this.$refs.modalcalendar.modalCalendar = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  }
};
</script>

<style src="./MintCalendar.scss" lang="scss" />
