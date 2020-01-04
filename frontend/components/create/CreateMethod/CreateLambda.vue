<template>
  <div>
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
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'create-lambda',
  data() {
    return {
      isRadioDisabled: true,
      MethodType: 'arn'
    }
  }
}
</script>