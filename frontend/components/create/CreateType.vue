<template>
  <v-container size="400" class="ct-vc-1">
    <v-row>
      <v-col>
        <v-radio-group v-model="radiosSelection" v-on:change="emitToParent" mandatory>
          <v-radio label="Lambda" value="lambda" color="primary"></v-radio>
          <v-radio
            label="Fargate"
            value="fargate"
            color="primary"
            v-bind:disabled="isRadioDisabled"
          ></v-radio>
          <v-radio label="SSM" value="ssm" color="primary" v-bind:disabled="isRadioDisabled"></v-radio>
        </v-radio-group>
        <!-- This changes depending on option selected -->
        <p>{{radiosOption}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.ct-vc-1 {
  position: relative;
  align-content: center;
  justify-content: center;
  width: 20%;
}

.div {
  align-content: stretch;
  justify-content: center;
}
</style>

<script>
export default {
  name: 'CreateType',
  data() {
    return {
      radiosSelection: 'lambda', // State of radio buttons
      isRadioDisabled: false
    }
  },
  methods: {
    emitToParent(event) {
      this.$emit('childToParent', this.$data.radiosSelection)
    }
  },
  computed: {
    radiosOption: function() {
      return this.$data.radiosSelection // Returns the selected state of radio buttons
    }
  }
}
</script>
