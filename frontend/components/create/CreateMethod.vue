<template>
  <v-container class CreateMethod>
    <v-radio-group v-model="MethodType" mandatory>
      <v-radio label="ARN" value="arn" color="primary"></v-radio>
      <v-radio label="From File" value="file" color="primary"></v-radio>
      <v-radio label="New Function" value="newFun" color="primary"></v-radio>
    </v-radio-group>
    <p>Blah {{ this.message }}</p>
  </v-container>
  <!-- <p>
    from file
    arn
    write in file
    runtime
    textbox
  </p>-->
</template>


<style>
.CreateMethod {
  align-content: center;
  justify-content: center;
  width: 20%;
}
</style>


<script>
import Vue from 'vue'
export default Vue.extend({
  data: {
    message: 'blah blah'
  }
})
</script>
