<template>
  <section id="calendar" class="divcol gap2 card" style="--p:clamp(1em,2vw,2em)">
    <ModalCalendar ref="modalcalendar"></ModalCalendar>
    <section class="divcol gap2 card" style="--p:clamp(1em,1.5vw,1.5em)">
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
        locale="en"
      ></v-calendar>
    </section>
    
    <aside id="container-legend" class="start gap2">
      <div class="center">
        <div class="marker" style="--color: var(--success)" />
        <span>Upcoming (Drops)</span>
      </div>
      <div class="center">
        <div class="marker" style="--color: var(--warning)" />
        <span>New Projects</span>
      </div>
      <!-- <div class="center">
        <div class="marker" style="--color: var(--error)" />
        <span>Drops</span>
      </div> -->
    </aside>
  </section>
</template>

<script>
import moment from 'moment';
import ModalCalendar from './ModalCalendar.vue'
export default {
  name: "calendar",
  i18n: require("./i18n"),
  components: { ModalCalendar },
  data() {
    return {
      focus: '',
      dataNftDrops: [],
      type: 'month',
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }
  },
  async mounted () {
    this.$refs.calendar.checkChange()
    await this.upcomingListed()
    this.getNewProjects()
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
        console.log("ITEMM", event)
        this.$refs.modalcalendar.dataModalCalendar = event
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
    async getNewProjects(){
      const url = "api/v1/newprojectslisted"
      let item = {
        top: "100",
        order: "fecha"
      }
     
      this.axios.post(url, item)
        .then(async (response) => {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].fecha_lanzamiento === 0 || response.data[i].fecha_lanzamiento === "0" || !response.data[i].fecha_lanzamiento) {
              response.data[i].fecha_lanzamiento = parseInt(response.data[i].fecha_creacion)
            }
            // console.log("Lanzamiento: ",response.data[i].fecha_lanzamiento)
            // console.log("FECHA",moment(response.data[i].fecha_lanzamiento / 1000000).format("Do MMM YYYY, h:mm A"))
            let collection = {
              img: response.data[i].icon || require("@/assets/images/whitelist-image.jpg"),
              name: response.data[i].name,
              fecha_lanzamiento: response.data[i].fecha_lanzamiento,
              type: response.data[i].nft_contract,
              desc: response.data[i].descripcion,
              website: response.data[i].website,
              price: parseFloat(response.data[i].price).toFixed(2) + " NEAR",
              supply: response.data[i].total_supply,
              // price: "9 NEAR","01 FEB 2022 17:00:00"
              // supply: "3333",
              date: moment(response.data[i].fecha_lanzamiento / 1000000).format("Do MMM YYYY, h:mm A"),
              votes: response.data[i].voto,
              redes: [
                { name: "twitter", url: "https://twitter.com/" + response.data[i].twiter },
                { name: "discord", url: response.data[i].discord_server },
                { name: "telegram", url: "https://t.me/" + response.data[i].telegram },
              ],
            }
            //console.log(collection)
            //console.log(moment(collection.fecha_lanzamiento / 1000000).format("YYYY-MM-DD HH:mm"),)
            this.events.push({
              img: collection.img,
              name: collection.name,
              type: collection.type,
              supply: collection.supply,
              desc: collection.desc,
              price: collection.price,
              hour: collection.date,
              votes: collection.votes,
              redes: collection.redes,
              start: moment(collection.fecha_lanzamiento / 1000000).format("YYYY-MM-DD HH:mm"),
              end: moment(collection.fecha_lanzamiento / 1000000).format("YYYY-MM-DD HH:mm"),
              color: this.colors[5],
              timed: true,
            })
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async upcomingListed(){
      this.dataNftDrops = []
      const url = "api/v1/upcominglisted"
      let item = {
        top: "100",
        order: "fecha"
      }
     
      this.axios.post(url, item)
        .then(async (response) => {
          for (var i = 0; i < response.data.length; i++) {
            let times = await this.getTime(response.data[i].fecha_lanzamiento)
            let timeEnd = response.data[i].fecha_lanzamiento
            let collection = {
              img: require("@/assets/images/whitelist-image.jpg"),
              name: response.data[i].project_name,
              fecha_lanzamiento: response.data[i].fecha_lanzamiento,
              type: response.data[i].collection,
              desc: response.data[i].descripcion,
              hour: moment.unix(timeEnd).format("Do MMM YYYY, h:mm A"),
              votes: response.data[i].voto,
              cronometer: [ {time: times.days}, {time: times.hours}, {time: times.minutes}, {time: times.seconds} ],
              redes: [
                { name: "twitter", url: "https://twitter.com/" + response.data[i].telegram },
                { name: "discord", url: response.data[i].discord_server },
                { name: "telegram", url: "https://t.me/" + response.data[i].telegram },
              ],
            }

            this.events.push({
              img: collection.img,
              name: collection.name,
              type: collection.type,
              fecha_lanzamiento: collection.fecha_lanzamiento,
              desc: collection.desc,
              hour: collection.hour,
              votes: collection.votes,
              cronometer: collection.cronometer,
              redes: collection.redes,
              start: moment.unix(timeEnd).format("YYYY-MM-DD HH:mm"),
              end: moment.unix(timeEnd).format("YYYY-MM-DD HH:mm"),
              color: this.colors[3],
              timed: true,
            })
            console.log(this.events)
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    async getTime (timeEnd) {
      let timeNow = parseInt(new Date().getTime() / 1000)

      let time = timeEnd - timeNow

      var d = String(Math.floor(time / (3600*24)));
      var h = String(Math.floor(time % (3600*24) / 3600));
      var m = String(Math.floor(time % 3600 / 60));
      var s = String(Math.floor(time % 60));

      if (d.length === 1) {
        d = "0" + d
      }
      if (h.length === 1) {
        h = "0" + h
      }
      if (m.length === 1) {
        m = "0" + m
      }
      if (s.length === 1) {
        s = "0" + s
      }

      let item = {
        days: d,
        hours: h,
        minutes: m,
        seconds: s
      }

      return item
    },
    updateRange2 ({ start, end }) {
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
      console.log(this.events)
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  }
};
</script>

<style src="./MintCalendar.scss" lang="scss" />
