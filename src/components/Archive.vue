<template>
  <EmailsList title="Archive" :emails="archivedEmails"/>
</template>
<script setup lang="ts">
import {inject} from "vue";
import {EMAILS_PROVIDER} from "@/constants";
import EmailsList from "@/components/EmailsList.vue";

const {archivedEmails} = inject(EMAILS_PROVIDER)
</script>