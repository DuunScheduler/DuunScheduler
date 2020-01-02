<template>
  <v-layout>
    <v-flex>
      <v-stepper v-model="e13">
        <v-stepper-header>
          <v-stepper-step step="1">Select job type</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2">Creation Method</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Finalize</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <CreateType />
            <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <CreateMethod />
            <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
            <v-btn @click="e13 = 1" text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card color="grey lighten-5" class="mb-12" height="400px"></v-card>
            <v-btn color="primary">Continue</v-btn>
            <v-btn @click="e13 = 2" text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateType from '~/components/create/CreateType.vue'
import CreateMethod from '~/components/create/CreateMethod.vue'

export default Vue.extend({
  components: {
    CreateType,
    CreateMethod
  },
  data() {
    return {
      e13: 0
    }
  }
})
</script>