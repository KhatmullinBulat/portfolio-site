<template>
  <header class="header p-4">
    <div class="container">
      <nav
        class="w-full bg-sky-950 rounded-xl bg-opacity-75 backdrop-blur-sm sm:hidden md:block"
      >
        <ul class="flex items-center justify-around font-bold h-full py-6">
          <li v-for="(item, index) in navItems" :key="index">
            <NuxtLink
              :to="item.to"
              activeClass="text-hover"
              class="duration-300 hover:text-hover"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { name: "Home", to: "/" },
  { name: "Radar", to: "/radar" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];
</script>

<style scoped></style>
