<script setup lang="ts">
import CharmMenuHamburger from '~icons/charm/menu-hamburger'
import CharmCross from '~icons/charm/cross'

defineProps<{
  expand?: boolean
}>()
</script>

<template>
  <button type="button" class="navbar-toggler border-0 shadow-none ms-auto" :class="{ expand }">
    <CharmCross v-if="expand" />
    <CharmMenuHamburger v-else />
  </button>
</template>

<style lang="postcss" scope>
.navbar-toggler {
  transition: transform .2s ease-in-out;
  &.expand {
    transform: rotate(180deg);
  }
}
</style>
