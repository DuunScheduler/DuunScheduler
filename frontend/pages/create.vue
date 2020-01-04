<template>
  <v-layout>
    <v-flex>
      <v-stepper v-model="stepperState">
        <v-stepper-header>
          <v-stepper-step step="1">Select job type</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2">Creation Method</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Finalize</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <!--- Grabs emitted object from child and passes it to method -->
            <CreateType v-on:childToParent="OnTypeChange" />
            <v-btn color="primary" @click="stepperState = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <CreateMethod />
            <v-btn color="primary" @click="stepperState = 3">Continue</v-btn>
            <v-btn @click="stepperState = 1" text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card color="grey lighten-5" class="mb-12" height="400px"></v-card>
            <v-btn color="primary">Continue</v-btn>
            <v-btn @click="stepperState = 2" text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <p>{{creationType}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
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
      stepperState: 0,
      creationType: ''
    }
  },
  methods: {
    OnTypeChange(value) {
      this.creationType = value
      console.log(value)
    }
  }
})
</script>
