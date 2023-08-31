<template>
  <section class="emails-list">
    <h1 class="emails-list__title">{{ title }}</h1>
    <div class="emails-list__subtitle">Emails selected ({{ selectedEmails.length }})</div>

    <EmailControls/>

    <section class="emails-list__emails">
      <Email v-for="email in emails" :key="email.id" :email="email"/>
    </section>
  </section>
</template>
<script setup lang="ts">
import Email from "@/components/Email.vue";
import EmailControls from "@/components/EmailControls.vue";
import {computed} from "vue";

type EmailsListProps = {
  emails: Email[];
  title: string;
}

const props = defineProps<EmailsListProps>()

const selectedEmails = computed(() => props.emails.filter(email => email.isSelected))
</script>

<style lang="scss">
.emails-list {
  &__title {
    font-size: 32px;
  }

  &__subtitle {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  &__emails {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>