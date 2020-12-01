<template>
  <div class="card-columns px-1">
    <b-card bg-variant="dark" text-variant="white" v-for="event in events" :key="event.description" class="mb-2 border border-primary">
      <b-card-title>
        <h1> <strong> {{event.year}} </strong> </h1>
      </b-card-title>
      <b-card-text class="card-text-wrapper">
        <strong> {{event.description}} </strong>
      </b-card-text>
      <b-row v-for="wiki in event.wikipedia" :key="wiki.wikipedia">
        <b-col cols="6">
          <a :href="wiki.wikipedia" target="_blank">{{wiki.title}}</a>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>
