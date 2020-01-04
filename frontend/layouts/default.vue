<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" class="nav-name" />
      <span>
        <v-btn tile true color="primary" to="/jobs">jobs</v-btn>
        <v-btn tile true color="primary" to="/create">create</v-btn>
      </span>
      <v-spacer />
      <v-btn tile true color="primary" to="/settings">Settings</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Jobs',
          to: '/jobs'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Duun Scheduler'
    }
  }
}
</script>

<style>
.nav-name {
  padding-right: 10px;
}
</style>
