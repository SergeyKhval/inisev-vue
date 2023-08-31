<template>
  <EmailsList title="Inbox" :emails="inboxEmails"/>
</template>

<script lang="ts" setup>
import {inject} from "vue";
import {EMAILS_PROVIDER} from "@/constants";
import EmailsList from "@/components/EmailsList.vue";

const {inboxEmails} = inject(EMAILS_PROVIDER)
</script>