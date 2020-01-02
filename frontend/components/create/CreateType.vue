<template>
  <v-container size="400" class="ct-vc-1">
    <v-row>
      <v-col>
        <v-radio-group v-model="radios" mandatory>
          <v-radio label="Lambda" value="value1" color="primary"></v-radio>
          <v-radio label="Fargate" value="value" color="primary"></v-radio>
          <v-radio label="SSM" value="value3" color="primary"></v-radio>
        </v-radio-group>
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

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      radios: 'Primary'
    }
  }
})
</script>
