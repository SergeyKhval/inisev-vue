<template>
  <section class="email-controls">
    <input type="checkbox" @change="toggleSelectAllEmails($event.target.checked)"/>
    <BaseButton @click="markAsRead">Mark as read (r)</BaseButton>
    <BaseButton @click="archiveEmails">Archive (a)</BaseButton>
  </section>
</template>

<script lang="ts" setup>
import {inject, onMounted, onUnmounted} from "vue";
import {EMAILS_PROVIDER} from "@/constants";
import BaseButton from "@/components/BaseButton.vue";

const {toggleSelectAllEmails, archiveEmails, markAsRead} = inject(EMAILS_PROVIDER)

function handleKeyPress(event: KeyboardEvent) {
  switch (event.key) {
    case 'a':
      archiveEmails()
      break
    case 'r':
      markAsRead()
      break
  }
}

onMounted(() => {
  document.addEventListener('keypress', handleKeyPress)
})

onUnmounted(() => {
  document.removeEventListener('keypress', handleKeyPress)
})
</script>

<style lang="scss">
.email-controls {
  margin-bottom: 40px;
  display: flex;
  padding: 0 10px;
  gap: 20px;
}
</style>