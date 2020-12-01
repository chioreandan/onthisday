<template>
  <div class="pt-5">
    <events-card :events="today.events"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EventsCard from '~/components/EventsCard.vue'

export default {
  head() {
    return {
      htmlAttrs: { lang: 'en' },
      title: 'Events | On This Day',
      meta: [
        {
          name: 'description',
          content:
            'Major events that happend on this day.'
        }
      ]
    }
  },

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
