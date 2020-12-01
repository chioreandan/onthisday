<template>
  <div class="pt-5">
    <events-card :events="today.births"/>
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
      today: 'events/allBirths',
    })
  },
}
</script>
