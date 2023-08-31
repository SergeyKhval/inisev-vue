<template>
  <slot/>
</template>

<script lang="ts" setup>
import {computed, inject, provide, ref} from "vue";
import {EMAILS_PROVIDER} from "@/constants";
import {Email} from "@/types";


const emails = ref<Email[]>([
  {
    id: 1,
    subject: "Your 7-figure plan goes bye-bye at midninght",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isRead: false,
    isArchived: false,
    isSelected: false,
    isExpanded: false,
  },
  {
    id: 2,
    subject: "[WEEKEND ONLY] Get this NOW before",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isRead: false,
    isArchived: false,
    isSelected: false,
    isExpanded: false,
  },
  {
    id: 3,
    subject: "Uh-oh, your prescription is expiring",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isRead: false,
    isArchived: false,
    isSelected: false,
    isExpanded: false,
  }
])

const inboxEmails = computed(() => {
  return emails.value.filter(email => !email.isArchived)
})

const archivedEmails = computed(() => {
  return emails.value.filter(email => email.isArchived)
})

const selectedEmails = computed(() => {
  return emails.value.filter(email => email.isSelected)
})

const expandedEmail = computed(() => {
  return emails.value.find(email => email.isExpanded)
})

function toggleSelectAllEmails(isSelected: boolean) {
  emails.value.forEach(email => email.isSelected = isSelected)
}

function archiveEmails() {
  selectedEmails.value.forEach(email => {
    Object.assign(email, {
      isSelected: false,
      isArchived: true,
    })
  })
}

function markAsRead() {
  selectedEmails.value.forEach(email => email.isRead = true)
}

provide(EMAILS_PROVIDER, {
  emails,
  inboxEmails,
  archivedEmails,
  toggleSelectAllEmails,
  archiveEmails,
  markAsRead,
  expandedEmail,
})
</script>