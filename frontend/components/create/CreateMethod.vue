<template v-if="lambda">
  <v-container class CreateMethod>
    <CreateLambda v-if="MethodType === 'lambda'" />
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
import CreateLambda from '~/components/create/CreateMethod/CreateLambda.vue'
export default {
  components: {
    CreateLambda
  },
  name: 'create-method',
  props: {
    MethodType: ''
  },
  data() {
    return {
      message: 'From File and New Function is comming soon!',
      isRadioDisabled: true,
      seen: true
    }
  }
}
</script>
