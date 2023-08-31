<template>
  <Teleport to="body">
    <div v-if="expandedEmail" class="drawer" @click="expandedEmail.isExpanded = false">
      <div class="drawer__container" @click.stop>
        <button class="drawer__close" @click="expandedEmail.isExpanded = false">Close (Esc)</button>
        <div class="drawer__actions">
          <BaseButton @click="readEmail">Mark as read (r)</BaseButton>
          <BaseButton @click="archiveEmail">Archive (a)</BaseButton>
        </div>
        <section>
          <h1>{{ expandedEmail.subject }}</h1>
          <p>{{ expandedEmail.body }}</p>
        </section>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {inject, onMounted, onUnmounted} from "vue";
import {EMAILS_PROVIDER} from "@/constants";
import BaseButton from "@/components/BaseButton.vue";

function readEmail() {
  expandedEmail.value.isRead = true
}

function archiveEmail() {
  expandedEmail.value.isArchived = true
  expandedEmail.value.isSelected = false
}

const {expandedEmail} = inject(EMAILS_PROVIDER)

function handleKeyDown(event: KeyboardEvent) {
  if (expandedEmail) {
    switch (event.key) {
      case 'Escape':
        expandedEmail.value.isExpanded = false
        break
      case 'r':
        readEmail()
        break
      case 'a':
        archiveEmail()
        break
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style lang="scss">
.drawer {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &__container {
    background: white;
    width: 500px;
    height: 100%;
    margin-left: auto;
    padding: 20px;
  }

  &__close {
    background: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 15px;
  }

  &__actions {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }
}
</style>