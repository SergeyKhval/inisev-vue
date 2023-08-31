<template>
  <aside class="main-navigation">
    <section class="main-navigation__nav">
      <RouterLink to="/" class="main-navigation__link">Inbox ({{ inboxEmails.length }})</RouterLink>
      <RouterLink to="/archive" class="main-navigation__link">Archive ({{ archivedEmails.length }})</RouterLink>
    </section>
    <RouterLink to="" class="main-navigation__link">Logout</RouterLink>
  </aside>
</template>

<script lang="ts" setup>
import {inject} from "vue";
import {EMAILS_PROVIDER} from "@/constants";

const {inboxEmails, archivedEmails} = inject(EMAILS_PROVIDER)
</script>

<style lang="scss">
.main-navigation {
  width: 250px;
  background: gray;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  &__nav {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__link {
    background: white;
    border-radius: 8px;
    color: black;
    padding: 10px 20px;
    text-decoration: none;
  }
}
</style>