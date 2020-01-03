<template v-if="lambda">
  <v-container class CreateMethod>
    <v-radio-group v-model="MethodType" mandatory>
      <v-radio label="ARN" value="arn" color="primary"></v-radio>
      <v-radio label="From File" value="file" color="primary" v-bind:disabled="isRadioDisabled"></v-radio>
      <v-radio
        label="New Function"
        value="newFun"
        color="primary"
        v-bind:disabled="isRadioDisabled"
      ></v-radio>
    </v-radio-group>
    <p v-if="seen">{{ message }}</p>
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
  width: 30%;
}
</style>


<script>
export default {
  data() {
    return {
      message: 'From File and New Function is comming soon!',
      isRadioDisabled: true,
      seen: true
    }
  }
}
</script>
