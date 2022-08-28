<script setup lang="ts">
defineProps<{
  active?: boolean
  href?: string
  target?: string
}>()
</script>

<template>
  <li class="nav-item" :class="{ active }">
    <a class="nav-link" :href="href" :target="target" :class="{ active }">
      <slot></slot>
    </a>
  </li>
</template>
