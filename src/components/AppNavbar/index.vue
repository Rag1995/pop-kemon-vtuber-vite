<script setup lang="ts">
import { useAppStore, useVtubersStore } from '@/store'
import { storeToRefs } from 'pinia'
import NavbarToggler from './NavbarToggler.vue'
import NavbarLang from './NavbarLang.vue'
import BsCollapse from '@/components/utils/bootstrap/BsCollapse.vue'
import BsNavItem from '@/components/utils/bootstrap/BsNavItem.vue'
import IconSunny from '~icons/material-symbols/wb-sunny'
import IconMoon from '~icons/ri/moon-clear-fill'
import IconGithub from '~icons/mdi/github'

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)
const { toggleDark } = appStore

const breakpoint = ref('md')

const expand = ref(false)
const collapse = ref<InstanceType<typeof BsCollapse>>()

const vtubersStore = useVtubersStore()
const { vtubers } = storeToRefs(vtubersStore)
</script>

<template>
  <nav
    class="position-fixed top-0 start-0 end-0 navbar" :class="[
      `navbar-expand-${breakpoint}`,
      {
        'navbar-light': !isDark,
        'bg-light': expand,
        [`bg-${breakpoint}-body`]: !isDark,
        'bg-dark': isDark,
        'navbar-dark': isDark,
      },
    ]"
  >
    <div class="container-fluid">
      <div class="overflow-hidden d-flex flex-nowrap flex-grow-1" :class="`flex-${breakpoint}-grow-0`">
        <RouterLink v-slot="{ href }" to="/" custom>
          <a class="navbar-brand text-truncate flex-shrink-1" :href="href" @click="collapse?.hide()">
            {{ $t('title') }}
          </a>
        </RouterLink>
        <NavbarToggler :expand="expand" @click="collapse?.toggle()" />
      </div>

      <BsCollapse
        ref="collapse" :model-value="expand" class="navbar-collapse" @show="expand = true"
        @hidden="expand = false"
      >
        <ul class="navbar-nav flex-grow-1">
          <RouterLink
            v-for="{ id, name } in vtubers" :key="id" v-slot="{ isActive, href }" :to="`/vtuber/${id}`"
            custom
          >
            <BsNavItem :active="isActive" :href="href" @click="collapse?.hide()">
              {{ $t(name) }}
            </BsNavItem>
          </RouterLink>

          <BsNavItem
            href=" https://github.com/Rag1995/pop-kemon-vtuber-vite" target="_blank" class="mt-3" :class="[
              `mt-${breakpoint}-0`,
              `ms-${breakpoint}-auto`,
            ]"
          >
            <IconGithub class="me-1" />Github
          </BsNavItem>

          <BsNavItem @click=" toggleDark()">
            <template v-if="isDark">
              <IconMoon class="me-1" />Dark
            </template>
            <template v-else>
              <IconSunny class="me-1" />Light
            </template>
          </BsNavItem>

          <NavbarLang />
        </ul>
      </BsCollapse>
    </div>
  </nav>
</template>

<style lang="postcss" scope>
.navbar {
  z-index: 999;
}
</style>
