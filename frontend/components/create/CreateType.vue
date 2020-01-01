<template>
  <v-container size="400" class="ct-vc-1">
    <v-row>
      <v-col>
        <v-radio-group v-model="radios" :mandatory="true">
          <v-radio label="Lambda" value="value1">sdasda</v-radio>
          <v-radio label="Fargate" value="value"></v-radio>
          <v-radio label="SSM" value="value3">asdasd</v-radio>
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