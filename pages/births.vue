<template>
  <div class="pt-5">
    <events-card :events="today.births"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EventsCard from '~/components/EventsCard.vue'

export default {
  head() {
    return {
      htmlAttrs: { lang: 'en' },
      title: 'Births | On This Day',
      meta: [
        {
          name: 'description',
          content:
            'Births of important people that happend on this day.'
        }
      ]
    }
  },

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
