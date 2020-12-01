<template>
  <div class="pt-5">
    <events-card :events="today.events"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EventsCard from '~/components/EventsCard.vue'

export default {
  components: {
    EventsCard
  },

  computed: {
    ...mapGetters({
      today: 'events/allEvents',
    })
  },
}
</script>

<style>

</style>
