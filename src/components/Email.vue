<template>
  <article class="email" :class="{'email--read': email.isRead}" @click="email.isExpanded = true">
    <input type="checkbox" v-model="email.isSelected" @click.stop/>
    <h2 class="email__subject">{{ email.subject }}</h2>
  </article>
</template>

<script setup lang="ts">
import {Email} from "@/types";

defineProps<{ email: Email }>()
</script>

<style lang="scss">
.email {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 10px;
  background: #eeeeee;
  border-radius: 8px;
  border: 1px solid gray;
  cursor: pointer;

  &__subject {
    margin: 0;
  }

  &--read {
    opacity: 0.5;
  }
}
</style>