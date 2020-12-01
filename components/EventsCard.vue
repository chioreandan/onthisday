<template>
  <div id="cardWrapper">
    <div v-for="event in events" :key="event.description" class="mb-2">
      <b-card bg-variant="dark" text-variant="white" >
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
.card-text-wrapper {
  width: 400px;
}

#cardWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>
