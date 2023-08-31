<script setup lang="ts">
import EmailsProvider from "./providers/EmailsProvider.vue";
import MainNavigation from "@/components/MainNavigation.vue";
import EmailDrawer from "@/components/EmailDrawer.vue";
</script>

<template>
  <EmailsProvider>
    <div class="main">
      <MainNavigation/>

      <div class="router-view">
        <RouterView/>
      </div>
    </div>
    <EmailDrawer/>
  </EmailsProvider>
</template>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
}

.main {
  display: flex;
  height: 100vh;
}

.router-view {
  padding: 40px 120px 40px 80px;
  flex-grow: 1;
}
</style>
