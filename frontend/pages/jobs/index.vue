<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-row>
        <v-col />
        <v-col cols="10">
          <v-data-table
            :headers="headers"
            :items="jobs"
            :items-per-page="20"
            :loading="loading"
            :calculate-widths="false"
            @click:row="handleClick"
          />
        </v-col>
        <v-col />
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      headers: [
        { text: 'title', value: 'name', width: '20%' },
        { text: 'job type', value: 'type', width: '15%' },
        { text: 'owner/maintainer', value: 'owner', width: '20%' },
        { text: 'State', value: 'state', width: '15%' },
        { text: 'created', value: 'created', width: '15%' },
        { text: 'report', value: 'url', width: '20%' }
      ]
    }
  },
  computed: {
    jobs() {
      return this.$store.state.job.items
    },
    loading() {
      return !this.$store.state.job.updateState
    }
  },
  async created() {
    this.getAll()
  },
  methods: {
    ...mapActions({
      getAll: 'job/getAll'
    }),
    handleClick(item) {
      this.$router.push({ name: 'job-name', params: { name: item.name } })
    }
  }
}
</script>