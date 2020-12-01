<template>
  <div>
    <navigation>
      <nav class="text-center nav-wrapper">
        <NuxtLink to="/">
          Events /
        </NuxtLink>
        <NuxtLink to="/births">
          Births /
        </NuxtLink>
        <NuxtLink to="/deaths">
          Deaths
        </NuxtLink>
      </nav>
    </navigation>
  </div>
</template>

<style>
.nav-wrapper {
  font-weight: bold;
  font-size: 25px;
}

.nav-wrapper a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>
