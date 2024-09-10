<script setup lang="ts">
  import menu from "./assets/menu.json"
</script>
<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-navigation-drawer class="bg-indigo-darken-4">
        <v-list v-for="m in menu" :key="m.path">
          <router-link :to="m.path" class="link">
            <v-list-item class="text-white font-weight-bold">
              <p>{{ m.label }}</p>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar class="pa-2">
        <h1>Application</h1>
      </v-app-bar>
      <v-main>
        <v-container width="100vw">
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
<style scoped>
.link {
  text-decoration: none;
}
</style>
