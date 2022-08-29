<template>
  <div class="container h-50 d-flex flex-column justify-content-center align-items-center">
    <h1>404 Not Found</h1>
    <RouterLink v-slot="{ href }" to="/" custom>
      <a :href="href">
        > Back to Home
      </a>
    </RouterLink>
  </div>
</template>
